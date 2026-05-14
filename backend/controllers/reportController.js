// This file handles report operations.
// It supports create, read, update, and delete report actions.
const Report = require('../models/Report') // This line imports the Report model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToAll } = require('../utils/socketHelper') // This line imports socket helper.

// This part creates a new report.
exports.createReport = async (req, res) => {
    try {
        // Read report fields from the request body.
        const title = req.body.title
        const content = req.body.content
        const status = req.body.status || 'draft'
        const caseId = req.body.caseId
        const firId = req.body.firId

        // Title and content are required for a useful report.
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' })
        }

        // Build the report document.
        const report = new Report({
            title,
            content,
            status,
            caseId,
            firId,
            createdBy: req.user.id
        })

        // Save report in the database.
        const savedReport = await report.save()

        // Save an audit log for report creation.
        await createActivityLog(req, 'create', 'report', `Created report "${savedReport.title}"`, String(savedReport._id))

        // Tell connected users that report data changed.
        sendToAll(req, 'reportUpdated', savedReport)

        // Return saved report.
        res.json(savedReport)
    } catch (error) {
        // Return a simple server error when creation fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns report list with role based filtering.
exports.getAllReports = async (req, res) => {
    try {
        // Normal users only see reports created by them.
        let query = {}
        if (req.user.role === 'user') {
            query = { createdBy: req.user.id }
        }

        // Load report records with related details.
        const reports = await Report.find(query)
            .populate('createdBy', 'name email role')
            .populate('caseId', 'title status')
            .populate('firId', 'title status')
            .sort({ createdAt: -1 })

        // Return report list.
        res.json(reports)
    } catch (error) {
        // Return a simple server error when loading fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns one report by id.
exports.getReportById = async (req, res) => {
    try {
        // Find report by id and include linked details.
        const report = await Report.findById(req.params.id)
            .populate('createdBy', 'name email role')
            .populate('caseId', 'title status')
            .populate('firId', 'title status')

        if (!report) {
            return res.status(404).json({ message: 'Report not found' })
        }

        // Normal users may only read their own reports.
        if (req.user.role === 'user' && String(report.createdBy._id) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Return found report.
        res.json(report)
    } catch (error) {
        // Return a simple server error when lookup fails.
        res.status(500).json({ error: error.message })
    }
}

// This part updates one report.
exports.updateReport = async (req, res) => {
    try {
        // Find report before update.
        const report = await Report.findById(req.params.id)

        if (!report) {
            return res.status(404).json({ message: 'Report not found' })
        }

        // Report owner and staff can update a report.
        const isOwner = String(report.createdBy) === req.user.id
        const isStaff = ['admin', 'police'].includes(req.user.role)

        if (!isOwner && !isStaff) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Update each field only when the frontend sends it.
        if (req.body.title !== undefined) {
            report.title = req.body.title
        }

        if (req.body.content !== undefined) {
            report.content = req.body.content
        }

        if (req.body.status !== undefined) {
            report.status = req.body.status
        }

        if (req.body.caseId !== undefined) {
            report.caseId = req.body.caseId
        }

        if (req.body.firId !== undefined) {
            report.firId = req.body.firId
        }

        // Save updated report.
        const updatedReport = await report.save()

        // Save an audit log for report update.
        await createActivityLog(req, 'update', 'report', `Updated report "${updatedReport.title}"`, String(updatedReport._id))

        // Tell connected users that report data changed.
        sendToAll(req, 'reportUpdated', updatedReport)

        // Return updated report.
        res.json(updatedReport)
    } catch (error) {
        // Return a simple server error when update fails.
        res.status(500).json({ error: error.message })
    }
}

// This part deletes one report.
exports.deleteReport = async (req, res) => {
    try {
        // Find report before delete.
        const report = await Report.findById(req.params.id)

        if (!report) {
            return res.status(404).json({ message: 'Report not found' })
        }

        // Report owner and admin can delete a report.
        const isOwner = String(report.createdBy) === req.user.id
        const isAdmin = req.user.role === 'admin'

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Delete report from database.
        await report.deleteOne()

        // Save an audit log for report delete.
        await createActivityLog(req, 'delete', 'report', `Deleted report "${report.title}"`, String(report._id))

        // Tell connected users that report data changed.
        sendToAll(req, 'reportUpdated', report)

        // Return delete success.
        res.json({ message: 'Report deleted' })
    } catch (error) {
        // Return a simple server error when delete fails.
        res.status(500).json({ error: error.message })
    }
}
