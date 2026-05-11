// this controller manages complaint operations for users police and admin
const Complaint = require('../models/Complaint') // import the Complaint model from the models folder

// createComplaint builds a new complaint document and saves it in the database
exports.createComplaint = async (req, res) => {
    try {
        const complaint = new Complaint({ ...req.body, createdBy: req.user.id }) // copy request body fields and record the creator id

        const saved = await complaint.save() // save the complaint document in MongoDB
        res.json(saved) // return the saved complaint to the client
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if saving fails
    }
}

// getAllComplaints returns complaints visible to the logged in user
exports.getAllComplaints = async (req, res) => {
    try {
        const query = req.user.role === 'user' ? { createdBy: req.user.id } : {} // regular users only see their complaints
        const complaints = await Complaint.find(query) // load matching complaints from the database
            .populate('createdBy', 'name email role') // attach creator user info
            .populate('assignedTo', 'name email role') // attach assigned officer info
            .populate('firCreated', 'title status') // attach related FIR info

        res.json(complaints) // send the complaints list to the client
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if fetch fails
    }
}

// getComplaintById returns one complaint and enforces access control
exports.getComplaintById = async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id) // find complaint by id
            .populate('createdBy', 'name email role') // attach creator user info
            .populate('assignedTo', 'name email role') // attach assigned officer info
            .populate('firCreated', 'title status') // attach related FIR info

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' }) // return not found when missing
        }

        if (req.user.role === 'user' && complaint.createdBy._id.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' }) // block access for other users
        }

        res.json(complaint) // return the complaint document
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if lookup fails
    }
}

// updateComplaint edits allowed complaint fields once access is verified
exports.updateComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id) // find the complaint by id

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' }) // return not found when missing
        }

        const isOwner = req.user.role === 'user' && complaint.createdBy.toString() === req.user.id // This line checks normal user ownership
        const isStaff = ['police', 'admin'].includes(req.user.role) // This line checks staff roles

        if (!isOwner && !isStaff) {
            return res.status(403).json({ message: 'Access denied' }) // This line blocks users who do not own the complaint
        }

        if (isOwner && complaint.firCreated) {
            return res.status(400).json({ message: 'Complaint can not be edited after FIR is created' }) // This line blocks user edits after FIR
        }

        const allowedUpdates = isOwner
            ? ['title', 'description', 'location'] // This line lets users edit only basic complaint details
            : ['title', 'description', 'location', 'status', 'assignedTo'] // This line lets staff update review details

        allowedUpdates.forEach((field) => {
            if (req.body[field] !== undefined) {
                complaint[field] = req.body[field] // This line applies one allowed update value
            }
        })

        const updated = await complaint.save() // save the updated complaint
        res.json(updated) // return updated complaint
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if update fails
    }
}

// deleteComplaint removes a complaint after verifying the requester can delete it
exports.deleteComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id) // find complaint by id

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' }) // return not found when missing
        }

        const isOwner = req.user.role === 'user' && complaint.createdBy.toString() === req.user.id // This line checks normal user ownership
        const isAdmin = req.user.role === 'admin' // This line checks admin role

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ message: 'Access denied' }) // This line blocks police and other users from delete
        }

        if (isOwner && complaint.firCreated) {
            return res.status(400).json({ message: 'Complaint can not be deleted after FIR is created' }) // This line blocks user delete after FIR
        }

        await complaint.deleteOne() // This line removes the complaint document
        res.json({ message: 'Complaint deleted' }) // confirm deletion to client
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if delete fails
    }
}
