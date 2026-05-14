// This file handles activity log read operations.
const ActivityLog = require('../models/ActivityLog') // This line imports the activity log model.

// This function returns activity logs with simple role based access.
exports.getActivityLogs = async (req, res) => {
    try {
        // Admin can see all logs. Other users see only their own logs.
        let query = {}

        if (req.user.role !== 'admin') {
            query = { user: req.user.id }
        }

        // This line loads logs with user name and keeps newest first.
        const logs = await ActivityLog.find(query)
            .populate('user', 'name email role')
            .sort({ createdAt: -1 })

        // This line sends logs to frontend.
        res.json(logs)
    } catch (error) {
        // This line sends a simple error when logs cannot be loaded.
        res.status(500).json({ error: error.message })
    }
}
