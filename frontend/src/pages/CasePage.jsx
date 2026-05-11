// This file shows the case management page.
// This page supports case creation, search, filters, sorting, update, and delete.
import { useEffect, useMemo, useState } from 'react' // This line imports React hooks for state, effects, and memo values.
import API from '../services/apiClient' // This line imports the shared API client for backend requests.
import Sidebar from '../components/Sidebar' // This line imports the left navigation panel.
import Navbar from '../components/Navbar' // This line imports the top page bar.
import Loader from '../components/Loader' // This line imports the shared loading logo component.
import useAuth from '../hooks/useAuth' // This line imports auth data to read the current user role.

// This list keeps valid case status values in one place
const allowedCaseStatuses = ['open', 'under_review', 'closed'] // This line stores allowed case statuses

// This part renders the full case management screen.
function CasePage() {
  const { user } = useAuth() // This line reads current user data for role based controls.

  // This state keeps the full case list returned by the backend.
  const [cases, setCases] = useState([]) // This line stores all fetched case records.
  // This state keeps loading status while list data is being fetched.
  const [loading, setLoading] = useState(true) // This line keeps loading state until first API call finishes.
  // This state keeps human readable messages for success feedback.
  const [message, setMessage] = useState('') // This line stores short success messages.
  // This state keeps error messages shown to the user.
  const [error, setError] = useState('') // This line stores short error messages.

  // This state keeps create form values for new case creation.
  const [newCase, setNewCase] = useState({ title: '', description: '', location: '', priority: 'medium' }) // This line stores create form values.

  // This state keeps all filter and sorting inputs for advanced search.
  const [filters, setFilters] = useState({
    q: '', // This field stores free text search query.
    status: '', // This field stores selected status filter.
    priority: '', // This field stores selected priority filter.
    fromDate: '', // This field stores start date filter.
    toDate: '', // This field stores end date filter.
    sortBy: 'createdAt', // This field stores selected sort field.
    sortOrder: 'desc' // This field stores selected sort direction.
  })

  // This derived value tells whether current role can create or edit cases.
  const canManageCases = ['police', 'admin'].includes(user?.role) // This line allows create and edit only for police and admin.
  // This derived value tells whether current role can delete cases.
  const canDeleteCases = user?.role === 'admin' // This line allows delete only for admin.

  // This helper loads case records from the backend using current filter values.
  const fetchCases = async () => {
    setLoading(true) // Start loading indicator before API call
    setError('') // Clear previous error before API call

    try {
      const params = {} // Build query params object only with non-empty fields
      if (filters.q) params.q = filters.q // Add text query when entered
      if (filters.status) params.status = filters.status // Add status filter when selected
      if (filters.priority) params.priority = filters.priority // Add priority filter when selected
      if (filters.fromDate) params.fromDate = filters.fromDate // Add from date when selected
      if (filters.toDate) params.toDate = filters.toDate // Add to date when selected
      if (filters.sortBy) params.sortBy = filters.sortBy // Add sort field
      if (filters.sortOrder) params.sortOrder = filters.sortOrder // Add sort direction

      const res = await API.get('/cases', { params }) // Request filtered/sorted case list from backend
      setCases(res.data) // Save returned case list to state
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to load cases.') // Show backend error or fallback message
    } finally {
      setLoading(false) // Stop loading state after request finishes
    }
  }

  // This effect loads cases on first render and when any filter field changes.
  useEffect(() => {
    fetchCases() // Load data using latest filters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.q, filters.status, filters.priority, filters.fromDate, filters.toDate, filters.sortBy, filters.sortOrder])

  // This helper updates one filter key with a new value.
  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value })) // Merge changed field into current filter state
  }

  // This helper resets all filters back to their default values.
  const resetFilters = () => {
    setFilters({
      q: '', // reset text query
      status: '', // reset status
      priority: '', // reset priority
      fromDate: '', // reset from date
      toDate: '', // reset to date
      sortBy: 'createdAt', // reset sort field
      sortOrder: 'desc' // reset sort direction
    })
  }

  // This helper creates a new case from form values.
  const handleCreateCase = async (event) => {
    event.preventDefault() // Stop browser refresh on form submit
    setMessage('') // Clear previous success message
    setError('') // Clear previous error message

    // Basic required field validation to avoid incomplete submissions.
    if (!newCase.title || !newCase.description || !newCase.location) {
      setError('Please fill title, description, and location.') // Show validation error
      return // Stop submit when required fields are missing
    }

    try {
      await API.post('/cases', newCase) // Send case creation request to backend
      setMessage('Case created successfully.') // Show success message
      setNewCase({ title: '', description: '', location: '', priority: 'medium' }) // Reset form after successful creation
      fetchCases() // Reload list to include newly created case
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to create case.') // Show backend or fallback error message
    }
  }

  // This helper updates a case status quickly through a small prompt.
  const handleUpdateStatus = async (caseItem) => {
    const nextStatus = prompt('Enter status: open, under_review, or closed', caseItem.status || 'open') // Ask user for new status
    if (!nextStatus) return // Stop when user cancels prompt
    if (!allowedCaseStatuses.includes(nextStatus)) {
      setError('Use only open under_review or closed status') // Show simple status error
      return // Stop when status is invalid
    }

    try {
      await API.put(`/cases/${caseItem._id}`, { status: nextStatus }) // Send status update request
      setMessage('Case updated successfully.') // Show success feedback
      setError('') // Clear old errors on success
      fetchCases() // Reload list to reflect updated status
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to update case.') // Show backend or fallback error
    }
  }

  // This helper deletes a case after a simple confirmation.
  const handleDeleteCase = async (caseId) => {
    const isConfirmed = window.confirm('Do you want to delete this case?') // Ask for deletion confirmation
    if (!isConfirmed) return // Stop delete when not confirmed

    try {
      await API.delete(`/cases/${caseId}`) // Send delete request to backend
      setMessage('Case deleted successfully.') // Show success message
      setError('') // Clear previous errors
      fetchCases() // Reload list after delete
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to delete case.') // Show backend or fallback error
    }
  }

  // This derived value shows status totals for small analytics badges on this page.
  const statusSummary = useMemo(() => {
    const result = { open: 0, under_review: 0, closed: 0 } // Initialize all status counters
    cases.forEach((item) => {
      if (result[item.status] !== undefined) result[item.status] += 1 // Increase count when status key exists
    })
    return result // Return prepared status summary object
  }, [cases])

  // This helper keeps status badge styling easy to read.
  const getStatusClass = (status) => {
    if (status === 'under_review') return 'badge badge-investigating' // Blue badge for under review
    if (status === 'closed') return 'badge badge-closed' // Green badge for closed
    return 'badge' // Default badge for open
  }

  return (
    <div className="app-layout"> {/* This line renders app layout wrapper */}
      <Sidebar /> {/* This line renders left navigation menu */}
      <main className="main-panel"> {/* This line renders main content area */}
        <Navbar title="Case Management" /> {/* This line renders page title bar */}
        <section className="content-section"> {/* This line renders case page section */}
          <div className="section-header"> {/* This line renders section heading row */}
            <div>
              <p className="eyebrow">Investigations</p>
              <h2>Cases</h2>
            </div>
            <span className="count-pill">{cases.length} total</span>
          </div>

          <section className="dashboard-summary"> {/* This line renders top summary cards section */}
            <article className="summary-card"> {/* This line renders open cases card */}
              <p>Open Cases</p>
              <strong>{statusSummary.open}</strong>
            </article>
            <article className="summary-card"> {/* This line renders under review card */}
              <p>Under Review</p>
              <strong>{statusSummary.under_review}</strong>
            </article>
            <article className="summary-card"> {/* This line renders closed cases card */}
              <p>Closed Cases</p>
              <strong>{statusSummary.closed}</strong>
            </article>
          </section>

          <section className="form-card case-filter-card"> {/* This line renders filter panel */}
            <p className="eyebrow">Advanced Search</p>
            <div className="filter-row case-filter-grid">
              <label>
                Search Text
                <input value={filters.q} onChange={(e) => handleFilterChange('q', e.target.value)} placeholder="Search title, description, location" />
              </label>
              <label>
                Status
                <select value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)}>
                  <option value="">All statuses</option>
                  <option value="open">Open</option>
                  <option value="under_review">Under Review</option>
                  <option value="closed">Closed</option>
                </select>
              </label>
              <label>
                Priority
                <select value={filters.priority} onChange={(e) => handleFilterChange('priority', e.target.value)}>
                  <option value="">All priorities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label>
                From Date
                <input type="date" value={filters.fromDate} onChange={(e) => handleFilterChange('fromDate', e.target.value)} />
              </label>
              <label>
                To Date
                <input type="date" value={filters.toDate} onChange={(e) => handleFilterChange('toDate', e.target.value)} />
              </label>
              <label>
                Sort By
                <select value={filters.sortBy} onChange={(e) => handleFilterChange('sortBy', e.target.value)}>
                  <option value="createdAt">Created Date</option>
                  <option value="status">Status</option>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </label>
              <label>
                Sort Order
                <select value={filters.sortOrder} onChange={(e) => handleFilterChange('sortOrder', e.target.value)}>
                  <option value="desc">Newest First</option>
                  <option value="asc">Oldest First</option>
                </select>
              </label>
            </div>
            <div className="card-actions"> {/* This line renders filter action buttons */}
              <button className="btn btn-secondary" type="button" onClick={resetFilters}>Reset Filters</button>
            </div>
          </section>

          {canManageCases && (
            <form className="form-card" onSubmit={handleCreateCase}> {/* This line renders create case form */}
              <p className="eyebrow">Create New Case</p>
              <label>
                Title
                <input value={newCase.title} onChange={(e) => setNewCase((current) => ({ ...current, title: e.target.value }))} placeholder="Case title" />
              </label>
              <label>
                Description
                <textarea value={newCase.description} onChange={(e) => setNewCase((current) => ({ ...current, description: e.target.value }))} placeholder="Case description" />
              </label>
              <label>
                Location
                <input value={newCase.location} onChange={(e) => setNewCase((current) => ({ ...current, location: e.target.value }))} placeholder="Incident location" />
              </label>
              <label>
                Priority
                <select value={newCase.priority} onChange={(e) => setNewCase((current) => ({ ...current, priority: e.target.value }))}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <button className="btn btn-primary" type="submit">Create Case</button>
            </form>
          )}

          {message && <div className="analysis-result"><p>{message}</p></div>} {/* This line shows success message */}
          {error && <div className="analysis-error"><p>{error}</p></div>} {/* This line shows error message */}
          {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}

          {!loading && cases.length === 0 && (
            <div className="empty-state">
              <h3>No case records found</h3>
              <p>Try adjusting filters or create a new case.</p>
            </div>
          )}

          {!loading && cases.length > 0 && (
            <div className="fir-grid"> {/* This line renders case cards grid */}
              {cases.map((caseItem) => (
                <article key={caseItem._id} className="fir-card"> {/* This line renders one case card */}
                  <div className="fir-card-header"> {/* This line renders case card header */}
                    <h3>{caseItem.title}</h3>
                    <span className={getStatusClass(caseItem.status)}>{caseItem.status}</span>
                  </div>
                  <p className="fir-description">{caseItem.description}</p>
                  <div className="fir-meta">
                    <span>Location</span>
                    <strong>{caseItem.location}</strong>
                  </div>
                  <div className="fir-meta">
                    <span>Priority</span>
                    <strong>{caseItem.priority}</strong>
                  </div>
                  <div className="fir-meta">
                    <span>Created</span>
                    <strong>{new Date(caseItem.createdAt).toLocaleString()}</strong>
                  </div>
                  {caseItem.statusHistory?.length > 0 && (
                    <div className="status-history">
                      <span>Status History</span>
                      {caseItem.statusHistory.map((historyItem) => (
                        <p key={historyItem._id || `${historyItem.status}-${historyItem.changedAt}`}>
                          {historyItem.status} on {new Date(historyItem.changedAt).toLocaleString()}
                        </p>
                      ))}
                    </div>
                  )}
                  {canManageCases && (
                    <div className="card-actions"> {/* This line renders case action buttons */}
                      <button className="btn btn-secondary" onClick={() => handleUpdateStatus(caseItem)}>Update Status</button>
                      {canDeleteCases && <button className="btn btn-danger" onClick={() => handleDeleteCase(caseItem._id)}>Delete</button>}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default CasePage // Export the case page component for route usage
