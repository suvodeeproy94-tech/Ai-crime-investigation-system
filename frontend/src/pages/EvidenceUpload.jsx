// This file shows the evidence management page.
// It lets police and admin upload, view, edit, delete, and filter evidence.
import { useEffect, useState } from 'react' // This line imports React hooks.
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports the shared API client.
import Navbar from '../components/Navbar' // This line imports the top page bar.
import Sidebar from '../components/Sidebar' // This line imports the left menu.
import Loader from '../components/Loader' // This line imports the shared loading logo component.
import useAuth from '../hooks/useAuth' // This line imports current user data.

// This object keeps the evidence form empty by default.
const emptyForm = {
    title: '',
    description: '',
    caseId: '',
    suspectId: '',
    status: 'collected'
}

// This object keeps evidence filters empty by default.
const emptyFilters = {
    q: '',
    status: '',
    caseId: '',
    suspectId: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
}

// This helper builds query params from filter values.
const buildEvidenceParams = (filters) => {
    const params = {}

    if (filters.q) {
        params.q = filters.q
    }

    if (filters.status) {
        params.status = filters.status
    }

    if (filters.caseId) {
        params.caseId = filters.caseId
    }

    if (filters.suspectId) {
        params.suspectId = filters.suspectId
    }

    if (filters.sortBy) {
        params.sortBy = filters.sortBy
    }

    if (filters.sortOrder) {
        params.sortOrder = filters.sortOrder
    }

    return params
}

// This helper returns a safe case title.
const getCaseTitle = (item) => {
    if (item.caseId && item.caseId.title) {
        return item.caseId.title
    }

    return 'No case found'
}

// This helper returns a safe suspect name.
const getSuspectName = (item) => {
    if (item.suspectId && item.suspectId.name) {
        return item.suspectId.name
    }

    return 'No suspect linked'
}

// This helper returns a safe uploader name.
const getUploaderName = (item) => {
    if (item.uploadedBy && item.uploadedBy.name) {
        return item.uploadedBy.name
    }

    return 'Unknown'
}

// This part renders the evidence management screen.
function EvidenceUpload() {
    const { user } = useAuth() // This line reads current user data.
    let userRole = '' // This line stores user role safely.
    let userId = '' // This line stores user id safely.

    if (user && user.role) {
        userRole = user.role
    }

    if (user && user.id) {
        userId = user.id
    }

    const [form, setForm] = useState(emptyForm) // This line stores form values.
    const [file, setFile] = useState(null) // This line stores selected file.
    const [fileKey, setFileKey] = useState(0) // This line helps clear file input.
    const [cases, setCases] = useState([]) // This line stores cases for dropdown.
    const [suspects, setSuspects] = useState([]) // This line stores suspects for dropdown.
    const [evidence, setEvidence] = useState([]) // This line stores evidence list.
    const [editId, setEditId] = useState('') // This line stores edited evidence id.
    const [message, setMessage] = useState('') // This line stores success text.
    const [error, setError] = useState('') // This line stores error text.
    const [loading, setLoading] = useState(true) // This line stores loading state.
    const [saving, setSaving] = useState(false) // This line stores saving state.
    const [filters, setFilters] = useState(emptyFilters) // This line stores filters.

    const canDelete = userRole === 'admin' // This line allows delete only for admin.

    // This function checks if the logged in user can edit one evidence item.
    const canEditEvidence = (item) => {
        if (userRole === 'admin') {
            return true
        }

        if (item.uploadedBy && item.uploadedBy._id === userId) {
            return true
        }

        return false
    }

    // This function loads case and suspect dropdown options.
    const loadOptions = async () => {
        try {
            const casesResponse = await API.get('/cases')
            const suspectsResponse = await API.get('/suspects')

            setCases(casesResponse.data || [])
            setSuspects(suspectsResponse.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load form options'))
        }
    }

    // This function loads evidence using current filters.
    const loadEvidence = async () => {
        setLoading(true)
        setError('')

        try {
            const params = buildEvidenceParams(filters)
            const response = await API.get('/evidence', { params })
            setEvidence(response.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load evidence'))
        } finally {
            setLoading(false)
        }
    }

    // This effect loads dropdown options when page opens.
    useEffect(() => {
        loadOptions()
    }, [])

    // This effect reloads evidence when filters change.
    useEffect(() => {
        loadEvidence()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.q, filters.status, filters.caseId, filters.suspectId, filters.sortBy, filters.sortOrder])

    // This function changes one form field.
    const handleFormChange = (field, value) => {
        const updatedForm = {
            title: form.title,
            description: form.description,
            caseId: form.caseId,
            suspectId: form.suspectId,
            status: form.status
        }

        updatedForm[field] = value
        setForm(updatedForm)
    }

    // This function changes one filter field.
    const handleFilterChange = (field, value) => {
        const updatedFilters = {
            q: filters.q,
            status: filters.status,
            caseId: filters.caseId,
            suspectId: filters.suspectId,
            sortBy: filters.sortBy,
            sortOrder: filters.sortOrder
        }

        updatedFilters[field] = value
        setFilters(updatedFilters)
    }

    // This function clears form values.
    const resetForm = () => {
        setForm(emptyForm)
        setFile(null)
        setEditId('')
        setFileKey(fileKey + 1)
    }

    // This function saves new or edited evidence.
    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage('')
        setError('')

        if (!form.title || !form.caseId) {
            setError('Please enter title and select case')
            return
        }

        if (!editId && !file) {
            setError('Please select an evidence file')
            return
        }

        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('caseId', form.caseId)
        formData.append('status', form.status)

        if (form.suspectId) {
            formData.append('suspectId', form.suspectId)
        }

        if (file) {
            formData.append('file', file)
        }

        setSaving(true)

        try {
            if (editId) {
                await API.put(`/evidence/${editId}`, formData)
                setMessage('Evidence updated successfully')
            } else {
                await API.post('/evidence', formData)
                setMessage('Evidence uploaded successfully')
            }

            resetForm()
            loadEvidence()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to save evidence'))
        } finally {
            setSaving(false)
        }
    }

    // This function starts editing one evidence item.
    const startEdit = (item) => {
        let caseId = ''
        let suspectId = ''

        if (item.caseId && item.caseId._id) {
            caseId = item.caseId._id
        }

        if (item.suspectId && item.suspectId._id) {
            suspectId = item.suspectId._id
        }

        setEditId(item._id)
        setForm({
            title: item.title || '',
            description: item.description || '',
            caseId,
            suspectId,
            status: item.status || 'collected'
        })
        setFile(null)
        setFileKey(fileKey + 1)
    }

    // This function stores the selected upload file.
    const handleFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0])
        }
    }

    // This function deletes one evidence item.
    const deleteEvidence = async (evidenceId) => {
        const confirmed = window.confirm('Do you want to delete this evidence')

        if (!confirmed) {
            return
        }

        try {
            await API.delete(`/evidence/${evidenceId}`)
            setMessage('Evidence deleted successfully')
            loadEvidence()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to delete evidence'))
        }
    }

    // This line keeps the save button text easy to read.
    let saveButtonText = 'Upload Evidence'
    let formTitle = 'Upload Evidence'

    if (saving) {
        saveButtonText = 'Saving'
    } else if (editId) {
        saveButtonText = 'Update Evidence'
        formTitle = 'Edit Evidence'
    }

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Evidence Management" />

                <section className="content-section">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Investigation Files</p>
                            <h2>Evidence</h2>
                        </div>
                        <span className="count-pill">{evidence.length} total</span>
                    </div>

                    <form className="form-card" onSubmit={handleSubmit}>
                        <p className="eyebrow">{formTitle}</p>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Title
                                <input
                                    value={form.title}
                                    onChange={(event) => handleFormChange('title', event.target.value)}
                                    placeholder="Evidence title"
                                />
                            </label>
                            <label>
                                Status
                                <select value={form.status} onChange={(event) => handleFormChange('status', event.target.value)}>
                                    <option value="collected">Collected</option>
                                    <option value="verified">Verified</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </label>
                            <label>
                                Case
                                <select value={form.caseId} onChange={(event) => handleFormChange('caseId', event.target.value)}>
                                    <option value="">Select case</option>
                                    {cases.map((caseItem) => (
                                        <option key={caseItem._id} value={caseItem._id}>{caseItem.title}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Suspect
                                <select value={form.suspectId} onChange={(event) => handleFormChange('suspectId', event.target.value)}>
                                    <option value="">No suspect selected</option>
                                    {suspects.map((suspect) => (
                                        <option key={suspect._id} value={suspect._id}>{suspect.name}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                File
                                <input key={fileKey} type="file" onChange={handleFileChange} accept="image/*,application/pdf,video/*" />
                            </label>
                        </div>
                        <label>
                            Description
                            <textarea
                                value={form.description}
                                onChange={(event) => handleFormChange('description', event.target.value)}
                                placeholder="Describe the evidence"
                            />
                        </label>
                        <div className="card-actions">
                            <button className="btn btn-primary" type="submit" disabled={saving}>
                                {saveButtonText}
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
                                    placeholder="Search title or description"
                                />
                            </label>
                            <label>
                                Status
                                <select value={filters.status} onChange={(event) => handleFilterChange('status', event.target.value)}>
                                    <option value="">All statuses</option>
                                    <option value="collected">Collected</option>
                                    <option value="verified">Verified</option>
                                    <option value="archived">Archived</option>
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
                                Suspect
                                <select value={filters.suspectId} onChange={(event) => handleFilterChange('suspectId', event.target.value)}>
                                    <option value="">All suspects</option>
                                    {suspects.map((suspect) => (
                                        <option key={suspect._id} value={suspect._id}>{suspect.name}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Sort By
                                <select value={filters.sortBy} onChange={(event) => handleFilterChange('sortBy', event.target.value)}>
                                    <option value="createdAt">Created Date</option>
                                    <option value="title">Title</option>
                                    <option value="status">Status</option>
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
                    {!loading && evidence.length === 0 && <div className="empty-state">No evidence found</div>}

                    {!loading && evidence.length > 0 && (
                        <div className="fir-grid">
                            {evidence.map((item) => (
                                <article key={item._id} className="fir-card">
                                    <div className="fir-card-header">
                                        <div>
                                            <p className="eyebrow">Evidence Item</p>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <span className="badge">{item.status}</span>
                                    </div>
                                    <p className="fir-description">{item.description || 'No description added'}</p>
                                    <div className="fir-meta">
                                        <span>Case</span>
                                        <strong>{getCaseTitle(item)}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Suspect</span>
                                        <strong>{getSuspectName(item)}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Uploaded By</span>
                                        <strong>{getUploaderName(item)}</strong>
                                    </div>
                                    {item.fileUrl && (
                                        <a
                                            className="btn btn-secondary evidence-file-link"
                                            href={item.fileUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Open File
                                        </a>
                                    )}
                                    <div className="card-actions">
                                        {canEditEvidence(item) && (
                                            <button className="btn btn-secondary" type="button" onClick={() => startEdit(item)}>
                                                Edit
                                            </button>
                                        )}
                                        {canDelete && (
                                            <button className="btn btn-danger" type="button" onClick={() => deleteEvidence(item._id)}>
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

export default EvidenceUpload
