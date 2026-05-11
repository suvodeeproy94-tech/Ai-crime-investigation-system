// This file defines meeting data for live meeting rooms.
// This line imports mongoose to define schema and model.
const mongoose = require('mongoose')

// This part defines the meeting document fields.
const meetingSchema = new mongoose.Schema({
    // This field stores meeting title.
    title: {
        // This line sets field type as text.
        type: String,
        // This line makes title required.
        required: true
    },
    // This field stores unique room code used in meeting URL.
    roomCode: {
        // This line sets field type as text.
        type: String,
        // This line makes room code required.
        required: true,
        // This line ensures room code is unique.
        unique: true
    },
    // This field stores who created this meeting.
    createdBy: {
        // This line stores mongo object id.
        type: mongoose.Schema.Types.ObjectId,
        // This line links id with user collection.
        ref: 'User',
        // This line makes creator required.
        required: true
    },
    // This field stores whether meeting is active.
    isActive: {
        // This line stores active value as true false.
        type: Boolean,
        // This line sets default value as true.
        default: true
    }
// This line adds created and updated time fields.
}, { timestamps: true })

// This line exports meeting model.
module.exports = mongoose.model('Meeting', meetingSchema)
