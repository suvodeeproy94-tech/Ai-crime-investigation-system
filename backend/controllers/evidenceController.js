// this controller manages evidence records file uploads and evidence access rules
const path = require('path') // import path to build safe file paths
const Evidence = require('../models/Evidence') // import the Evidence model
const Case = require('../models/Case') // import the Case model
const Suspect = require('../models/Suspect') // import the Suspect model
const Notification = require('../models/Notification') // import the Notification model

// getFileUrl converts an uploaded filename into a full URL for the frontend
const getFileUrl = (req, filename) => {
    return `${req.protocol}://${req.get('host')}/uploads/${filename}` // build a public URL for the uploaded file
}

exports.createEvidence = async (req, res) => {
    try {
        const { title, description, caseId, suspectId, status } = req.body // read evidence fields from the request

        if (!title || !caseId || !req.file) {
            return res.status(400).json({ message: 'Title case and evidence file are required' }) // validate required fields
        }

        const caseItem = await Case.findById(caseId) // load the related case by id
        if (!caseItem) {
            return res.status(404).json({ message: 'Case not found' }) // return not found when case is missing
        }

        if (suspectId) {
            const suspect = await Suspect.findById(suspectId) // load suspect if id was provided
            if (!suspect) {
                return res.status(404).json({ message: 'Suspect not found' }) // return not found when suspect is missing
            }
        }

        const fileUrl = req.file ? getFileUrl(req, req.file.filename) : undefined // build file URL when a file is uploaded

        const evidence = new Evidence({
            title, // evidence title
            description, // evidence description
            fileUrl, // uploaded file URL
            caseId, // related case id
            suspectId, // related suspect id
            uploadedBy: req.user.id, // record the uploader id
            status: status || 'collected' // default status is collected
        })

        const savedEvidence = await evidence.save() // save the evidence document

        if (!caseItem.evidence.includes(savedEvidence._id)) {
            caseItem.evidence.push(savedEvidence._id) // add evidence to the case list
            await caseItem.save() // save the updated case
        }

        await Notification.create({ // create a notification for the case owner
            recipient: caseItem.filedBy,
            title: 'New evidence uploaded',
            message: `Evidence "${savedEvidence.title}" has been added to case "${caseItem.title}".`,
            relatedCase: caseItem._id,
            createdBy: req.user.id
        })

        res.json(savedEvidence) // return the saved evidence record
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if creation fails
    }
}

exports.getAllEvidence = async (req, res) => {
    try {
        const { caseId, status, suspectId, q, sortBy, sortOrder } = req.query // read optional filters from query string
        const filter = {} // prepare filter object

        if (caseId) filter.caseId = caseId // filter by case id when provided
        if (status) filter.status = status // filter by evidence status when provided
        if (suspectId) filter.suspectId = suspectId // filter by suspect id when provided
        if (q) {
            filter.$or = [
                { title: { $regex: q, $options: 'i' } }, // search evidence title
                { description: { $regex: q, $options: 'i' } } // search evidence description
            ]
        }

        if (req.user.role === 'user') {
            const cases = await Case.find({ filedBy: req.user.id }).select('_id') // find cases belonging to the user
            const caseIds = cases.map((item) => item._id) // collect case ids
            filter.caseId = { $in: caseIds } // restrict evidence to those case ids
        }

        const sortField = ['createdAt', 'title', 'status'].includes(sortBy) ? sortBy : 'createdAt' // keep sort field safe
        const sortDirection = sortOrder === 'asc' ? 1 : -1 // set sort direction

        const evidence = await Evidence.find(filter) // load evidence documents
            .populate('caseId', 'title status filedBy') // attach related case info
            .populate('suspectId', 'name status') // attach related suspect info
            .populate('uploadedBy', 'name email role') // attach uploader info
            .sort({ [sortField]: sortDirection }) // sort evidence list

        res.json(evidence) // return the evidence list
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if query fails
    }
}

exports.getEvidenceById = async (req, res) => {
    try {
        const evidence = await Evidence.findById(req.params.id) // find evidence by id
            .populate('caseId', 'title status filedBy') // attach case info
            .populate('suspectId', 'name status') // attach suspect info
            .populate('uploadedBy', 'name email role') // attach uploader info

        if (!evidence) {
            return res.status(404).json({ message: 'Evidence not found' }) // return not found when missing
        }

        if (req.user.role === 'user' && String(evidence.caseId.filedBy) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' }) // block access if user does not own the related case
        }

        res.json(evidence) // return the evidence record
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if lookup fails
    }
}

exports.updateEvidence = async (req, res) => {
    try {
        const evidence = await Evidence.findById(req.params.id) // find evidence by id
        if (!evidence) {
            return res.status(404).json({ message: 'Evidence not found' }) // return not found when missing
        }

        if (req.user.role === 'police' && String(evidence.uploadedBy) !== req.user.id) {
            return res.status(403).json({ message: 'Only the uploader may update this evidence' }) // enforce uploader ownership for police
        }

        const updates = {} // collect update fields
        if (req.body.title !== undefined) updates.title = req.body.title // update title
        if (req.body.description !== undefined) updates.description = req.body.description // update description
        if (req.body.status !== undefined) updates.status = req.body.status // update status
        if (req.body.caseId !== undefined) updates.caseId = req.body.caseId // update case link
        if (req.body.suspectId !== undefined) updates.suspectId = req.body.suspectId || undefined // update suspect link

        if (updates.caseId) {
            const caseItem = await Case.findById(updates.caseId) // check updated case id
            if (!caseItem) {
                return res.status(404).json({ message: 'Case not found' }) // return not found when case is missing
            }
        }

        if (updates.suspectId) {
            const suspect = await Suspect.findById(updates.suspectId) // check updated suspect id
            if (!suspect) {
                return res.status(404).json({ message: 'Suspect not found' }) // return not found when suspect is missing
            }
        }

        if (req.file) {
            updates.fileUrl = getFileUrl(req, req.file.filename) // update file URL when new file is uploaded
        }

        const oldCaseId = evidence.caseId // remember old case link
        Object.assign(evidence, updates) // merge changes into the evidence document
        const updatedEvidence = await evidence.save() // save the updated evidence

        if (updates.caseId && String(oldCaseId) !== String(updates.caseId)) {
            await Case.findByIdAndUpdate(oldCaseId, { $pull: { evidence: updatedEvidence._id } }) // remove evidence from old case
            await Case.findByIdAndUpdate(updates.caseId, { $addToSet: { evidence: updatedEvidence._id } }) // add evidence to new case
        }

        res.json(updatedEvidence) // return the saved evidence
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if update fails
    }
}

exports.deleteEvidence = async (req, res) => {
    try {
        const evidence = await Evidence.findById(req.params.id) // find evidence by id
        if (!evidence) {
            return res.status(404).json({ message: 'Evidence not found' }) // return not found when missing
        }

        if (req.user.role === 'police' && String(evidence.uploadedBy) !== req.user.id) {
            return res.status(403).json({ message: 'Only the uploader may delete this evidence' }) // enforce uploader ownership for police
        }

        await Case.findByIdAndUpdate(evidence.caseId, { $pull: { evidence: evidence._id } }) // remove evidence from case
        await evidence.deleteOne() // delete the evidence document
        res.json({ message: 'Evidence deleted' }) // confirm deletion to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if delete fails
    }
}
