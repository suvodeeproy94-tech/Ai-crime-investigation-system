// This file handles suspect profile records.
// It supports create, read, update, delete, search, and case links.
const Suspect = require('../models/Suspect') // This line imports the Suspect model.
const Case = require('../models/Case') // This line imports the Case model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToAll } = require('../utils/socketHelper') // This line imports socket helper.

// This helper changes one value or many values into a clean list of ids.
const getIdList = (value) => {
    // Return an empty list when no value is sent.
    if (!value) {
        return []
    }

    // If the frontend already sends an array, keep only filled values.
    if (Array.isArray(value)) {
        const idList = []

        for (const item of value) {
            if (item) {
                idList.push(item)
            }
        }

        return idList
    }

    // If the frontend sends comma separated text, split it into many ids.
    const textParts = value.toString().split(',')
    const idList = []

    for (const item of textParts) {
        const cleanItem = item.trim()

        if (cleanItem) {
            idList.push(cleanItem)
        }
    }

    return idList
}

// This helper keeps case and suspect links correct.
const syncSuspectCaseLinks = async (suspectId, relatedCases) => {
    // Remove this suspect from old cases first.
    await Case.updateMany({ suspects: suspectId }, { $pull: { suspects: suspectId } })

    // Add this suspect to the selected cases.
    if (relatedCases.length > 0) {
        await Case.updateMany({ _id: { $in: relatedCases } }, { $addToSet: { suspects: suspectId } })
    }
}

// This helper creates a safe sort object for suspect lists.
const getSuspectSort = (sortBy, sortOrder) => {
    // Only these fields are allowed for sorting.
    const allowedSortFields = ['createdAt', 'name', 'status', 'age']

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

// This part creates a new suspect profile.
exports.createSuspect = async (req, res) => {
    try {
        // Read and clean selected case ids.
        const relatedCases = getIdList(req.body.relatedCases)

        // Build the suspect document step by step.
        const suspect = new Suspect({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            lastSeenLocation: req.body.lastSeenLocation,
            status: req.body.status,
            relatedCases,
            createdBy: req.user.id
        })

        // Save the suspect in the database.
        const savedSuspect = await suspect.save()

        // Connect the suspect with selected cases.
        await syncSuspectCaseLinks(savedSuspect._id, relatedCases)

        // Save an audit log for suspect creation.
        await createActivityLog(req, 'create', 'suspect', `Created suspect "${savedSuspect.name}"`, String(savedSuspect._id))

        // Tell connected users that suspect data changed.
        sendToAll(req, 'suspectUpdated', savedSuspect)

        // Send the saved suspect.
        res.json(savedSuspect)
    } catch (error) {
        // Send a simple server error if creation fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns suspects with search and filters.
exports.getAllSuspects = async (req, res) => {
    try {
        // Read optional filters from the URL query string.
        const searchText = req.query.q
        const status = req.query.status
        const gender = req.query.gender
        const caseId = req.query.caseId
        const sortBy = req.query.sortBy
        const sortOrder = req.query.sortOrder

        // Build the database filter step by step.
        const filter = {}

        if (status) {
            filter.status = status
        }

        if (gender) {
            filter.gender = gender
        }

        if (caseId) {
            filter.relatedCases = caseId
        }

        // Search suspect name and last seen location when search text is given.
        if (searchText) {
            filter.$or = [
                { name: { $regex: searchText, $options: 'i' } },
                { lastSeenLocation: { $regex: searchText, $options: 'i' } }
            ]
        }

        // Build a safe sort object.
        const sort = getSuspectSort(sortBy, sortOrder)

        // Load matching suspects with related case and creator details.
        const suspects = await Suspect.find(filter)
            .populate('relatedCases', 'title status')
            .populate('createdBy', 'name email role')
            .sort(sort)

        // Send the suspect list.
        res.json(suspects)
    } catch (error) {
        // Send a simple server error if loading fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns one suspect profile.
exports.getSuspectById = async (req, res) => {
    try {
        // Find suspect by id and include related details.
        const suspect = await Suspect.findById(req.params.id)
            .populate('relatedCases', 'title status')
            .populate('createdBy', 'name email role')

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' })
        }

        // Send the suspect record.
        res.json(suspect)
    } catch (error) {
        // Send a simple server error if lookup fails.
        res.status(500).json({ error: error.message })
    }
}

// This part updates one suspect profile.
exports.updateSuspect = async (req, res) => {
    try {
        // Find suspect before updating.
        const suspect = await Suspect.findById(req.params.id)

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' })
        }

        // Update each field only when the frontend sends it.
        if (req.body.name !== undefined) {
            suspect.name = req.body.name
        }

        if (req.body.age !== undefined) {
            suspect.age = req.body.age
        }

        if (req.body.gender !== undefined) {
            suspect.gender = req.body.gender
        }

        if (req.body.lastSeenLocation !== undefined) {
            suspect.lastSeenLocation = req.body.lastSeenLocation
        }

        if (req.body.status !== undefined) {
            suspect.status = req.body.status
        }

        if (req.body.relatedCases !== undefined) {
            suspect.relatedCases = getIdList(req.body.relatedCases)
        }

        // Save the changed suspect.
        const updatedSuspect = await suspect.save()

        // Refresh links between this suspect and selected cases.
        const caseIds = []
        for (const caseId of updatedSuspect.relatedCases) {
            caseIds.push(String(caseId))
        }

        await syncSuspectCaseLinks(updatedSuspect._id, caseIds)

        // Save an audit log for suspect update.
        await createActivityLog(req, 'update', 'suspect', `Updated suspect "${updatedSuspect.name}"`, String(updatedSuspect._id))

        // Tell connected users that suspect data changed.
        sendToAll(req, 'suspectUpdated', updatedSuspect)

        // Send updated suspect.
        res.json(updatedSuspect)
    } catch (error) {
        // Send a simple server error if update fails.
        res.status(500).json({ error: error.message })
    }
}

// This part deletes one suspect profile.
exports.deleteSuspect = async (req, res) => {
    try {
        // Find suspect before deleting.
        const suspect = await Suspect.findById(req.params.id)

        if (!suspect) {
            return res.status(404).json({ message: 'Suspect not found' })
        }

        // Remove suspect id from all linked cases.
        await Case.updateMany({ suspects: suspect._id }, { $pull: { suspects: suspect._id } })

        // Delete suspect record.
        await suspect.deleteOne()

        // Save an audit log for suspect delete.
        await createActivityLog(req, 'delete', 'suspect', `Deleted suspect "${suspect.name}"`, String(suspect._id))

        // Tell connected users that suspect data changed.
        sendToAll(req, 'suspectUpdated', suspect)

        // Confirm delete action.
        res.json({ message: 'Suspect deleted' })
    } catch (error) {
        // Send a simple server error if delete fails.
        res.status(500).json({ error: error.message })
    }
}
