// This file handles FIR operations in the backend.
// It links FIR records with complaints and notifications.
const FIR = require('../models/FIR') // This line imports the FIR model.
const Complaint = require('../models/Complaint') // This line imports the Complaint model.
const Notification = require('../models/Notification') // This line imports the Notification model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToAll, sendToUser } = require('../utils/socketHelper') // This line imports socket helpers.

// This helper creates a safe sort object for FIR lists.
const getFIRSort = (sortBy, sortOrder) => {
    // Only these fields are allowed for sorting.
    const allowedSortFields = ['createdAt', 'status', 'title']

    // Use createdAt if the requested field is not allowed.
    let sortField = 'createdAt'
    if (allowedSortFields.includes(sortBy)) {
        sortField = sortBy
    }

    // Use newest first unless ascending order is requested.
    let sortDirection = -1
    if (sortOrder === 'asc') {
        sortDirection = 1
    }

    // Build sort object in a clear step.
    const sort = {}
    sort[sortField] = sortDirection

    return sort
}

// This helper joins the role filter with optional search filters.
const buildFIRFilter = (baseQuery, extraFilters) => {
    // When there are no extra filters, use only the role based query.
    if (extraFilters.length === 0) {
        return baseQuery
    }

    // MongoDB uses $and when many filters must be true together.
    const allFilters = [baseQuery]

    for (const filter of extraFilters) {
        allFilters.push(filter)
    }

    return { $and: allFilters }
}

// This part creates a new FIR from a complaint.
exports.createFIR = async (req, res) => {
    try {
        // Read FIR fields from the request body.
        const complaintId = req.body.complaintId
        const title = req.body.title
        const description = req.body.description
        const location = req.body.location
        const status = req.body.status || 'pending'

        if (!complaintId) {
            return res.status(400).json({ message: 'complaintId is required' })
        }

        // Load the related complaint.
        const complaint = await Complaint.findById(complaintId)

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }

        // Stop duplicate FIR creation for the same complaint.
        if (complaint.firCreated) {
            return res.status(400).json({ message: 'An FIR has already been created for this complaint' })
        }

        // Build the FIR document using complaint values as backup values.
        const fir = new FIR({
            title: title || complaint.title,
            description: description || complaint.description,
            location: location || complaint.location,
            status,
            statusHistory: [
                {
                    status,
                    changedBy: req.user.id
                }
            ],
            createdBy: req.user.id,
            complaint: complaint._id
        })

        // Save the FIR document.
        const savedFIR = await fir.save()

        // Update the complaint so it points to the new FIR.
        complaint.assignedTo = req.user.id
        complaint.status = 'under review'
        complaint.firCreated = savedFIR._id
        await complaint.save()

        // Save an audit log for FIR creation.
        await createActivityLog(req, 'create', 'fir', `Created FIR "${savedFIR.title}"`, String(savedFIR._id))

        // Tell connected users that FIR data changed.
        sendToAll(req, 'firUpdated', savedFIR)

        // Return the newly created FIR.
        res.json(savedFIR)
    } catch (error) {
        // Return a simple server error if FIR creation fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns FIR records that the current user can access.
exports.getAllFIR = async (req, res) => {
    try {
        // Admin starts with an empty query and can see every FIR.
        let baseQuery = {}

        // Normal users see FIRs linked to their own complaints.
        if (req.user.role === 'user') {
            const complaints = await Complaint.find({ createdBy: req.user.id }).select('_id')
            const complaintIds = []

            for (const complaint of complaints) {
                complaintIds.push(complaint._id)
            }

            baseQuery = { complaint: { $in: complaintIds } }
        }

        // Police users see FIRs created by them.
        if (req.user.role === 'police') {
            baseQuery = { createdBy: req.user.id }
        }

        // Read optional filters from the URL query string.
        const status = req.query.status
        const searchText = req.query.q
        const location = req.query.location
        const fromDate = req.query.fromDate
        const toDate = req.query.toDate
        const sortBy = req.query.sortBy
        const sortOrder = req.query.sortOrder

        // Store optional filters in one simple list.
        const extraFilters = []

        if (status) {
            extraFilters.push({ status })
        }

        if (location) {
            extraFilters.push({ location: { $regex: location, $options: 'i' } })
        }

        // Search in title, description, and location when search text is given.
        if (searchText) {
            extraFilters.push({
                $or: [
                    { title: { $regex: searchText, $options: 'i' } },
                    { description: { $regex: searchText, $options: 'i' } },
                    { location: { $regex: searchText, $options: 'i' } }
                ]
            })
        }

        // Add date range filter only when at least one date is given.
        if (fromDate || toDate) {
            const createdAt = {}

            if (fromDate) {
                createdAt.$gte = new Date(fromDate)
            }

            if (toDate) {
                createdAt.$lte = new Date(toDate)
            }

            extraFilters.push({ createdAt })
        }

        // Join role rules and search rules into one MongoDB filter.
        const finalQuery = buildFIRFilter(baseQuery, extraFilters)

        // Build a safe sort object.
        const sort = getFIRSort(sortBy, sortOrder)

        // Load FIRs with linked creator and complaint details.
        const firs = await FIR.find(finalQuery)
            .populate('createdBy', 'name email role')
            .populate('complaint', 'title status createdBy assignedTo')
            .sort(sort)

        // Return the FIR list to the frontend.
        res.json(firs)
    } catch (error) {
        // Return a simple server error if loading fails.
        res.status(500).json({ error: error.message })
    }
}

// This part updates allowed FIR fields and creates a notification when status changes.
exports.updateFIR = async (req, res) => {
    try {
        // Find the FIR by id before changing it.
        const fir = await FIR.findById(req.params.id)

        if (!fir) {
            return res.status(404).json({ message: 'FIR not found' })
        }

        // Police users may update only FIRs created by them.
        if (req.user.role === 'police' && fir.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Only the officer who created this FIR may update it' })
        }

        // Remember the old status before updating.
        const oldStatus = fir.status

        // Update each allowed field only when it is provided.
        if (req.body.title !== undefined) {
            fir.title = req.body.title
        }

        if (req.body.description !== undefined) {
            fir.description = req.body.description
        }

        if (req.body.location !== undefined) {
            fir.location = req.body.location
        }

        if (req.body.status !== undefined) {
            fir.status = req.body.status
        }

        // Add status history only when status changed.
        const statusChanged = req.body.status !== undefined && req.body.status !== oldStatus
        if (statusChanged) {
            fir.statusHistory.push({
                status: req.body.status,
                changedBy: req.user.id
            })
        }

        // Save the updated FIR record.
        const updatedFIR = await fir.save()

        // Save an audit log for FIR update.
        await createActivityLog(req, 'update', 'fir', `Updated FIR "${updatedFIR.title}"`, String(updatedFIR._id))

        // Tell connected users that FIR data changed.
        sendToAll(req, 'firUpdated', updatedFIR)

        // Notify the complaint owner when FIR status changes.
        if (statusChanged) {
            const complaint = await Complaint.findById(fir.complaint)

            if (complaint) {
                const notification = await Notification.create({
                    recipient: complaint.createdBy,
                    title: 'FIR status updated',
                    message: `Status for FIR "${updatedFIR.title}" changed to ${updatedFIR.status}.`,
                    createdBy: req.user.id
                })

                // Send live notification to the complaint owner.
                sendToUser(req, complaint.createdBy, 'newNotification', notification)
            }
        }

        // Return the updated FIR record.
        res.json(updatedFIR)
    } catch (error) {
        // Return a simple server error if update fails.
        res.status(500).json({ error: error.message })
    }
}

// This part deletes one FIR and resets the linked complaint if needed.
exports.deleteFIR = async (req, res) => {
    try {
        // Find the FIR by id.
        const fir = await FIR.findById(req.params.id)

        if (!fir) {
            return res.status(404).json({ message: 'FIR not found' })
        }

        // Police users may delete only FIRs created by them.
        if (req.user.role === 'police' && fir.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Only the officer who created this FIR may delete it' })
        }

        // Reset the complaint if it still exists.
        const complaint = await Complaint.findById(fir.complaint)
        if (complaint) {
            complaint.firCreated = undefined
            complaint.status = 'open'
            await complaint.save()
        }

        // Delete the FIR document.
        await fir.deleteOne()

        // Save an audit log for FIR delete.
        await createActivityLog(req, 'delete', 'fir', `Deleted FIR "${fir.title}"`, String(fir._id))

        // Tell connected users that FIR data changed.
        sendToAll(req, 'firUpdated', fir)

        // Confirm successful deletion.
        res.json({ message: 'Deleted' })
    } catch (error) {
        // Return a simple server error if deletion fails.
        res.status(500).json({ error: error.message })
    }
}
