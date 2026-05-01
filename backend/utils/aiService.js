// This file talks to Groq AI. It sends case notes to Groq and returns the AI answer to the backend.
// This part keeps the Groq chat completion endpoint used by the backend
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// This part sends crime case text to Groq and returns the generated analysis
const analyzeCrimeText = async (text) => {
    // This step stops the request when the Groq API key is missing from backend .env
    if (!process.env.GROQ_API_KEY) {
        throw new Error('Groq API key is not configured')
    }

    // Calls the Groq API with a structured chat completion request
    const response = await fetch(GROQ_API_URL, {
        // This line uses POST because the request sends data to the AI service
        method: 'POST',
        // This part sends the API key and tells Groq the request body is JSON
        headers: {
            // This line adds the private Groq API key as a bearer token
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            // Marks the request payload as JSON
            'Content-Type': 'application/json'
        },
        // This line changes the model name and messages into a JSON request body
        body: JSON.stringify({
            // This line uses the configured Groq model or a default fast model
            model: process.env.GROQ_MODEL || 'llama-3.1-8b-instant',
            // This part gives instructions and the user case text to the model
            messages: [
                {
                    // System message controls how the AI should behave
                    role: 'system',
                    // Tells the AI to stay practical and avoid invented facts
                    content: 'You are an investigation assistant. Analyze crime case notes and return concise, practical observations: summary, possible leads, missing details, and next investigative steps. Do not invent facts.'
                },
                {
                    // User message contains the case notes from the frontend
                    role: 'user',
                    // Passes the actual text that needs analysis
                    content: text
                }
            ],
            // This part keeps the model output focused and less random
            temperature: 0.2
        })
    })

    // This line reads the JSON response returned by Groq
    const data = await response.json()

    // Turns a failed Groq response into a clear backend error
    if (!response.ok) {
        throw new Error(data.error?.message || 'AI analysis failed')
    }

    // This line returns the model message or a fallback message if nothing was produced
    return data.choices?.[0]?.message?.content || 'No analysis returned'
}

// This line makes the AI helper so the controller can use it
module.exports = { analyzeCrimeText }

