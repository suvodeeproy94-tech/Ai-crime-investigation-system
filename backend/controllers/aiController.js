// This file handles AI analysis requests from the frontend.
// It checks the user role, checks the text, and sends clean notes to the AI service.

const { analyzeCrimeText, generateCrimeReport } = require('../utils/aiService') // This line imports ai service functions
const AILog = require('../models/AILog') // This line imports AILog model for saving ai request history

// This function checks request text and returns ai analysis
exports.analyzeText = async (req, res) => {
    const { text } = req.body // This line reads input text from request body
    const userRole = req.user ? req.user.role : '' // This line reads user role safely

    // Only police and admin users can use AI analysis.
    if (!['police', 'admin'].includes(userRole)) {
        return res.status(403).json({ message: 'Only police and admin users can use AI analysis' })
    }

    // The AI service needs normal text, not an empty value or another data type.
    if (typeof text !== 'string' || !text.trim()) {
        return res.status(400).json({ message: 'Text is required' })
    }

    try {
        // Remove extra space before sending the notes to Groq.
        const cleanedText = text.trim() // This line stores cleaned input text
        const result = await analyzeCrimeText(cleanedText) // This line gets ai result from ai service

        await AILog.create({
            requestedBy: req.user.id, // This line stores requester user id
            requestedByRole: req.user.role, // This line stores requester role
            inputText: cleanedText, // This line stores ai input text
            outputText: result, // This line stores ai output text
            status: 'success' // This line stores success status
        })

        res.json({ result }) // This line sends ai result back to frontend
    } catch (error) {
        // Keep failed input as text so it can be stored in the log.
        let failedInputText = ''

        if (text !== undefined && text !== null) {
            failedInputText = text.toString().trim()
        }

        await AILog.create({
            requestedBy: req.user.id, // This line stores requester user id
            requestedByRole: req.user.role, // This line stores requester role
            inputText: failedInputText, // This line stores ai input text if available
            outputText: '', // This line keeps output empty on failure
            status: 'failed', // This line stores failed status
            errorMessage: error.message // This line stores failure reason
        })

        res.status(500).json({ message: error.message }) // This line sends error message when analysis fails
    }
}

// This function checks request text and returns an AI generated crime report.
exports.generateReport = async (req, res) => {
    const { text } = req.body // This line reads raw report notes from request body
    const userRole = req.user ? req.user.role : '' // This line reads user role safely

    // Only police and admin users can generate AI crime reports.
    if (!['police', 'admin'].includes(userRole)) {
        return res.status(403).json({ message: 'Only police and admin users can generate AI reports' })
    }

    // The AI report needs real notes before it can write a useful draft.
    if (typeof text !== 'string' || !text.trim()) {
        return res.status(400).json({ message: 'Crime notes are required' })
    }

    try {
        // Remove extra spaces before sending notes to Groq.
        const cleanedText = text.trim() // This line stores cleaned report notes
        const reportContent = await generateCrimeReport(cleanedText) // This line gets formatted report from ai service

        // This date text keeps generated report titles easy to recognize.
        const todayText = new Date().toISOString().slice(0, 10) // This line creates date text like 2026-05-14
        const reportTitle = `AI Crime Report - ${todayText}` // This line creates a simple report title

        await AILog.create({
            requestedBy: req.user.id, // This line stores requester user id
            requestedByRole: req.user.role, // This line stores requester role
            inputText: cleanedText, // This line stores ai input text
            outputText: reportContent, // This line stores ai output text
            status: 'success' // This line stores success status
        })

        res.json({
            title: reportTitle, // This line sends title to frontend
            content: reportContent // This line sends report text to frontend
        })
    } catch (error) {
        // Keep failed input as text so it can be stored in the log.
        let failedInputText = ''

        if (text !== undefined && text !== null) {
            failedInputText = text.toString().trim()
        }

        await AILog.create({
            requestedBy: req.user.id, // This line stores requester user id
            requestedByRole: req.user.role, // This line stores requester role
            inputText: failedInputText, // This line stores ai input text if available
            outputText: '', // This line keeps output empty on failure
            status: 'failed', // This line stores failed status
            errorMessage: error.message // This line stores failure reason
        })

        res.status(500).json({ message: error.message }) // This line sends error message when generation fails
    }
}

