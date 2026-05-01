// This file defines the FIR data shape. It tells MongoDB what fields each FIR record should store.
// This line imports mongoose for defining the FIR collection structure
const mongoose = require('mongoose')

// This part describes the fields stored for each FIR record
const firSchema = new mongoose.Schema({

    // This part keeps the short heading of the FIR
    title: {
        // This line saves the title as text
        type: String,
        // Requires a title before saving
        required: true
    },

    // This part keeps the detailed incident description
    description: {
        // This line saves the description as text
        type: String,
        // Requires a description before saving
        required: true
    },

    // This part keeps where the incident happened
    location: {
        // This line saves the location as text
        type: String,
        // Requires a location before saving
        required: true
    },

    // This part keeps the current investigation state
    status: {
        // This line saves the status as text
        type: String,
        // Restricts status to the known workflow values
        enum: ['pending', 'investigating', 'closed'],
        // Starts every new FIR as pending
        default: 'pending'
    },

    // This part keeps the police officer or admin who created the FIR
    createdBy: {
        // This line saves the MongoDB id of the creator
        type: mongoose.Schema.Types.ObjectId,
        // Links the id to the User collection
        ref: 'User',
        required: true
    },

    // This part links the FIR to the complaint it was created from
    complaint: {
        // This line saves the referenced complaint id
        type: mongoose.Schema.Types.ObjectId,
        // Links the id to the Complaint collection
        ref: 'Complaint',
        required: true
    }

// This line adds createdAt and updatedAt fields automatically
}, { timestamps: true })

// This part creates and exports the FIR model
module.exports = mongoose.model('FIR', firSchema)

