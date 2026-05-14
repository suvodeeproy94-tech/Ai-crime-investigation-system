// This file creates activity logs from backend controllers.
const ActivityLog = require('../models/ActivityLog') // This line imports the activity log model.
const { sendToAll } = require('./socketHelper') // This line imports socket helper for live updates.

// This function saves one audit log record.
const createActivityLog = async (req, action, moduleName, description, targetId) => {
    // This check stops logging when there is no logged in user.
    if (!req || !req.user) {
        return null
    }

    // This object stores the log fields in a simple way.
    const logData = {
        user: req.user.id,
        userRole: req.user.role,
        action,
        moduleName,
        description,
        targetId
    }

    // This line saves the log in MongoDB.
    const savedLog = await ActivityLog.create(logData)

    // This line tells connected frontends that activity log changed.
    sendToAll(req, 'activityUpdated', savedLog)

    // This line returns the saved log for future use.
    return savedLog
}

// This line exports the log helper function.
module.exports = { createActivityLog }
