// This file shows the case management page.
// It supports case creation, search, filters, sorting, update, and delete.
import { useEffect, useState } from 'react' // This line imports React hooks for state and effects.
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports the shared API client.
import Sidebar from '../components/Sidebar' // This line imports the left navigation panel.
import Navbar from '../components/Navbar' // This line imports the top page bar.
import Loader from '../components/Loader' // This line imports the shared loading logo component.
import useAuth from '../hooks/useAuth' // This line imports auth data to read the current user role.
import { getSocket } from '../services/socketClient' // This line imports socket helper for live updates.

// This list keeps valid case status values in one place.
const allowedCaseStatuses = ['open', 'under_review', 'closed']

// This object keeps the create case form empty by default.
const emptyCaseForm = {
    title: '',
    description: '',
    location: '',
    latitude: '',
    longitude: '',
    priority: 'medium'
}

// This object keeps filter values empty by default.
const emptyFilters = {
    q: '',
    status: '',
    priority: '',
    fromDate: '',
    toDate: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
}

// This helper builds query params from filter values.
const buildCaseParams = (filters) => {
    const params = {}

    if (filters.q) {
        params.q = filters.q
    }

    if (filters.status) {
        params.status = filters.status
    }

    if (filters.priority) {
        params.priority = filters.priority
    }

    if (filters.fromDate) {
        params.fromDate = filters.fromDate
    }

    if (filters.toDate) {
        params.toDate = filters.toDate
    }

    if (filters.sortBy) {
        params.sortBy = filters.sortBy
    }

    if (filters.sortOrder) {
        params.sortOrder = filters.sortOrder
    }

    return params
}

// This helper counts cases by status.
const getStatusSummary = (cases) => {
    const result = {
        open: 0,
        under_review: 0,
        closed: 0
    }

    for (const caseItem of cases) {
        if (result[caseItem.status] !== undefined) {
            result[caseItem.status] += 1
        }
    }

    return result
}

// This helper keeps status badge styling easy to read.
const getStatusClass = (status) => {
    if (status === 'under_review') {
        return 'badge badge-investigating'
    }

    if (status === 'closed') {
        return 'badge badge-closed'
    }

    return 'badge'
}

// This part renders the full case management screen.
function CasePage() {
    const { user } = useAuth() // This line reads current user data.
    let userRole = '' // This line stores the role safely.

    if (user && user.role) {
        userRole = user.role
    }

    // This state keeps the full case list returned by the backend.
    const [cases, setCases] = useState([])
    // This state keeps loading status while list data is being fetched.
    const [loading, setLoading] = useState(true)
    // This state keeps success messages.
    const [message, setMessage] = useState('')
    // This state keeps error messages shown to the user.
    const [error, setError] = useState('')
    // This state keeps create form values for new case creation.
    const [newCase, setNewCase] = useState(emptyCaseForm)
    // This state keeps all filter and sorting inputs.
    const [filters, setFilters] = useState(emptyFilters)

    // This value tells whether current role can create or edit cases.
    const canManageCases = userRole === 'police' || userRole === 'admin'
    // This value tells whether current role can delete cases.
    const canDeleteCases = userRole === 'admin'

    // This helper loads case records from the backend using current filter values.
    const fetchCases = async () => {
        setLoading(true)
        setError('')

        try {
            const params = buildCaseParams(filters)
            const response = await API.get('/cases', { params })
            setCases(response.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load cases.'))
        } finally {
            setLoading(false)
        }
    }

    // This effect loads cases on first render and when any filter field changes.
    useEffect(() => {
        fetchCases()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.q, filters.status, filters.priority, filters.fromDate, filters.toDate, filters.sortBy, filters.sortOrder])

    // This effect reloads cases when backend sends live case update.
    useEffect(() => {
        const socket = getSocket() // This line gets shared socket connection.

        // This function reloads case list after create update or delete.
        const handleCaseUpdate = () => {
            fetchCases()
        }

        socket.on('caseUpdated', handleCaseUpdate)

        // This cleanup removes listener when page closes.
        return () => {
            socket.off('caseUpdated', handleCaseUpdate)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters])

    // This helper updates one filter key with a new value.
    const handleFilterChange = (field, value) => {
        const updatedFilters = {
            q: filters.q,
            status: filters.status,
            priority: filters.priority,
            fromDate: filters.fromDate,
            toDate: filters.toDate,
            sortBy: filters.sortBy,
            sortOrder: filters.sortOrder
        }

        updatedFilters[field] = value
        setFilters(updatedFilters)
    }

    // This helper updates one create form field.
    const handleNewCaseChange = (field, value) => {
        const updatedCase = {
            title: newCase.title,
            description: newCase.description,
            location: newCase.location,
            latitude: newCase.latitude,
            longitude: newCase.longitude,
            priority: newCase.priority
        }

        updatedCase[field] = value
        setNewCase(updatedCase)
    }

    // This helper resets all filters back to their default values.
    const resetFilters = () => {
        setFilters(emptyFilters)
    }

    // This helper creates a new case from form values.
    const handleCreateCase = async (event) => {
        event.preventDefault()
        setMessage('')
        setError('')

        // Basic required field validation to avoid incomplete submissions.
        if (!newCase.title || !newCase.description || !newCase.location) {
            setError('Please fill title, description, and location.')
            return
        }

        try {
            const caseData = {
                title: newCase.title,
                description: newCase.description,
                location: newCase.location,
                latitude: newCase.latitude || undefined,
                longitude: newCase.longitude || undefined,
                priority: newCase.priority
            }

            await API.post('/cases', caseData)
            setMessage('Case created successfully.')
            setNewCase(emptyCaseForm)
            fetchCases()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to create case.'))
        }
    }

    // This helper updates a case status quickly through a small prompt.
    const handleUpdateStatus = async (caseItem) => {
        const nextStatus = prompt('Enter status: open, under_review, or closed', caseItem.status || 'open')

        if (!nextStatus) {
            return
        }

        if (!allowedCaseStatuses.includes(nextStatus)) {
            setError('Use only open under_review or closed status')
            return
        }

        try {
            await API.put(`/cases/${caseItem._id}`, { status: nextStatus })
            setMessage('Case updated successfully.')
            setError('')
            fetchCases()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to update case.'))
        }
    }

    // This helper deletes a case after a simple confirmation.
    const handleDeleteCase = async (caseId) => {
        const isConfirmed = window.confirm('Do you want to delete this case?')

        if (!isConfirmed) {
            return
        }

        try {
            await API.delete(`/cases/${caseId}`)
            setMessage('Case deleted successfully.')
            setError('')
            fetchCases()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to delete case.'))
        }
    }

    // This line prepares status totals for the page.
    const statusSummary = getStatusSummary(cases)

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Case Management" />

                <section className="content-section">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Investigations</p>
                            <h2>Cases</h2>
                        </div>
                        <span className="count-pill">{cases.length} total</span>
                    </div>

                    <section className="dashboard-summary">
                        <article className="summary-card">
                            <p>Open Cases</p>
                            <strong>{statusSummary.open}</strong>
                        </article>
                        <article className="summary-card">
                            <p>Under Review</p>
                            <strong>{statusSummary.under_review}</strong>
                        </article>
                        <article className="summary-card">
                            <p>Closed Cases</p>
                            <strong>{statusSummary.closed}</strong>
                        </article>
                    </section>

                    <section className="form-card case-filter-card">
                        <p className="eyebrow">Advanced Search</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Search Text
                                <input
                                    value={filters.q}
                                    onChange={(event) => handleFilterChange('q', event.target.value)}
                                    placeholder="Search title, description, location"
                                />
                            </label>
                            <label>
                                Status
                                <select value={filters.status} onChange={(event) => handleFilterChange('status', event.target.value)}>
                                    <option value="">All statuses</option>
                                    <option value="open">Open</option>
                                    <option value="under_review">Under Review</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </label>
                            <label>
                                Priority
                                <select value={filters.priority} onChange={(event) => handleFilterChange('priority', event.target.value)}>
                                    <option value="">All priorities</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </label>
                            <label>
                                From Date
                                <input
                                    type="date"
                                    value={filters.fromDate}
                                    onChange={(event) => handleFilterChange('fromDate', event.target.value)}
                                />
                            </label>
                            <label>
                                To Date
                                <input
                                    type="date"
                                    value={filters.toDate}
                                    onChange={(event) => handleFilterChange('toDate', event.target.value)}
                                />
                            </label>
                            <label>
                                Sort By
                                <select value={filters.sortBy} onChange={(event) => handleFilterChange('sortBy', event.target.value)}>
                                    <option value="createdAt">Created Date</option>
                                    <option value="status">Status</option>
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </label>
                            <label>
                                Sort Order
                                <select value={filters.sortOrder} onChange={(event) => handleFilterChange('sortOrder', event.target.value)}>
                                    <option value="desc">Newest First</option>
                                    <option value="asc">Oldest First</option>
                                </select>
                            </label>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-secondary" type="button" onClick={resetFilters}>
                                Reset Filters
                            </button>
                        </div>
                    </section>

                    {canManageCases && (
                        <form className="form-card" onSubmit={handleCreateCase}>
                            <p className="eyebrow">Create New Case</p>
                            <label>
                                Title
                                <input
                                    value={newCase.title}
                                    onChange={(event) => handleNewCaseChange('title', event.target.value)}
                                    placeholder="Case title"
                                />
                            </label>
                            <label>
                                Description
                                <textarea
                                    value={newCase.description}
                                    onChange={(event) => handleNewCaseChange('description', event.target.value)}
                                    placeholder="Case description"
                                />
                            </label>
                            <label>
                                Location
                                <input
                                    value={newCase.location}
                                    onChange={(event) => handleNewCaseChange('location', event.target.value)}
                                    placeholder="Incident location"
                                />
                            </label>
                            <div className="filter-row case-filter-grid">
                                <label>
                                    Latitude
                                    <input
                                        type="number"
                                        step="any"
                                        value={newCase.latitude}
                                        onChange={(event) => handleNewCaseChange('latitude', event.target.value)}
                                        placeholder="Example 22.5726"
                                    />
                                </label>
                                <label>
                                    Longitude
                                    <input
                                        type="number"
                                        step="any"
                                        value={newCase.longitude}
                                        onChange={(event) => handleNewCaseChange('longitude', event.target.value)}
                                        placeholder="Example 88.3639"
                                    />
                                </label>
                            </div>
                            <label>
                                Priority
                                <select value={newCase.priority} onChange={(event) => handleNewCaseChange('priority', event.target.value)}>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </label>
                            <button className="btn btn-primary" type="submit">Create Case</button>
                        </form>
                    )}

                    {message && <div className="analysis-result"><p>{message}</p></div>}
                    {error && <div className="analysis-error"><p>{error}</p></div>}
                    {loading && <div className="empty-state"><Loader /></div>}

                    {!loading && cases.length === 0 && (
                        <div className="empty-state">
                            <h3>No case records found</h3>
                            <p>Try adjusting filters or create a new case.</p>
                        </div>
                    )}

                    {!loading && cases.length > 0 && (
                        <div className="fir-grid">
                            {cases.map((caseItem) => {
                                const statusHistory = caseItem.statusHistory || []

                                return (
                                    <article key={caseItem._id} className="fir-card">
                                        <div className="fir-card-header">
                                            <h3>{caseItem.title}</h3>
                                            <span className={getStatusClass(caseItem.status)}>{caseItem.status}</span>
                                        </div>
                                        <p className="fir-description">{caseItem.description}</p>
                                        <div className="fir-meta">
                                            <span>Location</span>
                                            <strong>{caseItem.location}</strong>
                                        </div>
                                        <div className="fir-meta">
                                            <span>Map Coordinates</span>
                                            <strong>{caseItem.latitude && caseItem.longitude ? `${caseItem.latitude}, ${caseItem.longitude}` : 'Not added'}</strong>
                                        </div>
                                        <div className="fir-meta">
                                            <span>Priority</span>
                                            <strong>{caseItem.priority}</strong>
                                        </div>
                                        <div className="fir-meta">
                                            <span>Created</span>
                                            <strong>{new Date(caseItem.createdAt).toLocaleString()}</strong>
                                        </div>
                                        {statusHistory.length > 0 && (
                                            <div className="status-history">
                                                <span>Status History</span>
                                                {statusHistory.map((historyItem) => (
                                                    <p key={historyItem._id || `${historyItem.status}-${historyItem.changedAt}`}>
                                                        {historyItem.status} on {new Date(historyItem.changedAt).toLocaleString()}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                        {canManageCases && (
                                            <div className="card-actions">
                                                <button className="btn btn-secondary" onClick={() => handleUpdateStatus(caseItem)}>
                                                    Update Status
                                                </button>
                                                {canDeleteCases && (
                                                    <button className="btn btn-danger" onClick={() => handleDeleteCase(caseItem._id)}>
                                                        Delete
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </article>
                                )
                            })}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default CasePage
