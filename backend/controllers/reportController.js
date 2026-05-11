// This file handles report operations
// This controller supports create read update and delete report actions
const Report = require('../models/Report') // This line imports Report model

// This part creates a new report
exports.createReport = async (req, res) => {
    try {
        const { title, content, status, caseId, firId } = req.body // This line reads report fields from request body

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' }) // This line checks required report fields
        }

        const report = new Report({
            title, // This line stores report title
            content, // This line stores report content
            status: status || 'draft', // This line stores report status
            caseId, // This line stores linked case id
            firId, // This line stores linked fir id
            createdBy: req.user.id // This line stores creator user id
        })

        const savedReport = await report.save() // This line saves report in database
        res.json(savedReport) // This line returns saved report
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line returns server error when creation fails
    }
}

// This part returns report list with role based filtering
exports.getAllReports = async (req, res) => {
    try {
        const query = req.user.role === 'user' ? { createdBy: req.user.id } : {} // This line limits normal users to own reports
        const reports = await Report.find(query) // This line loads report records
            .populate('createdBy', 'name email role') // This line adds creator details
            .populate('caseId', 'title status') // This line adds case details
            .populate('firId', 'title status') // This line adds fir details
            .sort({ createdAt: -1 }) // This line keeps newest reports first

        res.json(reports) // This line returns report list
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line returns server error when loading fails
    }
}

// This part returns one report by id
exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id) // This line finds report by id
            .populate('createdBy', 'name email role') // This line adds creator details
            .populate('caseId', 'title status') // This line adds case details
            .populate('firId', 'title status') // This line adds fir details

        if (!report) {
            return res.status(404).json({ message: 'Report not found' }) // This line handles missing report
        }

        if (req.user.role === 'user' && String(report.createdBy._id) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' }) // This line blocks users from reading other user reports
        }

        res.json(report) // This line returns found report
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line returns server error when lookup fails
    }
}

// This part updates one report
exports.updateReport = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id) // This line finds report before update

        if (!report) {
            return res.status(404).json({ message: 'Report not found' }) // This line handles missing report
        }

        const isOwner = String(report.createdBy) === req.user.id // This line checks report owner
        const isStaff = ['admin', 'police'].includes(req.user.role) // This line checks staff roles

        if (!isOwner && !isStaff) {
            return res.status(403).json({ message: 'Access denied' }) // This line blocks unauthorized update
        }

        if (req.body.title !== undefined) report.title = req.body.title // This line updates title when provided
        if (req.body.content !== undefined) report.content = req.body.content // This line updates content when provided
        if (req.body.status !== undefined) report.status = req.body.status // This line updates status when provided
        if (req.body.caseId !== undefined) report.caseId = req.body.caseId // This line updates case link when provided
        if (req.body.firId !== undefined) report.firId = req.body.firId // This line updates fir link when provided

        const updatedReport = await report.save() // This line saves updated report
        res.json(updatedReport) // This line returns updated report
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line returns server error when update fails
    }
}

// This part deletes one report
exports.deleteReport = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id) // This line finds report before delete

        if (!report) {
            return res.status(404).json({ message: 'Report not found' }) // This line handles missing report
        }

        const isOwner = String(report.createdBy) === req.user.id // This line checks report owner
        const isAdmin = req.user.role === 'admin' // This line checks admin role

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ message: 'Access denied' }) // This line blocks unauthorized delete
        }

        await report.deleteOne() // This line deletes report from database
        res.json({ message: 'Report deleted' }) // This line returns delete success
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line returns server error when delete fails
    }
}
