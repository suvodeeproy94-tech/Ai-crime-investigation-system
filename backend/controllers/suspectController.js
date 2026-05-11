// This file handles suspect profile records
// This file supports create read update delete search and case links
const Suspect = require('../models/Suspect') // This line imports the Suspect model
const Case = require('../models/Case') // This line imports the Case model

// This helper changes one value or many values into a clean list
const getIdList = (value) => {
    if (!value) return [] // This line returns an empty list when no value is sent
    if (Array.isArray(value)) return value.filter(Boolean) // This line keeps only filled values from an array
    return value.toString().split(',').map((item) => item.trim()).filter(Boolean) // This line builds a list from comma text
}

// This helper keeps case suspect links correct
const syncSuspectCaseLinks = async (suspectId, relatedCases) => {
    await Case.updateMany({ suspects: suspectId }, { $pull: { suspects: suspectId } }) // This line removes old case links

    if (relatedCases.length > 0) {
        await Case.updateMany({ _id: { $in: relatedCases } }, { $addToSet: { suspects: suspectId } }) // This line adds new case links
    }
}

// This part creates a new suspect profile
exports.createSuspect = async (req, res) => {
    try {
        const relatedCases = getIdList(req.body.relatedCases) // This line reads selected case ids
        const suspect = new Suspect({ ...req.body, relatedCases, createdBy: req.user.id }) // This line builds the suspect record
        const savedSuspect = await suspect.save() // This line saves the suspect in the database

        await syncSuspectCaseLinks(savedSuspect._id, relatedCases) // This line connects the suspect with cases

        res.json(savedSuspect) // This line sends the saved suspect
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line sends server error when creation fails
    }
}

// This part returns suspects with search and filters
exports.getAllSuspects = async (req, res) => {
    try {
        const { q, status, gender, caseId, sortBy, sortOrder } = req.query // This line reads filter values
        const filter = {} // This line prepares database filter object

        if (status) filter.status = status // This line filters suspects by status
        if (gender) filter.gender = gender // This line filters suspects by gender
        if (caseId) filter.relatedCases = caseId // This line filters suspects by case

        if (q) {
            filter.$or = [
                { name: { $regex: q, $options: 'i' } }, // This line searches suspect name
                { lastSeenLocation: { $regex: q, $options: 'i' } } // This line searches last seen location
            ]
        }

        const sortField = ['createdAt', 'name', 'status', 'age'].includes(sortBy) ? sortBy : 'createdAt' // This line keeps sorting safe
        const sortDirection = sortOrder === 'asc' ? 1 : -1 // This line sets sort direction

        const suspects = await Suspect.find(filter) // This line loads matching suspects
            .populate('relatedCases', 'title status') // This line adds related case data
            .populate('createdBy', 'name email role') // This line adds creator user data
            .sort({ [sortField]: sortDirection }) // This line sorts the list

        res.json(suspects) // This line sends the suspect list
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line sends server error when loading fails
    }
}

// This part returns one suspect profile
exports.getSuspectById = async (req, res) => {
    try {
        const suspect = await Suspect.findById(req.params.id) // This line finds suspect by id
            .populate('relatedCases', 'title status') // This line adds related case data
            .populate('createdBy', 'name email role') // This line adds creator user data

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' }) // This line handles missing suspect
        }

        res.json(suspect) // This line sends the suspect record
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line sends server error when lookup fails
    }
}

// This part updates one suspect profile
exports.updateSuspect = async (req, res) => {
    try {
        const suspect = await Suspect.findById(req.params.id) // This line finds suspect before update

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' }) // This line handles missing suspect
        }

        if (req.body.name !== undefined) suspect.name = req.body.name // This line updates name
        if (req.body.age !== undefined) suspect.age = req.body.age // This line updates age
        if (req.body.gender !== undefined) suspect.gender = req.body.gender // This line updates gender
        if (req.body.lastSeenLocation !== undefined) suspect.lastSeenLocation = req.body.lastSeenLocation // This line updates location
        if (req.body.status !== undefined) suspect.status = req.body.status // This line updates status
        if (req.body.relatedCases !== undefined) suspect.relatedCases = getIdList(req.body.relatedCases) // This line updates case links

        const updatedSuspect = await suspect.save() // This line saves changes
        await syncSuspectCaseLinks(updatedSuspect._id, updatedSuspect.relatedCases.map(String)) // This line refreshes case links

        res.json(updatedSuspect) // This line sends updated suspect
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line sends server error when update fails
    }
}

// This part deletes one suspect profile
exports.deleteSuspect = async (req, res) => {
    try {
        const suspect = await Suspect.findById(req.params.id) // This line finds suspect before delete

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' }) // This line handles missing suspect
        }

        await Case.updateMany({ suspects: suspect._id }, { $pull: { suspects: suspect._id } }) // This line removes suspect from cases
        await suspect.deleteOne() // This line deletes suspect record

        res.json({ message: 'Suspect deleted' }) // This line confirms delete
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line sends server error when delete fails
    }
}
