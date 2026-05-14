// This file shows the suspect management page.
// It lets police and admin create, view, edit, delete, and filter suspects.
import { useEffect, useState } from 'react' // This line imports React hooks.
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports the shared API client.
import Navbar from '../components/Navbar' // This line imports the top page bar.
import Sidebar from '../components/Sidebar' // This line imports the left menu.
import Loader from '../components/Loader' // This line imports the shared loading logo component.
import useAuth from '../hooks/useAuth' // This line imports current user data.

// This object keeps the form empty by default.
const emptyForm = {
    name: '',
    age: '',
    gender: 'other',
    lastSeenLocation: '',
    status: 'unknown',
    relatedCaseId: ''
}

// This object keeps filter values empty by default.
const emptyFilters = {
    q: '',
    status: '',
    gender: '',
    caseId: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
}

// This helper builds query params from filter values.
const buildSuspectParams = (filters) => {
    const params = {}

    if (filters.q) {
        params.q = filters.q
    }

    if (filters.status) {
        params.status = filters.status
    }

    if (filters.gender) {
        params.gender = filters.gender
    }

    if (filters.caseId) {
        params.caseId = filters.caseId
    }

    if (filters.sortBy) {
        params.sortBy = filters.sortBy
    }

    if (filters.sortOrder) {
        params.sortOrder = filters.sortOrder
    }

    return params
}

// This helper returns related case names in simple text.
const getRelatedCaseText = (suspect) => {
    if (!suspect.relatedCases || suspect.relatedCases.length === 0) {
        return 'No case linked'
    }

    const caseNames = []

    for (const caseItem of suspect.relatedCases) {
        if (caseItem && caseItem.title) {
            caseNames.push(caseItem.title)
        }
    }

    if (caseNames.length === 0) {
        return 'No case linked'
    }

    return caseNames.join(', ')
}

// This helper returns the first related case id safely.
const getFirstRelatedCaseId = (suspect) => {
    if (suspect.relatedCases && suspect.relatedCases.length > 0) {
        const firstCase = suspect.relatedCases[0]

        if (firstCase && firstCase._id) {
            return firstCase._id
        }
    }

    return ''
}

// This part renders the suspect management screen.
function SuspectManagement() {
    const { user } = useAuth() // This line reads the logged in user.
    let userRole = '' // This line stores user role safely.

    if (user && user.role) {
        userRole = user.role
    }

    const [suspects, setSuspects] = useState([]) // This line stores suspects.
    const [cases, setCases] = useState([]) // This line stores case options.
    const [form, setForm] = useState(emptyForm) // This line stores form values.
    const [editId, setEditId] = useState('') // This line stores edited suspect id.
    const [message, setMessage] = useState('') // This line stores success text.
    const [error, setError] = useState('') // This line stores error text.
    const [loading, setLoading] = useState(true) // This line stores loading state.
    const [filters, setFilters] = useState(emptyFilters) // This line stores filters.

    const canDelete = userRole === 'admin' // This line allows delete only for admin.

    // This line stores form title text
    let formTitle = 'Create Suspect'

    // This line stores submit button text
    let submitButtonText = 'Create Suspect'

    if (editId) {
        formTitle = 'Edit Suspect'
        submitButtonText = 'Update Suspect'
    }

    // This function loads cases for the case dropdown.
    const loadCases = async () => {
        try {
            const response = await API.get('/cases')
            setCases(response.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load cases'))
        }
    }

    // This function loads suspects using current filters.
    const loadSuspects = async () => {
        setLoading(true)
        setError('')

        try {
            const params = buildSuspectParams(filters)
            const response = await API.get('/suspects', { params })
            setSuspects(response.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load suspects'))
        } finally {
            setLoading(false)
        }
    }

    // This effect loads case choices when page opens.
    useEffect(() => {
        loadCases()
    }, [])

    // This effect reloads suspects when filters change.
    useEffect(() => {
        loadSuspects()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.q, filters.status, filters.gender, filters.caseId, filters.sortBy, filters.sortOrder])

    // This function changes one form field.
    const handleFormChange = (field, value) => {
        const updatedForm = {
            name: form.name,
            age: form.age,
            gender: form.gender,
            lastSeenLocation: form.lastSeenLocation,
            status: form.status,
            relatedCaseId: form.relatedCaseId
        }

        updatedForm[field] = value
        setForm(updatedForm)
    }

    // This function changes one filter field.
    const handleFilterChange = (field, value) => {
        const updatedFilters = {
            q: filters.q,
            status: filters.status,
            gender: filters.gender,
            caseId: filters.caseId,
            sortBy: filters.sortBy,
            sortOrder: filters.sortOrder
        }

        updatedFilters[field] = value
        setFilters(updatedFilters)
    }

    // This function clears the form.
    const resetForm = () => {
        setForm(emptyForm)
        setEditId('')
    }

    // This function saves a new or edited suspect.
    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage('')
        setError('')

        if (!form.name || !form.age) {
            setError('Please enter suspect name and age')
            return
        }

        const relatedCases = []
        if (form.relatedCaseId) {
            relatedCases.push(form.relatedCaseId)
        }

        const payload = {
            name: form.name,
            age: form.age,
            gender: form.gender,
            lastSeenLocation: form.lastSeenLocation,
            status: form.status,
            relatedCases
        }

        try {
            if (editId) {
                await API.put(`/suspects/${editId}`, payload)
                setMessage('Suspect updated successfully')
            } else {
                await API.post('/suspects', payload)
                setMessage('Suspect created successfully')
            }

            resetForm()
            loadSuspects()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to save suspect'))
        }
    }

    // This function starts editing one suspect.
    const startEdit = (suspect) => {
        setEditId(suspect._id)
        setForm({
            name: suspect.name || '',
            age: suspect.age || '',
            gender: suspect.gender || 'other',
            lastSeenLocation: suspect.lastSeenLocation || '',
            status: suspect.status || 'unknown',
            relatedCaseId: getFirstRelatedCaseId(suspect)
        })
    }

    // This function deletes one suspect.
    const deleteSuspect = async (suspectId) => {
        const confirmed = window.confirm('Do you want to delete this suspect')

        if (!confirmed) {
            return
        }

        try {
            await API.delete(`/suspects/${suspectId}`)
            setMessage('Suspect deleted successfully')
            loadSuspects()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to delete suspect'))
        }
    }

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Suspect Management" />

                <section className="content-section">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Profiles</p>
                            <h2>Suspects</h2>
                        </div>
                        <span className="count-pill">{suspects.length} total</span>
                    </div>

                    <form className="form-card" onSubmit={handleSubmit}>
                        <p className="eyebrow">{formTitle}</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Name
                                <input
                                    value={form.name}
                                    onChange={(event) => handleFormChange('name', event.target.value)}
                                    placeholder="Suspect name"
                                />
                            </label>
                            <label>
                                Age
                                <input
                                    type="number"
                                    min="1"
                                    value={form.age}
                                    onChange={(event) => handleFormChange('age', event.target.value)}
                                    placeholder="Age"
                                />
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
                                <input
                                    value={form.lastSeenLocation}
                                    onChange={(event) => handleFormChange('lastSeenLocation', event.target.value)}
                                    placeholder="Last seen location"
                                />
                            </label>
                            <label>
                                Related Case
                                <select
                                    value={form.relatedCaseId}
                                    onChange={(event) => handleFormChange('relatedCaseId', event.target.value)}
                                >
                                    <option value="">No case selected</option>
                                    {cases.map((caseItem) => (
                                        <option key={caseItem._id} value={caseItem._id}>{caseItem.title}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary" type="submit">
                                {submitButtonText}
                            </button>
                            {editId && (
                                <button className="btn btn-secondary" type="button" onClick={resetForm}>
                                    Cancel Edit
                                </button>
                            )}
                        </div>
                    </form>

                    <section className="form-card case-filter-card">
                        <p className="eyebrow">Advanced Search</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Search Text
                                <input
                                    value={filters.q}
                                    onChange={(event) => handleFilterChange('q', event.target.value)}
                                    placeholder="Search name or location"
                                />
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

                    {message && <div className="analysis-result"><p>{message}</p></div>}
                    {error && <div className="analysis-error"><p>{error}</p></div>}
                    {loading && <div className="empty-state"><Loader /></div>}

                    {!loading && suspects.length === 0 && <div className="empty-state">No suspects found</div>}

                    {!loading && suspects.length > 0 && (
                        <div className="fir-grid">
                            {suspects.map((suspect) => (
                                <article key={suspect._id} className="fir-card">
                                    <div className="fir-card-header">
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
                                        <strong>{getRelatedCaseText(suspect)}</strong>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-secondary" type="button" onClick={() => startEdit(suspect)}>
                                            Edit
                                        </button>
                                        {canDelete && (
                                            <button className="btn btn-danger" type="button" onClick={() => deleteSuspect(suspect._id)}>
                                                Delete
                                            </button>
                                        )}
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

export default SuspectManagement
