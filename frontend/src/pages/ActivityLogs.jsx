// This file shows activity logs and audit tracking.
// It helps admin see create update delete and other important actions.
import { useEffect, useState } from 'react' // This line imports React hooks.
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports shared API client.
import Navbar from '../components/Navbar' // This line imports top bar.
import Sidebar from '../components/Sidebar' // This line imports left menu.
import Loader from '../components/Loader' // This line imports loading component.
import { getSocket } from '../services/socketClient' // This line imports socket helper.

// This helper returns user name safely.
const getUserName = (log) => {
    if (log.user && log.user.name) {
        return log.user.name
    }

    return 'Unknown user'
}

// This helper returns badge class for log action.
const getActionClass = (action) => {
    if (action === 'delete') {
        return 'badge btn-danger'
    }

    if (action === 'create') {
        return 'badge badge-closed'
    }

    return 'badge'
}

// This part renders activity logs page.
function ActivityLogs() {
    const [logs, setLogs] = useState([]) // This line stores activity logs.
    const [loading, setLoading] = useState(true) // This line stores loading state.
    const [error, setError] = useState('') // This line stores error message.
    const [searchText, setSearchText] = useState('') // This line stores search input.
    const [moduleFilter, setModuleFilter] = useState('') // This line stores module filter.
    const [actionFilter, setActionFilter] = useState('') // This line stores action filter.

    // This function loads logs from backend.
    const loadLogs = async () => {
        setLoading(true)
        setError('')

        try {
            const response = await API.get('/activity-logs') // This line loads audit logs.
            setLogs(response.data || []) // This line saves audit logs.
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load activity logs'))
        } finally {
            setLoading(false)
        }
    }

    // This effect loads logs when page opens.
    useEffect(() => {
        loadLogs()
    }, [])

    // This effect reloads logs when backend sends live activity update.
    useEffect(() => {
        const socket = getSocket() // This line gets shared socket connection.

        // This function reloads logs after a new activity happens.
        const handleActivityUpdate = () => {
            loadLogs()
        }

        socket.on('activityUpdated', handleActivityUpdate)

        // This cleanup removes listener when page closes.
        return () => {
            socket.off('activityUpdated', handleActivityUpdate)
        }
    }, [])

    // This helper filters logs using simple conditions.
    const getFilteredLogs = () => {
        const filteredLogs = []
        const lowerSearchText = searchText.toLowerCase()

        for (const log of logs) {
            let matchesSearch = true
            let matchesModule = true
            let matchesAction = true

            const logText = `${log.description || ''} ${log.moduleName || ''} ${log.action || ''} ${getUserName(log)}`.toLowerCase()

            if (searchText) {
                matchesSearch = logText.includes(lowerSearchText)
            }

            if (moduleFilter) {
                matchesModule = log.moduleName === moduleFilter
            }

            if (actionFilter) {
                matchesAction = log.action === actionFilter
            }

            if (matchesSearch && matchesModule && matchesAction) {
                filteredLogs.push(log)
            }
        }

        return filteredLogs
    }

    const filteredLogs = getFilteredLogs() // This line stores filtered log list.

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Activity Logs" />

                <section className="content-section">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Audit Tracking</p>
                            <h2>Activity Logs</h2>
                        </div>
                        <span className="count-pill">{filteredLogs.length} filtered</span>
                    </div>

                    <section className="form-card case-filter-card">
                        <p className="eyebrow">Search Activity</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Search Text
                                <input
                                    value={searchText}
                                    onChange={(event) => setSearchText(event.target.value)}
                                    placeholder="Search user module or action"
                                />
                            </label>
                            <label>
                                Module
                                <select value={moduleFilter} onChange={(event) => setModuleFilter(event.target.value)}>
                                    <option value="">All modules</option>
                                    <option value="case">Case</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="fir">FIR</option>
                                    <option value="evidence">Evidence</option>
                                    <option value="suspect">Suspect</option>
                                    <option value="report">Report</option>
                                    <option value="meeting">Meeting</option>
                                    <option value="chat">Chat</option>
                                </select>
                            </label>
                            <label>
                                Action
                                <select value={actionFilter} onChange={(event) => setActionFilter(event.target.value)}>
                                    <option value="">All actions</option>
                                    <option value="create">Create</option>
                                    <option value="update">Update</option>
                                    <option value="delete">Delete</option>
                                    <option value="send">Send</option>
                                </select>
                            </label>
                        </div>
                    </section>

                    {error && <div className="analysis-error"><p>{error}</p></div>}
                    {loading && <div className="empty-state"><Loader /></div>}

                    {!loading && filteredLogs.length === 0 && (
                        <div className="empty-state">No activity logs found</div>
                    )}

                    {!loading && filteredLogs.length > 0 && (
                        <div className="fir-grid">
                            {filteredLogs.map((log) => (
                                <article key={log._id} className="fir-card">
                                    <div className="fir-card-header">
                                        <div>
                                            <p className="eyebrow">{log.moduleName}</p>
                                            <h3>{getUserName(log)}</h3>
                                        </div>
                                        <span className={getActionClass(log.action)}>{log.action}</span>
                                    </div>
                                    <div className="status-history">
                                        <span>Description</span>
                                        <p>{log.description}</p>
                                    </div>
                                    <div className="fir-meta">
                                        <span>User Role</span>
                                        <strong>{log.userRole}</strong>
                                    </div>
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

export default ActivityLogs
