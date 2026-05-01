// This file handles AI analysis requests. It checks the user role and sends crime notes to the AI service.
// This line imports the service function that talks to the Groq API
const { analyzeCrimeText } = require('../utils/aiService')

// This part handles the request for analyzing case notes with AI
exports.analyzeText = async (req, res) => {
    // This line reads the text sent from the frontend request body
    const { text } = req.body

    // This check stops users who are not allowed to use the AI analysis feature
    if (!['police', 'admin'].includes(req.user?.role)) {
        return res.status(403).json({ message: 'Only police and admin users can use AI analysis' })
    }

    // This check rejects empty requests before sending anything to Groq
    if (!text || !text.trim()) {
        return res.status(400).json({ message: 'Text is required' })
    }

    // Runs the AI request and sends the result back to the frontend
    try {
        // This line removes extra spaces and sends the cleaned notes for analysis
        const result = await analyzeCrimeText(text.trim())

        // This part sends the generated analysis as a JSON response
        res.json({ result })
    } catch (error) {
        // This part sends a readable error message when AI analysis fails
        res.status(500).json({ message: error.message })
    }
}

