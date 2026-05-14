// This file handles complaint operations for users, police, and admin.
const Complaint = require('../models/Complaint') // This line imports the Complaint model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToAll } = require('../utils/socketHelper') // This line imports socket helper.

// This part creates a new complaint and saves it in the database.
exports.createComplaint = async (req, res) => {
    try {
        // Build complaint data in simple steps from the request body.
        const complaint = new Complaint({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            createdBy: req.user.id
        })

        // Save the complaint document in MongoDB.
        const savedComplaint = await complaint.save()

        // Save an audit log for complaint creation.
        await createActivityLog(req, 'create', 'complaint', `Created complaint "${savedComplaint.title}"`, String(savedComplaint._id))

        // Tell connected users that complaint data changed.
        sendToAll(req, 'complaintUpdated', savedComplaint)

        // Return the saved complaint to the frontend.
        res.json(savedComplaint)
    } catch (error) {
        // Return a simple server error if saving fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns complaints visible to the logged in user.
exports.getAllComplaints = async (req, res) => {
    try {
        // Normal users only see complaints created by them.
        let query = {}
        if (req.user.role === 'user') {
            query = { createdBy: req.user.id }
        }

        // Load matching complaints and add useful linked details.
        const complaints = await Complaint.find(query)
            .populate('createdBy', 'name email role')
            .populate('assignedTo', 'name email role')
            .populate('firCreated', 'title status')

        // Send the complaints list to the frontend.
        res.json(complaints)
    } catch (error) {
        // Return a simple server error if loading fails.
        res.status(500).json({ error: error.message })
    }
}

// This part returns one complaint after checking access.
exports.getComplaintById = async (req, res) => {
    try {
        // Find complaint by id and include related details.
        const complaint = await Complaint.findById(req.params.id)
            .populate('createdBy', 'name email role')
            .populate('assignedTo', 'name email role')
            .populate('firCreated', 'title status')

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }

        // Normal users may only open their own complaints.
        if (req.user.role === 'user' && complaint.createdBy._id.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Return the complaint document.
        res.json(complaint)
    } catch (error) {
        // Return a simple server error if lookup fails.
        res.status(500).json({ error: error.message })
    }
}

// This part edits allowed complaint fields after checking access.
exports.updateComplaint = async (req, res) => {
    try {
        // Find the complaint before updating it.
        const complaint = await Complaint.findById(req.params.id)

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }

        // A normal user can edit only their own complaint.
        const isOwner = req.user.role === 'user' && complaint.createdBy.toString() === req.user.id

        // Police and admin can update review details.
        const isStaff = ['police', 'admin'].includes(req.user.role)

        if (!isOwner && !isStaff) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Users cannot edit a complaint after an FIR is created.
        if (isOwner && complaint.firCreated) {
            return res.status(400).json({ message: 'Complaint can not be edited after FIR is created' })
        }

        // These fields are safe for both owner and staff updates.
        if (req.body.title !== undefined) {
            complaint.title = req.body.title
        }

        if (req.body.description !== undefined) {
            complaint.description = req.body.description
        }

        if (req.body.location !== undefined) {
            complaint.location = req.body.location
        }

        // Only staff can change workflow fields.
        if (isStaff && req.body.status !== undefined) {
            complaint.status = req.body.status
        }

        if (isStaff && req.body.assignedTo !== undefined) {
            complaint.assignedTo = req.body.assignedTo
        }

        // Save the updated complaint.
        const updatedComplaint = await complaint.save()

        // Save an audit log for complaint update.
        await createActivityLog(req, 'update', 'complaint', `Updated complaint "${updatedComplaint.title}"`, String(updatedComplaint._id))

        // Tell connected users that complaint data changed.
        sendToAll(req, 'complaintUpdated', updatedComplaint)

        // Return updated complaint.
        res.json(updatedComplaint)
    } catch (error) {
        // Return a simple server error if update fails.
        res.status(500).json({ error: error.message })
    }
}

// This part removes a complaint after checking who requested it.
exports.deleteComplaint = async (req, res) => {
    try {
        // Find complaint by id before deleting.
        const complaint = await Complaint.findById(req.params.id)

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' })
        }

        // A normal user can delete only their own complaint.
        const isOwner = req.user.role === 'user' && complaint.createdBy.toString() === req.user.id

        // Admin can delete any complaint.
        const isAdmin = req.user.role === 'admin'

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // Users cannot delete a complaint after an FIR is created.
        if (isOwner && complaint.firCreated) {
            return res.status(400).json({ message: 'Complaint can not be deleted after FIR is created' })
        }

        // Remove the complaint document.
        await complaint.deleteOne()

        // Save an audit log for complaint delete.
        await createActivityLog(req, 'delete', 'complaint', `Deleted complaint "${complaint.title}"`, String(complaint._id))

        // Tell connected users that complaint data changed.
        sendToAll(req, 'complaintUpdated', complaint)

        // Confirm deletion to the frontend.
        res.json({ message: 'Complaint deleted' })
    } catch (error) {
        // Return a simple server error if delete fails.
        res.status(500).json({ error: error.message })
    }
}
