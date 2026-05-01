// This file defines the complaint data shape. It stores user complaints that police will review.
const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
    // Short title describing the complaint
    title: {
        type: String,
        required: true
    },
    // Full detail of the complaint
    description: {
        type: String,
        required: true
    },
    // Location of the incident
    location: {
        type: String,
        required: true
    },
    // Who filed the complaint
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Which police officer is assigned to this complaint
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // Status of the complaint workflow
    status: {
        type: String,
        enum: ['open', 'under review', 'closed'],
        default: 'open'
    },
    // Link to the FIR created from this complaint
    firCreated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FIR'
    }
}, { timestamps: true })

module.exports = mongoose.model('Complaint', complaintSchema)
