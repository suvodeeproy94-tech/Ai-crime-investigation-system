// This file handles AI analysis requests from the frontend.
// It checks the user role, checks the text, and sends clean notes to the AI service.

const { analyzeCrimeText } = require('../utils/aiService') // This line imports ai service function
const AILog = require('../models/AILog') // This line imports AILog model for saving ai request history

// This function checks request text and returns ai analysis
exports.analyzeText = async (req, res) => {
    const { text } = req.body // This line reads input text from request body

    // Only police and admin users can use AI analysis.
    if (!['police', 'admin'].includes(req.user?.role)) {
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
        await AILog.create({
            requestedBy: req.user.id, // This line stores requester user id
            requestedByRole: req.user.role, // This line stores requester role
            inputText: text?.toString?.().trim?.() || '', // This line stores ai input text if available
            outputText: '', // This line keeps output empty on failure
            status: 'failed', // This line stores failed status
            errorMessage: error.message // This line stores failure reason
        })

        res.status(500).json({ message: error.message }) // This line sends error message when analysis fails
    }
}

