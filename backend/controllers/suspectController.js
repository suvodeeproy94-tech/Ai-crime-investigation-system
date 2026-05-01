// this controller manages suspect records allowing create read update and delete operations
const Suspect = require('../models/Suspect') // import the Suspect model

// createSuspect saves a new suspect record with creator information
exports.createSuspect = async (req, res) => {
    const suspect = new Suspect({ ...req.body, createdBy: req.user.id }) // build the suspect document with request fields and owner id

    try {
        const savedSuspect = await suspect.save() // save the suspect in the database
        res.json(savedSuspect) // return the saved suspect
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if creation fails
    }
}

// getAllSuspects returns all suspects with related case and creator details
exports.getAllSuspects = async (req, res) => {
    try {
        const suspects = await Suspect.find() // find all suspect documents
            .populate('relatedCases', 'title status') // attach related case summaries
            .populate('createdBy', 'name email role') // attach creator user info

        res.json(suspects) // return the suspect list
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if query fails
    }
}

// getSuspectById returns one suspect record by id
exports.getSuspectById = async (req, res) => {
    try {
        const suspect = await Suspect.findById(req.params.id) // find suspect by id
            .populate('relatedCases', 'title status') // attach related case summaries
            .populate('createdBy', 'name email role') // attach creator user info

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' }) // return not found when missing
        }

        res.json(suspect) // return the suspect document
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if lookup fails
    }
}

// updateSuspect edits allowed suspect fields only
exports.updateSuspect = async (req, res) => {
    const updates = {
        name: req.body.name, // new name when provided
        age: req.body.age, // new age when provided
        gender: req.body.gender, // new gender when provided
        lastSeenLocation: req.body.lastSeenLocation, // new last seen location when provided
        status: req.body.status, // new suspect status when provided
        relatedCases: req.body.relatedCases // new related case ids when provided
    }

    Object.keys(updates).forEach((key) => {
        if (updates[key] === undefined) {
            delete updates[key] // remove undefined fields so they do not overwrite existing values
        }
    })

    try {
        const updatedSuspect = await Suspect.findByIdAndUpdate(req.params.id, updates, { new: true }) // update and return the new suspect

        if (!updatedSuspect) {
            return res.status(404).json({ message: 'Suspect not found' }) // return not found when no suspect exists
        }

        res.json(updatedSuspect) // return the updated suspect
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if update fails
    }
}

// deleteSuspect removes one suspect record by id
exports.deleteSuspect = async (req, res) => {
    try {
        const removedSuspect = await Suspect.findByIdAndDelete(req.params.id) // delete suspect by id

        if (!removedSuspect) {
            return res.status(404).json({ message: 'Suspect not found' }) // return not found when no suspect exists
        }

        res.json({ message: 'Suspect deleted' }) // confirm deletion to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if delete fails
    }
}
