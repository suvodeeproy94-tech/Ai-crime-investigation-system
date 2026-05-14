// This file handles case operations in the backend.
// It creates, reads, updates, and deletes case records.
const Case = require('../models/Case') // This line imports the Case model.
const Notification = require('../models/Notification') // This line imports the Notification model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToAll, sendToUser } = require('../utils/socketHelper') // This line imports socket helpers.

// This helper creates a safe sort object for case lists.
const getCaseSort = (sortBy, sortOrder) => {
    // Only these fields are allowed for sorting.
    const allowedSortFields = ['createdAt', 'status', 'priority', 'title']

    // Use createdAt when the requested sort field is not allowed.
    let sortField = 'createdAt'
    if (allowedSortFields.includes(sortBy)) {
        sortField = sortBy
    }

    // Use newest first unless the frontend asks for ascending order.
    let sortDirection = -1
    if (sortOrder === 'asc') {
        sortDirection = 1
    }

    // Build the sort object in a clear step.
    const sort = {}
    sort[sortField] = sortDirection

    return sort
}

// This helper joins the role filter with search filters.
const buildCaseFilter = (baseFilter, extraFilters) => {
    // If there are no extra filters, only the role filter is needed.
    if (extraFilters.length === 0) {
        return baseFilter
    }

    // MongoDB needs all filters inside $and when many rules are used together.
    const allFilters = [baseFilter]

    for (const filter of extraFilters) {
        allFilters.push(filter)
    }

    return { $and: allFilters }
}

// This part creates a new case record.
exports.createCase = async (req, res) => {
    // Build the new case data step by step from the request body.
    const caseData = {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        status: req.body.status,
        priority: req.body.priority,
        assignedTo: req.body.assignedTo,
        suspects: req.body.suspects,
        evidence: req.body.evidence,
        filedBy: req.user.id
    }

    // Create the case document before saving it to MongoDB.
    const newCase = new Case(caseData)

    // Store the first status in the status history.
    newCase.statusHistory = [
        {
            status: newCase.status || 'open',
            changedBy: req.user.id
        }
    ]

    try {
        // Save the new case in the database.
        const savedCase = await newCase.save()

        // Save an audit log for case creation.
        await createActivityLog(req, 'create', 'case', `Created case "${savedCase.title}"`, String(savedCase._id))

        // Tell connected users that case data changed.
        sendToAll(req, 'caseUpdated', savedCase)

        // Send the saved case back to the frontend.
        res.json(savedCase)
    } catch (error) {
        // Send a simple server error if saving fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns the case list that the current user can access.
exports.getAllCases = async (req, res) => {
    try {
        // Normal users can only see cases filed by them.
        let baseFilter = {}
        if (req.user.role === 'user') {
            baseFilter = { filedBy: req.user.id }
        }

        // Read optional filters from the URL query string.
        const status = req.query.status
        const priority = req.query.priority
        const searchText = req.query.q
        const assignedTo = req.query.assignedTo
        const filedBy = req.query.filedBy
        const fromDate = req.query.fromDate
        const toDate = req.query.toDate
        const sortBy = req.query.sortBy
        const sortOrder = req.query.sortOrder

        // Store all optional filters in one simple list.
        const extraFilters = []

        if (status) {
            extraFilters.push({ status })
        }

        if (priority) {
            extraFilters.push({ priority })
        }

        if (assignedTo) {
            extraFilters.push({ assignedTo })
        }

        // Staff can search by the user who filed the case.
        if (filedBy && req.user.role !== 'user') {
            extraFilters.push({ filedBy })
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

        // Add a date filter only when at least one date is given.
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
        const finalFilter = buildCaseFilter(baseFilter, extraFilters)

        // Build a safe sort object.
        const sort = getCaseSort(sortBy, sortOrder)

        // Load cases with useful linked data for the frontend.
        const cases = await Case.find(finalFilter)
            .populate('filedBy', 'name email role')
            .populate('assignedTo', 'name email role')
            .populate('suspects', 'name status')
            .populate('evidence', 'title status')
            .sort(sort)

        // Send the case list to the frontend.
        res.json(cases)
    } catch (error) {
        // Send a simple server error if loading fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns one case by id.
exports.getCaseById = async (req, res) => {
    try {
        // Find the case and include related user, suspect, and evidence details.
        const caseItem = await Case.findById(req.params.id)
            .populate('filedBy', 'name email role')
            .populate('assignedTo', 'name email role')
            .populate('suspects', 'name status')
            .populate('evidence', 'title status')

        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' })
        }

        // Normal users may only open their own cases.
        if (req.user.role === 'user' && String(caseItem.filedBy._id) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Send the found case to the frontend.
        res.json(caseItem)
    } catch (error) {
        // Send a simple server error if lookup fails.
        res.status(500).json({ error: error.message })
    }
}

// This part updates allowed fields for one case.
exports.updateCase = async (req, res) => {
    try {
        // Find the case before changing it.
        const caseItem = await Case.findById(req.params.id)

        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' })
        }

        // Remember the old status so we can add history only when it changes.
        const oldStatus = caseItem.status

        // Update each field only when the frontend sends that field.
        if (req.body.title !== undefined) {
            caseItem.title = req.body.title
        }

        if (req.body.description !== undefined) {
            caseItem.description = req.body.description
        }

        if (req.body.location !== undefined) {
            caseItem.location = req.body.location
        }

        if (req.body.latitude !== undefined) {
            caseItem.latitude = req.body.latitude
        }

        if (req.body.longitude !== undefined) {
            caseItem.longitude = req.body.longitude
        }

        if (req.body.status !== undefined) {
            caseItem.status = req.body.status
        }

        if (req.body.priority !== undefined) {
            caseItem.priority = req.body.priority
        }

        if (req.body.assignedTo !== undefined) {
            caseItem.assignedTo = req.body.assignedTo
        }

        if (req.body.suspects !== undefined) {
            caseItem.suspects = req.body.suspects
        }

        if (req.body.evidence !== undefined) {
            caseItem.evidence = req.body.evidence
        }

        // Add status history only when the status really changed.
        const statusChanged = req.body.status !== undefined && req.body.status !== oldStatus
        if (statusChanged) {
            caseItem.statusHistory.push({
                status: req.body.status,
                changedBy: req.user.id
            })
        }

        // Save the updated case.
        const updatedCase = await caseItem.save()

        // Save an audit log for case update.
        await createActivityLog(req, 'update', 'case', `Updated case "${updatedCase.title}"`, String(updatedCase._id))

        // Tell connected users that case data changed.
        sendToAll(req, 'caseUpdated', updatedCase)

        // Tell the case owner when another user changed the case status.
        if (statusChanged && String(updatedCase.filedBy) !== req.user.id) {
            const notification = await Notification.create({
                recipient: updatedCase.filedBy,
                title: 'Case status updated',
                message: `Status for case "${updatedCase.title}" changed to ${updatedCase.status}.`,
                relatedCase: updatedCase._id,
                createdBy: req.user.id
            })

            // Send live notification to the case owner.
            sendToUser(req, updatedCase.filedBy, 'newNotification', notification)
        }

        // Send the updated case to the frontend.
        res.json(updatedCase)
    } catch (error) {
        // Send a simple server error if update fails.
        res.status(500).json({ error: error.message })
    }
}

// This part deletes one case by id.
exports.deleteCase = async (req, res) => {
    try {
        // Delete the case by id.
        const deletedCase = await Case.findByIdAndDelete(req.params.id)

        if (!deletedCase) {
            return res.status(404).json({ message: 'Case not found' })
        }

        // Save an audit log for case delete.
        await createActivityLog(req, 'delete', 'case', `Deleted case "${deletedCase.title}"`, String(deletedCase._id))

        // Tell connected users that case data changed.
        sendToAll(req, 'caseUpdated', deletedCase)

        // Confirm the delete action.
        res.json({ message: 'Case deleted' })
    } catch (error) {
        // Send a simple server error if deletion fails.
        res.status(500).json({ error: error.message })
    }
}
