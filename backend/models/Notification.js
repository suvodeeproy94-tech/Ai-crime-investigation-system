// This file defines the notification data model. It tells MongoDB the fields stored for each alert.
const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    // This part keeps the notification recipient user id
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // This part keeps the notification title
    title: {
        type: String,
        required: true
    },
    // This part keeps the notification message text
    message: {
        type: String,
        required: true
    },
    // This part keeps whether the notification has been read
    read: {
        type: Boolean,
        default: false
    },
    // This part keeps a linked case if present
    relatedCase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Case'
    },
    // This part keeps the user who generated the notification
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model('Notification', notificationSchema)
