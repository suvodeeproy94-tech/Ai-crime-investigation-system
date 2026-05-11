// This file sends text to Groq AI and returns analysis result to controllers.
// This line stores the Groq chat completion API URL used for AI requests.

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// This function sends crime note text to Groq and returns AI response text.
const analyzeCrimeText = async (text) => {
    // This line stops early when Groq API key is missing in environment.
    if (!process.env.GROQ_API_KEY) {
        throw new Error('Groq API key is not configured')
    }

    // This line sends notes and instructions to Groq model.
    const response = await fetch(GROQ_API_URL, {
        // This line uses POST request for chat completion API.
        method: 'POST',
        // This part sends auth token and json content type headers.
        headers: {
            // This line sends private Groq key in authorization header.
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            // This line tells API request body is JSON.
            'Content-Type': 'application/json'
        },
        // This part sends model name messages and generation options.
        body: JSON.stringify({
            // This line uses configured Groq model or fallback model.
            model: process.env.GROQ_MODEL || 'llama-3.1-8b-instant',
            // This line sends system and user messages for AI context.
            messages: [
                {
                    // This line marks message as system instruction.
                    role: 'system',
                    // This line gives behavior rules for investigation analysis.
                    content: 'You are an investigation assistant. Analyze crime case notes and return concise, practical observations: summary, possible leads, missing details, and next investigative steps. Do not invent facts.'
                },
                {
                    // This line marks message as user provided text.
                    role: 'user',
                    // This line sends actual case note text to model.
                    content: text
                }
            ],
            // This line sets low randomness for stable results.
            temperature: 0.2
        })
    })

    // This line converts API response body to JSON data.
    const data = await response.json()

    // This line throws clear error when Groq returns failed status.
    if (!response.ok) {
        throw new Error(data.error?.message || 'AI analysis failed')
    }

    // This line returns AI message text or safe fallback text.
    return data.choices?.[0]?.message?.content || 'No analysis returned'
}

// This line exports AI helper function for controller use.
module.exports = { analyzeCrimeText }

