// This file defines the activity log data model.
// This model stores simple audit records for important user actions.
const mongoose = require('mongoose') // This line imports mongoose for schema and model.

// This schema stores one activity or audit record.
const activityLogSchema = new mongoose.Schema({
    // This part keeps the user who performed the action.
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // This part keeps the role of the user at action time.
    userRole: {
        type: String,
        enum: ['admin', 'police', 'user'],
        required: true
    },
    // This part keeps action name like create update or delete.
    action: {
        type: String,
        required: true
    },
    // This part keeps the feature name where action happened.
    moduleName: {
        type: String,
        required: true
    },
    // This part keeps a simple readable message.
    description: {
        type: String,
        required: true
    },
    // This part keeps related record id as plain text.
    targetId: {
        type: String
    }
}, { timestamps: true }) // This line adds created and updated time automatically.

// This line exports the ActivityLog model.
module.exports = mongoose.model('ActivityLog', activityLogSchema)
