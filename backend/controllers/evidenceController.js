// This file handles evidence records, file uploads, and evidence access rules.
const Evidence = require('../models/Evidence') // This line imports the Evidence model.
const Case = require('../models/Case') // This line imports the Case model.
const Suspect = require('../models/Suspect') // This line imports the Suspect model.
const Notification = require('../models/Notification') // This line imports the Notification model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToAll, sendToUser } = require('../utils/socketHelper') // This line imports socket helpers.

// This helper changes an uploaded file name into a URL the frontend can open.
const getFileUrl = (req, filename) => {
    return `${req.protocol}://${req.get('host')}/uploads/${filename}`
}

// This helper creates a safe sort object for evidence lists.
const getEvidenceSort = (sortBy, sortOrder) => {
    // Only these fields are allowed for sorting.
    const allowedSortFields = ['createdAt', 'title', 'status']

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

// This part creates one evidence record with an uploaded file.
exports.createEvidence = async (req, res) => {
    try {
        // Read evidence fields from the request body.
        const title = req.body.title
        const description = req.body.description
        const caseId = req.body.caseId
        const suspectId = req.body.suspectId
        const status = req.body.status || 'collected'

        // Title, case, and file are required for new evidence.
        if (!title || !caseId || !req.file) {
            return res.status(400).json({ message: 'Title case and evidence file are required' })
        }

        // Check that the related case exists.
        const caseItem = await Case.findById(caseId)
        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' })
        }

        // Check suspect only when a suspect id is provided.
        if (suspectId) {
            const suspect = await Suspect.findById(suspectId)

            if (!suspect) {
                return res.status(404).json({ message: 'Suspect not found' })
            }
        }

        // Build the public file URL from the uploaded file name.
        const fileUrl = getFileUrl(req, req.file.filename)

        // Build the evidence document.
        const evidence = new Evidence({
            title,
            description,
            fileUrl,
            caseId,
            suspectId,
            uploadedBy: req.user.id,
            status
        })

        // Save the evidence document.
        const savedEvidence = await evidence.save()

        // Add this evidence id to the related case if it is not already there.
        if (!caseItem.evidence.includes(savedEvidence._id)) {
            caseItem.evidence.push(savedEvidence._id)
            await caseItem.save()
        }

        // Notify the case owner that new evidence was added.
        const notification = await Notification.create({
            recipient: caseItem.filedBy,
            title: 'New evidence uploaded',
            message: `Evidence "${savedEvidence.title}" has been added to case "${caseItem.title}".`,
            relatedCase: caseItem._id,
            createdBy: req.user.id
        })

        // Send live notification to the case owner.
        sendToUser(req, caseItem.filedBy, 'newNotification', notification)

        // Save an audit log for evidence creation.
        await createActivityLog(req, 'create', 'evidence', `Uploaded evidence "${savedEvidence.title}"`, String(savedEvidence._id))

        // Tell connected users that evidence data changed.
        sendToAll(req, 'evidenceUpdated', savedEvidence)

        // Return the saved evidence record.
        res.json(savedEvidence)
    } catch (error) {
        // Return a simple server error if creation fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns evidence records the current user can access.
exports.getAllEvidence = async (req, res) => {
    try {
        // Read optional filters from the URL query string.
        const caseId = req.query.caseId
        const status = req.query.status
        const suspectId = req.query.suspectId
        const searchText = req.query.q
        const sortBy = req.query.sortBy
        const sortOrder = req.query.sortOrder

        // Build the database filter step by step.
        const filter = {}

        if (caseId) {
            filter.caseId = caseId
        }

        if (status) {
            filter.status = status
        }

        if (suspectId) {
            filter.suspectId = suspectId
        }

        // Search title and description when search text is given.
        if (searchText) {
            filter.$or = [
                { title: { $regex: searchText, $options: 'i' } },
                { description: { $regex: searchText, $options: 'i' } }
            ]
        }

        // Normal users can only see evidence from their own cases.
        if (req.user.role === 'user') {
            const cases = await Case.find({ filedBy: req.user.id }).select('_id')
            const caseIds = []

            for (const item of cases) {
                caseIds.push(item._id)
            }

            filter.caseId = { $in: caseIds }
        }

        // Build a safe sort object.
        const sort = getEvidenceSort(sortBy, sortOrder)

        // Load evidence with related case, suspect, and uploader details.
        const evidence = await Evidence.find(filter)
            .populate('caseId', 'title status filedBy')
            .populate('suspectId', 'name status')
            .populate('uploadedBy', 'name email role')
            .sort(sort)

        // Return the evidence list.
        res.json(evidence)
    } catch (error) {
        // Return a simple server error if loading fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns one evidence item by id.
exports.getEvidenceById = async (req, res) => {
    try {
        // Find evidence by id and include linked details.
        const evidence = await Evidence.findById(req.params.id)
            .populate('caseId', 'title status filedBy')
            .populate('suspectId', 'name status')
            .populate('uploadedBy', 'name email role')

        if (!evidence) {
            return res.status(404).json({ message: 'Evidence not found' })
        }

        // Normal users can only read evidence from their own cases.
        if (req.user.role === 'user' && String(evidence.caseId.filedBy) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Return the evidence record.
        res.json(evidence)
    } catch (error) {
        // Return a simple server error if lookup fails.
        res.status(500).json({ error: error.message })
    }
}

// This part updates one evidence record.
exports.updateEvidence = async (req, res) => {
    try {
        // Find evidence by id before updating.
        const evidence = await Evidence.findById(req.params.id)

        if (!evidence) {
            return res.status(404).json({ message: 'Evidence not found' })
        }

        // Police users may update only evidence uploaded by them.
        if (req.user.role === 'police' && String(evidence.uploadedBy) !== req.user.id) {
            return res.status(403).json({ message: 'Only the uploader may update this evidence' })
        }

        // Remember old case id so case links can be updated if needed.
        const oldCaseId = evidence.caseId

        // Check the new case id before using it.
        if (req.body.caseId !== undefined) {
            const caseItem = await Case.findById(req.body.caseId)

            if (!caseItem) {
                return res.status(404).json({ message: 'Case not found' })
            }
        }

        // Check the new suspect id before using it.
        if (req.body.suspectId) {
            const suspect = await Suspect.findById(req.body.suspectId)

            if (!suspect) {
                return res.status(404).json({ message: 'Suspect not found' })
            }
        }

        // Update each field only when the frontend sends it.
        if (req.body.title !== undefined) {
            evidence.title = req.body.title
        }

        if (req.body.description !== undefined) {
            evidence.description = req.body.description
        }

        if (req.body.status !== undefined) {
            evidence.status = req.body.status
        }

        if (req.body.caseId !== undefined) {
            evidence.caseId = req.body.caseId
        }

        if (req.body.suspectId !== undefined) {
            evidence.suspectId = req.body.suspectId || undefined
        }

        if (req.file) {
            evidence.fileUrl = getFileUrl(req, req.file.filename)
        }

        // Save the updated evidence document.
        const updatedEvidence = await evidence.save()

        // If the evidence moved to another case, update both case records.
        if (req.body.caseId !== undefined && String(oldCaseId) !== String(req.body.caseId)) {
            await Case.findByIdAndUpdate(oldCaseId, { $pull: { evidence: updatedEvidence._id } })
            await Case.findByIdAndUpdate(req.body.caseId, { $addToSet: { evidence: updatedEvidence._id } })
        }

        // Save an audit log for evidence update.
        await createActivityLog(req, 'update', 'evidence', `Updated evidence "${updatedEvidence.title}"`, String(updatedEvidence._id))

        // Tell connected users that evidence data changed.
        sendToAll(req, 'evidenceUpdated', updatedEvidence)

        // Return the saved evidence.
        res.json(updatedEvidence)
    } catch (error) {
        // Return a simple server error if update fails.
        res.status(500).json({ error: error.message })
    }
}

// This part deletes one evidence record.
exports.deleteEvidence = async (req, res) => {
    try {
        // Find evidence by id before deleting.
        const evidence = await Evidence.findById(req.params.id)

        if (!evidence) {
            return res.status(404).json({ message: 'Evidence not found' })
        }

        // Police users may delete only evidence uploaded by them.
        if (req.user.role === 'police' && String(evidence.uploadedBy) !== req.user.id) {
            return res.status(403).json({ message: 'Only the uploader may delete this evidence' })
        }

        // Remove the evidence id from the related case.
        await Case.findByIdAndUpdate(evidence.caseId, { $pull: { evidence: evidence._id } })

        // Delete the evidence document.
        await evidence.deleteOne()

        // Save an audit log for evidence delete.
        await createActivityLog(req, 'delete', 'evidence', `Deleted evidence "${evidence.title}"`, String(evidence._id))

        // Tell connected users that evidence data changed.
        sendToAll(req, 'evidenceUpdated', evidence)

        // Confirm deletion to the frontend.
        res.json({ message: 'Evidence deleted' })
    } catch (error) {
        // Return a simple server error if delete fails.
        res.status(500).json({ error: error.message })
    }
}
