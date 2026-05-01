// This file shows the AI analysis page. It lets police and admin users send case notes to the backend for AI review.
// This line imports useState for form input loading result and error state
import { useState } from 'react'
// This line imports the shared API client for backend requests
import API from '../services/api'
// This line imports the shared top bar
import Navbar from '../components/Navbar'
// This line imports the shared sidebar navigation
import Sidebar from '../components/Sidebar'

// This part shows the page used to analyze crime notes with AI
function AIAnalysis() {
    // This part keeps the text entered by the user
    const [input, setInput] = useState('')
    // This part keeps the AI analysis response
    const [result, setResult] = useState('')
    // This part keeps any error message returned by the backend
    const [error, setError] = useState('')
    // Tracks whether an AI request is currently running
    const [loading, setLoading] = useState(false)

    // This part sends the case notes to the backend for AI analysis
    const handleAnalyze = async () => {
        // This part shows loading state while the request is running
        setLoading(true)
        // Clears old results before starting a new analysis
        setResult('')
        // Clears old errors before starting a new analysis
        setError('')

        // Calls the backend AI endpoint and handles success or failure
        try {
            // This part sends the entered text to the AI analysis endpoint
            const res = await API.post('/ai/analyze', { text: input })
            // This line saves the AI result returned by the backend
            setResult(res.data.result)
        } catch (err) {
            // This part shows the backend error message or a fallback message
            setError(err.response?.data?.message || 'AI analysis failed. Check that the backend server is running.')
        } finally {
            // This step stops the loading state after success or failure
            setLoading(false)
        }
    }

    // This line returns the AI analysis page layout
    return (
        // App layout places sidebar beside the main panel
        <div className="app-layout">
            {/* This part shows the left navigation */}
            <Sidebar />

            {/* This is the main AI analysis content area */}
            <main className="main-panel">
                {/* This part shows the page title */}
                <Navbar title="AI Analysis" />

                {/* Keeps the AI form at a readable width */}
                <section className="content-section narrow">
                    {/* This part shows the section heading */}
                    <div className="section-header">
                        {/* Groups the small label and heading */}
                        <div>
                            {/* This is the small label for the section */}
                            <p className="eyebrow">Investigation Assistant</p>
                            {/* This is the main section heading */}
                            <h2>Analyze Crime Text</h2>
                        </div>
                    </div>

                    {/* Card containing the text area button and results */}
                    <div className="form-card">
                        {/* Label and input for the case notes */}
                        <label>
                            Case Notes
                            {/* Text area where the user enters crime details */}
                            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste case details or witness notes" rows="8" />
                        </label>

                        {/* Button starts analysis and disables while empty or loading */}
                        <button className="btn btn-primary" onClick={handleAnalyze} disabled={loading || !input.trim()}>
                            {/* This part shows progress text while the request is running */}
                            {loading ? 'Analyzing...' : 'Analyze'}
                        </button>

                        {/* This part shows an error box when the backend returns an error */}
                        {error && (
                            <div className="analysis-error">
                                {/* This shows the error message */}
                                <p>{error}</p>
                            </div>
                        )}

                        {/* This part shows the AI result when analysis succeeds */}
                        {result && (
                            <div className="analysis-result">
                                {/* This labels the result area */}
                                <p className="eyebrow">AI Result</p>
                                {/* This shows the AI generated analysis */}
                                <p>{result}</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}

// This line makes the AI analysis page
export default AIAnalysis


