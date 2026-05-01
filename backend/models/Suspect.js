// This file defines the suspect data model. It tells MongoDB the fields stored for each suspect.
const mongoose = require('mongoose')

const suspectSchema = new mongoose.Schema({
    // This part keeps the suspect full name
    name: {
        type: String,
        required: true
    },
    // This part keeps the suspect age
    age: {
        type: Number,
        required: true
    },
    // This part keeps the suspect gender
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    // This part keeps the last known location of the suspect
    lastSeenLocation: {
        type: String
    },
    // This part keeps the suspect investigation status
    status: {
        type: String,
        enum: ['unknown', 'wanted', 'cleared'],
        default: 'unknown'
    },
    // This part keeps references to related cases
    relatedCases: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Case'
        }
    ],
    // This part keeps who created the suspect record
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

module.exports = mongoose.model('Suspect', suspectSchema)
