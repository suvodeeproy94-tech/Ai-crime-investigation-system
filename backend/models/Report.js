// This file defines the report data model
// This model stores generated investigation reports in the database
const mongoose = require('mongoose') // This line imports mongoose for schema and model

const reportSchema = new mongoose.Schema({
    // This part keeps report title
    title: {
        type: String,
        required: true
    },
    // This part keeps full report text
    content: {
        type: String,
        required: true
    },
    // This part keeps report status for workflow
    status: {
        type: String,
        enum: ['draft', 'final'],
        default: 'draft'
    },
    // This part keeps optional related case id
    caseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Case'
    },
    // This part keeps optional related fir id
    firId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FIR'
    },
    // This part keeps report creator user id
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true }) // This line adds created and updated time automatically

module.exports = mongoose.model('Report', reportSchema) // This line exports the Report model
