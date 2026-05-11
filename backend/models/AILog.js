// This file defines the ai log data model
// This model stores every ai analysis request and response summary
const mongoose = require('mongoose') // This line imports mongoose for schema and model

const aiLogSchema = new mongoose.Schema({
    // This part keeps user id who requested ai analysis
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // This part keeps role of requesting user
    requestedByRole: {
        type: String,
        enum: ['admin', 'police', 'user'],
        required: true
    },
    // This part keeps input text sent to ai
    inputText: {
        type: String,
        required: true
    },
    // This part keeps output text returned by ai
    outputText: {
        type: String
    },
    // This part keeps current request result status
    status: {
        type: String,
        enum: ['success', 'failed'],
        required: true
    },
    // This part keeps error message when request fails
    errorMessage: {
        type: String
    }
}, { timestamps: true }) // This line adds created and updated time automatically

module.exports = mongoose.model('AILog', aiLogSchema) // This line exports the AILog model
