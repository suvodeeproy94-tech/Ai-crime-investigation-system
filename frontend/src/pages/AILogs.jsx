// This file shows ai log page
// This page lets all logged in users view ai analysis logs
import { useEffect, useState } from 'react' // This line imports state and effect hooks
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports shared api client
import Navbar from '../components/Navbar' // This line imports top bar
import Sidebar from '../components/Sidebar' // This line imports left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component

// This part renders ai logs screen
function AILogs() {
    const [logs, setLogs] = useState([]) // This line stores ai logs
    const [loading, setLoading] = useState(true) // This line stores loading state
    const [error, setError] = useState('') // This line stores error message
    const [statusFilter, setStatusFilter] = useState('') // This line stores status filter
    const [searchText, setSearchText] = useState('') // This line stores text search

    // This function loads ai logs from backend
    const loadLogs = async () => {
        setLoading(true) // This line starts loading
        setError('') // This line clears old error

        try {
            const response = await API.get('/ai-logs') // This line loads ai logs
            setLogs(response.data || []) // This line saves ai logs
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load ai logs')) // This line shows loading error
        } finally {
            setLoading(false) // This line stops loading
        }
    }

    // This effect loads logs when page opens
    useEffect(() => {
        loadLogs() // This line starts log loading
    }, [])

    // This helper returns a safe requester name for the log card
    const getRequesterName = (log) => {
        if (log.requestedBy && log.requestedBy.name) {
            return log.requestedBy.name
        }

        return 'Unknown user'
    }

    // This helper returns a simple badge class for log status
    const getStatusClass = (status) => {
        if (status === 'failed') {
            return 'badge btn-danger'
        }

        return 'badge'
    }

    // This helper filters logs by status and search text
    const getFilteredLogs = () => {
        const filteredLogs = []
        const lowerSearchText = searchText.toLowerCase()

        for (const log of logs) {
            let matchesStatus = true

            if (statusFilter) {
                matchesStatus = log.status === statusFilter
            }

            const text = `${log.inputText || ''} ${log.outputText || ''} ${log.errorMessage || ''}`.toLowerCase()
            let matchesText = true

            if (searchText) {
                matchesText = text.includes(lowerSearchText)
            }

            if (matchesStatus && matchesText) {
                filteredLogs.push(log)
            }
        }

        return filteredLogs
    }

    // This line stores logs after filters are applied
    const filteredLogs = getFilteredLogs()

    return (
        <div className="app-layout"> {/* This line renders app layout wrapper */}
            <Sidebar /> {/* This line renders left navigation menu */}
            <main className="main-panel"> {/* This line renders main content area */}
                <Navbar title="AI Logs" /> {/* This line renders page title bar */}

                <section className="content-section"> {/* This line renders ai logs page section */}
                    <div className="section-header"> {/* This line renders section heading row */}
                        <div>
                            <p className="eyebrow">AI History</p> {/* This line shows small section label */}
                            <h2>AI Logs</h2> {/* This line shows main section title */}
                        </div>
                        <span className="count-pill">{filteredLogs.length} filtered</span> {/* This line shows filtered logs count */}
                    </div>

                    <section className="form-card case-filter-card"> {/* This line renders filter panel */}
                        <p className="eyebrow">Search Logs</p> {/* This line shows filter section label */}
                        <div className="filter-row"> {/* This line renders filter inputs row */}
                            <label>
                                Search Text
                                <input
                                    value={searchText}
                                    onChange={(event) => setSearchText(event.target.value)}
                                    placeholder="Search input output or error text"
                                />
                            </label>
                            <label>
                                Status
                                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                                    <option value="">All statuses</option>
                                    <option value="success">Success</option>
                                    <option value="failed">Failed</option>
                                </select>
                            </label>
                        </div>
                    </section>

                    {error && <div className="analysis-error"><p>{error}</p></div>} {/* This line shows error message */}
                    {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}
                    {!loading && filteredLogs.length === 0 && (
                        <div className="empty-state">No ai logs found</div>
                    )}

                    {!loading && filteredLogs.length > 0 && (
                        <div className="fir-grid"> {/* This line renders ai logs cards grid */}
                            {filteredLogs.map((log) => (
                                <article key={log._id} className="fir-card"> {/* This line renders one ai log card */}
                                    <div className="fir-card-header"> {/* This line renders ai log card header */}
                                        <div>
                                            <p className="eyebrow">AI Request</p>
                                            <h3>{getRequesterName(log)}</h3>
                                        </div>
                                        <span className={getStatusClass(log.status)}>{log.status}</span>
                                    </div>
                                    <div className="fir-meta">
                                        <span>User Role</span>
                                        <strong>{log.requestedByRole}</strong>
                                    </div>
                                    <div className="status-history">
                                        <span>Input Text</span>
                                        <p>{log.inputText || 'No input text'}</p>
                                    </div>
                                    <div className="status-history">
                                        <span>Output Text</span>
                                        <p>{log.outputText || 'No output text'}</p>
                                    </div>
                                    {log.errorMessage && (
                                        <div className="analysis-error"> {/* This line renders ai log error block */}
                                            <p>{log.errorMessage}</p> {/* This line shows ai error text */}
                                        </div>
                                    )}
                                    <div className="fir-meta">
                                        <span>Created</span>
                                        <strong>{new Date(log.createdAt).toLocaleString()}</strong>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default AILogs // This line exports ai logs page
