// This file shows the AI analysis page.
// Police and admin users can paste case notes and ask the backend for AI help.

import { useState } from 'react' // This line imports state hook
import API from '../services/apiClient' // This line imports shared api client
import Navbar from '../components/Navbar' // This line imports top bar
import Sidebar from '../components/Sidebar' // This line imports left menu

// This part renders ai analysis page
function AIAnalysis() {
    const [input, setInput] = useState('') // This line stores user input text
    const [result, setResult] = useState('') // This line stores ai result text
    const [error, setError] = useState('') // This line stores error message
    const [loading, setLoading] = useState(false) // This line stores loading state

    // This function sends input text for ai analysis
    const handleAnalyze = async () => {
        setLoading(true) // This line starts loading state
        setResult('') // This line clears old result
        setError('') // This line clears old error

        try {
            // Send clean case notes to the backend AI route.
            const res = await API.post('/ai/analyze', { text: input.trim() })
            setResult(res.data.result) // This line saves ai result from backend
        } catch (err) {
            setError(err.response?.data?.message || 'AI analysis failed. Check that the backend server is running.') // This line shows error message
        } finally {
            setLoading(false) // This line stops loading state
        }
    }

    return (
        <div className="app-layout"> {/* This line renders app layout wrapper */}
            <Sidebar /> {/* This line renders left navigation menu */}

            <main className="main-panel"> {/* This line renders main content area */}
                <Navbar title="AI Analysis" /> {/* This line renders page title bar */}

                <section className="content-section narrow"> {/* This line renders ai analysis section */}
                    <div className="section-header"> {/* This line renders section heading row */}
                        <div>
                            <p className="eyebrow">Investigation Assistant</p> {/* This line shows small section label */}
                            <h2>Analyze Crime Text</h2> {/* This line shows main section title */}
                        </div>
                    </div>

                    <div className="form-card"> {/* This line renders analysis input form card */}
                        <label>
                            Case Notes
                            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste case details or witness notes" rows="8" /> {/* This line captures case notes input */}
                        </label>

                        <button className="btn btn-primary" onClick={handleAnalyze} disabled={loading || !input.trim()}>
                            {loading ? 'Analyzing...' : 'Analyze'}
                        </button>

                        {error && ( // This line shows error block when request fails
                            <div className="analysis-error">
                                <p>{error}</p>
                            </div>
                        )}

                        {result && ( // This line shows ai result block when request succeeds
                            <div className="analysis-result">
                                <p className="eyebrow">AI Result</p>
                                <p>{result}</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AIAnalysis


