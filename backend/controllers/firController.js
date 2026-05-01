// this controller manages FIR actions and links FIR records to complaints and notifications
const FIR = require('../models/FIR') // import the FIR model
const Complaint = require('../models/Complaint') // import the Complaint model
const Notification = require('../models/Notification') // import the Notification model

// createFIR builds a new FIR from a complaint and saves it in the database
exports.createFIR = async (req, res) => {
    try {
        const { complaintId, title, description, location, status } = req.body // read FIR fields from the request body

        if (!complaintId) {
            return res.status(400).json({ message: 'complaintId is required' }) // require complaint id for FIR creation
        }

        const complaint = await Complaint.findById(complaintId) // load the related complaint

        if (!complaint) {
            return res.status(404).json({ message: 'Complaint not found' }) // return not found when complaint does not exist
        }

        if (complaint.firCreated) {
            return res.status(400).json({ message: 'An FIR has already been created for this complaint' }) // avoid creating a duplicate FIR
        }

        const fir = new FIR({
            title: title || complaint.title, // use provided title or fallback to complaint title
            description: description || complaint.description, // use provided description or fallback to complaint description
            location: location || complaint.location, // use provided location or fallback to complaint location
            status: status || 'pending', // default FIR status is pending
            createdBy: req.user.id, // record the creator user id
            complaint: complaint._id // link to the original complaint
        })

        const saved = await fir.save() // save the FIR document

        complaint.assignedTo = req.user.id // assign the complaint to the current user
        complaint.status = 'under review' // update complaint status after FIR creation
        complaint.firCreated = saved._id // link the complaint to the new FIR
        await complaint.save() // save the complaint updates

        res.json(saved) // return the newly created FIR
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if FIR creation fails
    }
}

// getAllFIR returns FIR records that the current user is allowed to access
exports.getAllFIR = async (req, res) => {
    try {
        let query = {} // default query for admin users

        if (req.user.role === 'user') {
            const complaints = await Complaint.find({ createdBy: req.user.id }).select('_id') // find complaints owned by this user
            const complaintIds = complaints.map((complaint) => complaint._id) // gather complaint ids
            query = { complaint: { $in: complaintIds } } // restrict FIRs to owned complaints
        } else if (req.user.role === 'police') {
            query = { createdBy: req.user.id } // police see FIRs they created
        }

        const firs = await FIR.find(query) // load FIRs matching the query
            .populate('createdBy', 'name email role') // attach creator details
            .populate('complaint', 'title status createdBy assignedTo') // attach complaint info

        res.json(firs) // return the FIR list to the client
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if query fails
    }
}

// updateFIR applies allowed field changes and creates a notification when the FIR status changes
exports.updateFIR = async (req, res) => {
    try {
        const fir = await FIR.findById(req.params.id) // find the FIR by id

        if (!fir) {
            return res.status(404).json({ message: 'FIR not found' }) // return not found when FIR is missing
        }

        if (req.user.role === 'police' && fir.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Only the officer who created this FIR may update it' }) // enforce ownership for police users
        }

        const allowedUpdates = {} // collect allowed FIR updates
        if (req.body.title !== undefined) allowedUpdates.title = req.body.title // update title when provided
        if (req.body.description !== undefined) allowedUpdates.description = req.body.description // update description when provided
        if (req.body.location !== undefined) allowedUpdates.location = req.body.location // update location when provided
        if (req.body.status !== undefined) allowedUpdates.status = req.body.status // update status when provided

        const originalStatus = fir.status // remember the current status
        Object.assign(fir, allowedUpdates) // apply the allowed updates to the FIR document
        const updated = await fir.save() // save the updated FIR record

        if (allowedUpdates.status && allowedUpdates.status !== originalStatus) {
            const complaint = await Complaint.findById(fir.complaint) // find the linked complaint
            if (complaint) {
                await Notification.create({ // create a notification for status change
                    recipient: complaint.createdBy,
                    title: 'FIR status updated',
                    message: `Status for FIR "${updated.title}" changed to ${updated.status}.`,
                    createdBy: req.user.id
                })
            }
        }

        res.json(updated) // return the updated FIR record
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error on failure
    }
}

// deleteFIR removes one FIR and resets the linked complaint if necessary
exports.deleteFIR = async (req, res) => {
    try {
        const fir = await FIR.findById(req.params.id) // find the FIR by id

        if (!fir) {
            return res.status(404).json({ message: 'FIR not found' }) // return not found when FIR is missing
        }

        if (req.user.role === 'police' && fir.createdBy.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Only the officer who created this FIR may delete it' }) // enforce ownership for police users
        }

        const complaint = await Complaint.findById(fir.complaint) // load the related complaint
        if (complaint) {
            complaint.firCreated = undefined // clear the linked FIR from complaint
            complaint.status = 'open' // reset complaint status to open
            await complaint.save() // save the complaint updates
        }

        await fir.remove() // delete the FIR document
        res.json({ message: 'Deleted' }) // confirm successful deletion
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error on failure
    }
}

