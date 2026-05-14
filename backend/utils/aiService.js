// This file sends text to Groq AI and returns analysis result to controllers.
// This line stores the Groq chat completion API URL used for AI requests.
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

// This message tells the AI how to answer case analysis requests.
const SYSTEM_MESSAGE = 'You are an investigation assistant. ' +
    'Analyze crime case notes and return concise practical observations. ' +
    'Include summary, possible leads, missing details, and next steps. ' +
    'Do not invent facts.'

// This message tells the AI how to write a clean crime report.
const REPORT_SYSTEM_MESSAGE = 'You are a crime report writing assistant. ' +
    'Create a clean, searchable, ATS friendly investigation report. ' +
    'Use simple official language and clear section headings. ' +
    'Only use facts given by the user. ' +
    'Write Missing when important details are not provided. ' +
    'Do not invent names, dates, evidence, laws, or actions.'

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
                    content: SYSTEM_MESSAGE
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

    // Convert the API response body to normal JavaScript data.
    const data = await response.json()

    // Keep the error message simple when Groq sends an error.
    if (!response.ok) {
        let errorMessage = 'AI analysis failed'

        if (data.error && data.error.message) {
            errorMessage = data.error.message
        }

        throw new Error(errorMessage)
    }

    // Read the AI answer step by step so it is easy to understand.
    if (data.choices && data.choices.length > 0) {
        const firstChoice = data.choices[0]

        if (firstChoice.message && firstChoice.message.content) {
            return firstChoice.message.content
        }
    }

    // Return a safe message if Groq does not send a normal answer.
    return 'No analysis returned'
}

// This function sends raw crime notes to Groq and returns a formatted report.
const generateCrimeReport = async (text) => {
    // This line stops early when Groq API key is missing in environment.
    if (!process.env.GROQ_API_KEY) {
        throw new Error('Groq API key is not configured')
    }

    // This text asks AI to keep the report in a fixed easy to read format.
    const reportPrompt = 'Create one ATS friendly crime report using the notes below.\n\n' +
        'Use this exact report format:\n' +
        '1. Report Title\n' +
        '2. Crime Type\n' +
        '3. Incident Date And Time\n' +
        '4. Incident Location\n' +
        '5. Victim Details\n' +
        '6. Suspect Details\n' +
        '7. Witness Details\n' +
        '8. Evidence Collected\n' +
        '9. Incident Summary\n' +
        '10. Missing Information\n' +
        '11. Recommended Next Steps\n\n' +
        'Raw crime notes:\n' +
        text

    // This line sends report notes and instructions to Groq model.
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
            // This line sends system and user messages for AI report writing.
            messages: [
                {
                    // This line marks message as system instruction.
                    role: 'system',
                    // This line gives behavior rules for report generation.
                    content: REPORT_SYSTEM_MESSAGE
                },
                {
                    // This line marks message as user provided text.
                    role: 'user',
                    // This line sends report prompt and raw notes to model.
                    content: reportPrompt
                }
            ],
            // This line keeps the report stable and less random.
            temperature: 0.1
        })
    })

    // Convert the API response body to normal JavaScript data.
    const data = await response.json()

    // Keep the error message simple when Groq sends an error.
    if (!response.ok) {
        let errorMessage = 'AI report generation failed'

        if (data.error && data.error.message) {
            errorMessage = data.error.message
        }

        throw new Error(errorMessage)
    }

    // Read the AI report step by step so it is easy to understand.
    if (data.choices && data.choices.length > 0) {
        const firstChoice = data.choices[0]

        if (firstChoice.message && firstChoice.message.content) {
            return firstChoice.message.content
        }
    }

    // Return a safe message if Groq does not send a normal answer.
    return 'No report returned'
}

// This line exports AI helper functions for controller use.
module.exports = { analyzeCrimeText, generateCrimeReport }

