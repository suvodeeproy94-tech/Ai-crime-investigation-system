// This file shows the suspect management page
// This page lets police and admin create view edit delete and filter suspects
import { useEffect, useState } from 'react' // This line imports React hooks
import API from '../services/apiClient' // This line imports the shared API client
import Navbar from '../components/Navbar' // This line imports the top page bar
import Sidebar from '../components/Sidebar' // This line imports the left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component
import useAuth from '../hooks/useAuth' // This line imports current user data

// This object keeps the form empty by default
const emptyForm = {
    name: '', // This line stores suspect name
    age: '', // This line stores suspect age
    gender: 'other', // This line stores suspect gender
    lastSeenLocation: '', // This line stores last seen location
    status: 'unknown', // This line stores suspect status
    relatedCaseId: '' // This line stores one related case id
}

// This part renders the suspect management screen
function SuspectManagement() {
    const { user } = useAuth() // This line reads the logged in user
    const [suspects, setSuspects] = useState([]) // This line stores suspects
    const [cases, setCases] = useState([]) // This line stores case options
    const [form, setForm] = useState(emptyForm) // This line stores form values
    const [editId, setEditId] = useState('') // This line stores edited suspect id
    const [message, setMessage] = useState('') // This line stores success text
    const [error, setError] = useState('') // This line stores error text
    const [loading, setLoading] = useState(true) // This line stores loading state
    const [filters, setFilters] = useState({ q: '', status: '', gender: '', caseId: '', sortBy: 'createdAt', sortOrder: 'desc' }) // This line stores filters

    const canDelete = user?.role === 'admin' // This line allows delete only for admin

    // This function loads cases for the case dropdown
    const loadCases = async () => {
        try {
            const res = await API.get('/cases') // This line asks backend for cases
            setCases(res.data || []) // This line saves case options
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to load cases') // This line shows case loading error
        }
    }

    // This function loads suspects using current filters
    const loadSuspects = async () => {
        setLoading(true) // This line starts loading
        setError('') // This line clears old error

        try {
            const params = {} // This line prepares query params
            if (filters.q) params.q = filters.q // This line adds text search
            if (filters.status) params.status = filters.status // This line adds status filter
            if (filters.gender) params.gender = filters.gender // This line adds gender filter
            if (filters.caseId) params.caseId = filters.caseId // This line adds case filter
            if (filters.sortBy) params.sortBy = filters.sortBy // This line adds sort field
            if (filters.sortOrder) params.sortOrder = filters.sortOrder // This line adds sort order

            const res = await API.get('/suspects', { params }) // This line asks backend for suspects
            setSuspects(res.data || []) // This line saves suspect list
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to load suspects') // This line shows suspect loading error
        } finally {
            setLoading(false) // This line stops loading
        }
    }

    // This effect loads case choices when page opens
    useEffect(() => {
        loadCases() // This line starts case loading
    }, [])

    // This effect reloads suspects when filters change
    useEffect(() => {
        loadSuspects() // This line starts suspect loading
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.q, filters.status, filters.gender, filters.caseId, filters.sortBy, filters.sortOrder])

    // This function changes one form field
    const handleFormChange = (field, value) => {
        setForm((current) => ({ ...current, [field]: value })) // This line updates one form value
    }

    // This function changes one filter field
    const handleFilterChange = (field, value) => {
        setFilters((current) => ({ ...current, [field]: value })) // This line updates one filter value
    }

    // This function clears the form
    const resetForm = () => {
        setForm(emptyForm) // This line resets form values
        setEditId('') // This line leaves edit mode
    }

    // This function saves a new or edited suspect
    const handleSubmit = async (event) => {
        event.preventDefault() // This line stops page refresh
        setMessage('') // This line clears old success text
        setError('') // This line clears old error text

        if (!form.name || !form.age) {
            setError('Please enter suspect name and age') // This line shows required field error
            return // This line stops saving when data is missing
        }

        const payload = {
            name: form.name, // This line sends suspect name
            age: form.age, // This line sends suspect age
            gender: form.gender, // This line sends suspect gender
            lastSeenLocation: form.lastSeenLocation, // This line sends location
            status: form.status, // This line sends status
            relatedCases: form.relatedCaseId ? [form.relatedCaseId] : [] // This line sends selected case
        }

        try {
            if (editId) {
                await API.put(`/suspects/${editId}`, payload) // This line updates existing suspect
                setMessage('Suspect updated successfully') // This line shows update success
            } else {
                await API.post('/suspects', payload) // This line creates new suspect
                setMessage('Suspect created successfully') // This line shows create success
            }

            resetForm() // This line clears the form
            loadSuspects() // This line reloads suspects
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to save suspect') // This line shows save error
        }
    }

    // This function starts editing one suspect
    const startEdit = (suspect) => {
        setEditId(suspect._id) // This line stores edited suspect id
        setForm({
            name: suspect.name || '', // This line fills name
            age: suspect.age || '', // This line fills age
            gender: suspect.gender || 'other', // This line fills gender
            lastSeenLocation: suspect.lastSeenLocation || '', // This line fills location
            status: suspect.status || 'unknown', // This line fills status
            relatedCaseId: suspect.relatedCases?.[0]?._id || '' // This line fills related case
        })
    }

    // This function deletes one suspect
    const deleteSuspect = async (suspectId) => {
        const confirmed = window.confirm('Do you want to delete this suspect') // This line asks before delete
        if (!confirmed) return // This line stops delete when cancelled

        try {
            await API.delete(`/suspects/${suspectId}`) // This line deletes suspect
            setMessage('Suspect deleted successfully') // This line shows delete success
            loadSuspects() // This line reloads suspects
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to delete suspect') // This line shows delete error
        }
    }

    return (
        <div className="app-layout"> {/* This line renders app layout wrapper */}
            <Sidebar /> {/* This line renders left navigation menu */}
            <main className="main-panel"> {/* This line renders main content area */}
                <Navbar title="Suspect Management" /> {/* This line renders page title bar */}

                <section className="content-section"> {/* This line renders suspect page section */}
                    {/* This part shows page heading */}
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Profiles</p>
                            <h2>Suspects</h2>
                        </div>
                        <span className="count-pill">{suspects.length} total</span>
                    </div>

                    <form className="form-card" onSubmit={handleSubmit}> {/* This line renders create and edit suspect form */}
                        {/* This part shows the form title */}
                        <p className="eyebrow">{editId ? 'Edit Suspect' : 'Create Suspect'}</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Name
                                <input value={form.name} onChange={(event) => handleFormChange('name', event.target.value)} placeholder="Suspect name" />
                            </label>
                            <label>
                                Age
                                <input type="number" min="1" value={form.age} onChange={(event) => handleFormChange('age', event.target.value)} placeholder="Age" />
                            </label>
                            <label>
                                Gender
                                <select value={form.gender} onChange={(event) => handleFormChange('gender', event.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                            <label>
                                Status
                                <select value={form.status} onChange={(event) => handleFormChange('status', event.target.value)}>
                                    <option value="unknown">Unknown</option>
                                    <option value="wanted">Wanted</option>
                                    <option value="cleared">Cleared</option>
                                </select>
                            </label>
                            <label>
                                Last Seen Location
                                <input value={form.lastSeenLocation} onChange={(event) => handleFormChange('lastSeenLocation', event.target.value)} placeholder="Last seen location" />
                            </label>
                            <label>
                                Related Case
                                <select value={form.relatedCaseId} onChange={(event) => handleFormChange('relatedCaseId', event.target.value)}>
                                    <option value="">No case selected</option>
                                    {cases.map((caseItem) => (
                                        <option key={caseItem._id} value={caseItem._id}>{caseItem.title}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="card-actions"> {/* This line renders form action buttons */}
                            <button className="btn btn-primary" type="submit">{editId ? 'Update Suspect' : 'Create Suspect'}</button> {/* This line saves suspect data */}
                            {editId && <button className="btn btn-secondary" type="button" onClick={resetForm}>Cancel Edit</button>} {/* This line cancels edit mode */}
                        </div>
                    </form>

                    <section className="form-card case-filter-card">
                        {/* This part shows search filters */}
                        <p className="eyebrow">Advanced Search</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Search Text
                                <input value={filters.q} onChange={(event) => handleFilterChange('q', event.target.value)} placeholder="Search name or location" />
                            </label>
                            <label>
                                Status
                                <select value={filters.status} onChange={(event) => handleFilterChange('status', event.target.value)}>
                                    <option value="">All statuses</option>
                                    <option value="unknown">Unknown</option>
                                    <option value="wanted">Wanted</option>
                                    <option value="cleared">Cleared</option>
                                </select>
                            </label>
                            <label>
                                Gender
                                <select value={filters.gender} onChange={(event) => handleFilterChange('gender', event.target.value)}>
                                    <option value="">All genders</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                            <label>
                                Case
                                <select value={filters.caseId} onChange={(event) => handleFilterChange('caseId', event.target.value)}>
                                    <option value="">All cases</option>
                                    {cases.map((caseItem) => (
                                        <option key={caseItem._id} value={caseItem._id}>{caseItem.title}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Sort By
                                <select value={filters.sortBy} onChange={(event) => handleFilterChange('sortBy', event.target.value)}>
                                    <option value="createdAt">Created Date</option>
                                    <option value="name">Name</option>
                                    <option value="status">Status</option>
                                    <option value="age">Age</option>
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
                    </section>

                    {message && <div className="analysis-result"><p>{message}</p></div>} {/* This line shows success message */}
                    {error && <div className="analysis-error"><p>{error}</p></div>} {/* This line shows error message */}
                    {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}

                    {!loading && suspects.length === 0 && <div className="empty-state">No suspects found</div>} {/* This line shows empty state */}

                    {!loading && suspects.length > 0 && (
                        <div className="fir-grid"> {/* This line renders suspect cards grid */}
                            {suspects.map((suspect) => (
                                <article key={suspect._id} className="fir-card"> {/* This line renders one suspect card */}
                                    <div className="fir-card-header"> {/* This line renders suspect card header */}
                                        <div>
                                            <p className="eyebrow">Suspect Profile</p>
                                            <h3>{suspect.name}</h3>
                                        </div>
                                        <span className="badge">{suspect.status}</span>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Age</span>
                                        <strong>{suspect.age}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Gender</span>
                                        <strong>{suspect.gender}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Last Seen</span>
                                        <strong>{suspect.lastSeenLocation || 'Not added'}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Related Case</span>
                                        <strong>{suspect.relatedCases?.map((caseItem) => caseItem.title).join(', ') || 'No case linked'}</strong>
                                    </div>
                                    <div className="card-actions"> {/* This line renders suspect card action buttons */}
                                        <button className="btn btn-secondary" type="button" onClick={() => startEdit(suspect)}>Edit</button> {/* This line starts edit mode */}
                                        {canDelete && <button className="btn btn-danger" type="button" onClick={() => deleteSuspect(suspect._id)}>Delete</button>} {/* This line deletes suspect */}
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

export default SuspectManagement // This line exports the suspect management page
