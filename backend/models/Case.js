// This file defines the case data model. It tells MongoDB the fields stored for each case.
const mongoose = require('mongoose')

const caseSchema = new mongoose.Schema({
    // This part keeps the case title
    title: {
        type: String,
        required: true
    },
    // This part keeps the case description
    description: {
        type: String,
        required: true
    },
    // This part keeps the case location
    location: {
        type: String,
        required: true
    },
    // This part keeps the investigation status
    status: {
        type: String,
        enum: ['open', 'under_review', 'closed'],
        default: 'open'
    },
    // This part keeps the case priority
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    // This part keeps who is assigned to the case
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // This part keeps related suspects for the case
    suspects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Suspect'
        }
    ],
    // This part keeps related evidence for the case
    evidence: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Evidence'
        }
    ],
    // This part keeps who filed the case
    filedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Case', caseSchema)
