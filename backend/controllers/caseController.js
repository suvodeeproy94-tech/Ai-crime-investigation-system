// This file handles case operations in the backend.
// This file creates, reads, updates, and deletes case records.
const Case = require('../models/Case') // This line imports the Case model.
const Notification = require('../models/Notification') // This line imports the Notification model.

// This part creates a new case record.
exports.createCase = async (req, res) => {
    // This part builds a new case document from request body and authenticated user information.
    const newCase = new Case({ ...req.body, filedBy: req.user.id }) // This line spreads request body fields and sets filedBy to current user id.
    newCase.statusHistory = [{ status: newCase.status || 'open', changedBy: req.user.id }] // This line stores the first case status.

    try {
        const savedCase = await newCase.save() // save the new case in the database
        res.json(savedCase) // send the saved case back to the client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if save fails
    }
}

// This part returns the case list that the current user can access.
exports.getAllCases = async (req, res) => {
    const filter = req.user.role === 'user' ? { filedBy: req.user.id } : {} // regular users only see their own cases staff see all cases

    try {
        // This part reads optional case filter inputs from query string.
        const { status, priority, q, assignedTo, filedBy, fromDate, toDate, sortBy, sortOrder } = req.query // read all optional query filters
        const andConditions = [] // store optional conditions in one list

        // This part filters cases by status when provided.
        if (status) {
            andConditions.push({ status }) // add status condition
        }

        // This part filters cases by priority when provided.
        if (priority) {
            andConditions.push({ priority }) // add priority condition
        }

        // This part filters by assigned officer when provided.
        if (assignedTo) {
            andConditions.push({ assignedTo }) // add assignedTo condition
        }

        // This part allows staff roles to filter by filedBy user id.
        if (filedBy && req.user.role !== 'user') {
            andConditions.push({ filedBy }) // add filedBy filter for admin or police
        }

        // This part performs free text search across title, description, and location.
        if (q) {
            andConditions.push({
                $or: [
                    { title: { $regex: q, $options: 'i' } }, // search title
                    { description: { $regex: q, $options: 'i' } }, // search description
                    { location: { $regex: q, $options: 'i' } } // search location
                ]
            })
        }

        // This part applies date range filter for case creation date.
        if (fromDate || toDate) {
            const createdAt = {} // create date filter object
            if (fromDate) createdAt.$gte = new Date(fromDate) // set lower boundary
            if (toDate) createdAt.$lte = new Date(toDate) // set upper boundary
            andConditions.push({ createdAt }) // store date condition
        }

        // This part combines base role filter with optional conditions.
        const finalFilter = andConditions.length > 0 ? { $and: [filter, ...andConditions] } : filter // merge conditions only when needed

        // This part applies simple controlled sorting.
        const sortField = ['createdAt', 'status', 'priority', 'title'].includes(sortBy) ? sortBy : 'createdAt' // allow only known fields
        const sortDirection = sortOrder === 'asc' ? 1 : -1 // use descending by default

        const cases = await Case.find(finalFilter) // find cases using role and filter conditions
            .populate('filedBy', 'name email role') // attach filedBy user details
            .populate('assignedTo', 'name email role') // attach assignedTo user details
            .populate('suspects', 'name status') // attach suspects details
            .populate('evidence', 'title status') // attach evidence details
            .sort({ [sortField]: sortDirection }) // apply sorting to case list

        res.json(cases) // send case list to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if query fails
    }
}

// This part returns one case by id.
exports.getCaseById = async (req, res) => {
    try {
        const caseItem = await Case.findById(req.params.id) // find case by id from request params
            .populate('filedBy', 'name email role') // attach filedBy user details
            .populate('assignedTo', 'name email role') // attach assignedTo user details
            .populate('suspects', 'name status') // attach suspects details
            .populate('evidence', 'title status') // attach evidence details

        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' }) // return not found if no case exists
        }

        if (req.user.role === 'user' && String(caseItem.filedBy._id) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' }) // block access if regular user is not the case owner
        }

        res.json(caseItem) // send the found case to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if lookup fails
    }
}

// This part updates allowed fields for one case.
exports.updateCase = async (req, res) => {
    const updates = {
        title: req.body.title, // new title if provided
        description: req.body.description, // new description if provided
        location: req.body.location, // new location if provided
        status: req.body.status, // new status if provided
        priority: req.body.priority, // new priority if provided
        assignedTo: req.body.assignedTo, // new assignedTo if provided
        suspects: req.body.suspects, // new suspects if provided
        evidence: req.body.evidence // new evidence if provided
    }

    Object.keys(updates).forEach((key) => {
        if (updates[key] === undefined) {
            delete updates[key] // remove undefined fields so they do not overwrite existing values
        }
    })

    try {
        const caseItem = await Case.findById(req.params.id) // find the case before updating

        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' }) // return not found if the case does not exist
        }

        const originalStatus = caseItem.status // remember old status before update
        Object.assign(caseItem, updates) // apply allowed updates to the case

        if (updates.status && updates.status !== originalStatus) {
            caseItem.statusHistory.push({ status: updates.status, changedBy: req.user.id }) // store status change in history
        }

        const updatedCase = await caseItem.save() // save the updated case

        if (updates.status && updates.status !== originalStatus && String(updatedCase.filedBy) !== req.user.id) {
            await Notification.create({ // create a notification for the case owner
                recipient: updatedCase.filedBy,
                title: 'Case status updated',
                message: `Status for case "${updatedCase.title}" changed to ${updatedCase.status}.`,
                relatedCase: updatedCase._id,
                createdBy: req.user.id
            })
        }

        res.json(updatedCase) // send the updated case to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if update fails
    }
}

// This part deletes one case by id.
exports.deleteCase = async (req, res) => {
    try {
        const deletedCase = await Case.findByIdAndDelete(req.params.id) // delete case by id

        if (!deletedCase) {
            return res.status(404).json({ message: 'Case not found' }) // return not found if no case was deleted
        }

        res.json({ message: 'Case deleted' }) // confirm deletion to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if deletion fails
    }
}
