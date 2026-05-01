// This file defines the evidence data model. It tells MongoDB the fields stored for each evidence item.
const mongoose = require('mongoose')

const evidenceSchema = new mongoose.Schema({
    // This part keeps the evidence title
    title: {
        type: String,
        required: true
    },
    // This part keeps the evidence description
    description: {
        type: String
    },
    // This part keeps the file URL for attached evidence
    fileUrl: {
        type: String
    },
    // This part keeps the related case id
    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Case',
        required: true
    },
    // This part keeps the related suspect id when applicable
    suspectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Suspect'
    },
    // This part keeps who uploaded the evidence
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // This part keeps the evidence status
    status: {
        type: String,
        enum: ['collected', 'verified', 'archived'],
        default: 'collected'
    }
}, { timestamps: true })

module.exports = mongoose.model('Evidence', evidenceSchema)
