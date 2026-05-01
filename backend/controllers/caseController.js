// this controller manages case operations for the backend it creates reads updates and deletes case records
const Case = require('../models/Case') // import the Case model schema from the models folder

// createCase handles creating a new case record
exports.createCase = async (req, res) => {
    // build a new case document from request body and authenticated user information
    const newCase = new Case({ ...req.body, filedBy: req.user.id }) // spread request body fields and set filedBy to current user id

    try {
        const savedCase = await newCase.save() // save the new case in the database
        res.json(savedCase) // send the saved case back to the client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if save fails
    }
}

// getAllCases returns the list of cases that the current user is allowed to see
exports.getAllCases = async (req, res) => {
    const filter = req.user.role === 'user' ? { filedBy: req.user.id } : {} // regular users only see their own cases staff see all cases

    try {
        const cases = await Case.find(filter) // find cases using the filter
            .populate('filedBy', 'name email role') // attach filedBy user details
            .populate('assignedTo', 'name email role') // attach assignedTo user details
            .populate('suspects', 'name status') // attach suspects details
            .populate('evidence', 'title status') // attach evidence details

        res.json(cases) // send case list to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if query fails
    }
}

// getCaseById returns a single case by the given id parameter
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

// updateCase updates allowed case fields for a specific case id
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
        const updatedCase = await Case.findByIdAndUpdate(req.params.id, updates, { new: true }) // update the case and return the updated record

        if (!updatedCase) {
            return res.status(404).json({ message: 'Case not found' }) // return not found if the case does not exist
        }

        res.json(updatedCase) // send the updated case to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // send server error if update fails
    }
}

// deleteCase removes a case record from the database by id
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
