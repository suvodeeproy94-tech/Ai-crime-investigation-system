// This file handles ai log read operations
// This controller returns ai request logs for logged in users
const AILog = require('../models/AILog') // This line imports AILog model

// This part returns ai logs with simple role based filter
exports.getAllAILogs = async (req, res) => {
    try {
        // Admin can see every AI log, other users see only their own logs.
        let query = {}

        if (req.user.role !== 'admin') {
            query = { requestedBy: req.user.id }
        }

        const logs = await AILog.find(query) // This line loads log records
            .populate('requestedBy', 'name email role') // This line adds requester user details
            .sort({ createdAt: -1 }) // This line keeps latest logs first

        res.json(logs) // This line returns ai logs
    } catch (error) {
        res.status(500).json({ error: error.message }) // This line returns server error when loading fails
    }
}
