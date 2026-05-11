// This file shows the evidence management page
// This page lets police and admin upload view edit delete and filter evidence
import { useEffect, useState } from 'react' // This line imports React hooks
import API from '../services/apiClient' // This line imports the shared API client
import Navbar from '../components/Navbar' // This line imports the top page bar
import Sidebar from '../components/Sidebar' // This line imports the left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component
import useAuth from '../hooks/useAuth' // This line imports current user data

// This object keeps the evidence form empty by default
const emptyForm = {
  title: '', // This line stores evidence title
  description: '', // This line stores evidence description
  caseId: '', // This line stores selected case
  suspectId: '', // This line stores selected suspect
  status: 'collected' // This line stores evidence status
}

// This part renders the evidence management screen
function EvidenceUpload() {
  const { user } = useAuth() // This line reads current user data
  const [form, setForm] = useState(emptyForm) // This line stores form values
  const [file, setFile] = useState(null) // This line stores selected file
  const [fileKey, setFileKey] = useState(0) // This line helps clear file input
  const [cases, setCases] = useState([]) // This line stores cases for dropdown
  const [suspects, setSuspects] = useState([]) // This line stores suspects for dropdown
  const [evidence, setEvidence] = useState([]) // This line stores evidence list
  const [editId, setEditId] = useState('') // This line stores edited evidence id
  const [message, setMessage] = useState('') // This line stores success text
  const [error, setError] = useState('') // This line stores error text
  const [loading, setLoading] = useState(true) // This line stores loading state
  const [saving, setSaving] = useState(false) // This line stores saving state
  const [filters, setFilters] = useState({ q: '', status: '', caseId: '', suspectId: '', sortBy: 'createdAt', sortOrder: 'desc' }) // This line stores filters

  const canDelete = user?.role === 'admin' // This line allows delete only for admin
  const canEditEvidence = (item) => user?.role === 'admin' || item.uploadedBy?._id === user?.id // This line allows admin or uploader to edit

  // This function loads case and suspect dropdown options
  const loadOptions = async () => {
    try {
      const [casesRes, suspectsRes] = await Promise.all([
        API.get('/cases'), // This line loads case options
        API.get('/suspects') // This line loads suspect options
      ])
      setCases(casesRes.data || []) // This line saves case options
      setSuspects(suspectsRes.data || []) // This line saves suspect options
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to load form options') // This line shows option loading error
    }
  }

  // This function loads evidence using current filters
  const loadEvidence = async () => {
    setLoading(true) // This line starts loading
    setError('') // This line clears old error

    try {
      const params = {} // This line prepares query params
      if (filters.q) params.q = filters.q // This line adds text search
      if (filters.status) params.status = filters.status // This line adds status filter
      if (filters.caseId) params.caseId = filters.caseId // This line adds case filter
      if (filters.suspectId) params.suspectId = filters.suspectId // This line adds suspect filter
      if (filters.sortBy) params.sortBy = filters.sortBy // This line adds sort field
      if (filters.sortOrder) params.sortOrder = filters.sortOrder // This line adds sort order

      const res = await API.get('/evidence', { params }) // This line asks backend for evidence
      setEvidence(res.data || []) // This line saves evidence list
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to load evidence') // This line shows evidence loading error
    } finally {
      setLoading(false) // This line stops loading
    }
  }

  // This effect loads dropdown options when page opens
  useEffect(() => {
    loadOptions() // This line starts dropdown loading
  }, [])

  // This effect reloads evidence when filters change
  useEffect(() => {
    loadEvidence() // This line starts evidence loading
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.q, filters.status, filters.caseId, filters.suspectId, filters.sortBy, filters.sortOrder])

  // This function changes one form field
  const handleFormChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value })) // This line updates one form value
  }

  // This function changes one filter field
  const handleFilterChange = (field, value) => {
    setFilters((current) => ({ ...current, [field]: value })) // This line updates one filter value
  }

  // This function clears form values
  const resetForm = () => {
    setForm(emptyForm) // This line resets the form
    setFile(null) // This line clears selected file
    setEditId('') // This line leaves edit mode
    setFileKey((current) => current + 1) // This line resets file input
  }

  // This function saves new or edited evidence
  const handleSubmit = async (event) => {
    event.preventDefault() // This line stops page refresh
    setMessage('') // This line clears old success text
    setError('') // This line clears old error text

    if (!form.title || !form.caseId) {
      setError('Please enter title and select case') // This line shows required field error
      return // This line stops saving
    }

    if (!editId && !file) {
      setError('Please select an evidence file') // This line requires file for new evidence
      return // This line stops saving
    }

    const formData = new FormData() // This line prepares file upload data
    formData.append('title', form.title) // This line adds title
    formData.append('description', form.description) // This line adds description
    formData.append('caseId', form.caseId) // This line adds case id
    formData.append('status', form.status) // This line adds status
    if (form.suspectId) formData.append('suspectId', form.suspectId) // This line adds suspect id when selected
    if (file) formData.append('file', file) // This line adds file when selected

    setSaving(true) // This line starts saving state

    try {
      if (editId) {
        await API.put(`/evidence/${editId}`, formData) // This line updates evidence
        setMessage('Evidence updated successfully') // This line shows update success
      } else {
        await API.post('/evidence', formData) // This line uploads new evidence
        setMessage('Evidence uploaded successfully') // This line shows upload success
      }

      resetForm() // This line clears form after save
      loadEvidence() // This line reloads evidence list
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to save evidence') // This line shows save error
    } finally {
      setSaving(false) // This line stops saving state
    }
  }

  // This function starts editing one evidence item
  const startEdit = (item) => {
    setEditId(item._id) // This line stores edited evidence id
    setForm({
      title: item.title || '', // This line fills title
      description: item.description || '', // This line fills description
      caseId: item.caseId?._id || '', // This line fills case id
      suspectId: item.suspectId?._id || '', // This line fills suspect id
      status: item.status || 'collected' // This line fills status
    })
    setFile(null) // This line clears file choice during edit
    setFileKey((current) => current + 1) // This line resets file input
  }

  // This function deletes one evidence item
  const deleteEvidence = async (evidenceId) => {
    const confirmed = window.confirm('Do you want to delete this evidence') // This line asks before delete
    if (!confirmed) return // This line stops delete when cancelled

    try {
      await API.delete(`/evidence/${evidenceId}`) // This line deletes evidence
      setMessage('Evidence deleted successfully') // This line shows delete success
      loadEvidence() // This line reloads evidence list
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Unable to delete evidence') // This line shows delete error
    }
  }

  return (
    <div className="app-layout"> {/* This line renders app layout wrapper */}
      <Sidebar /> {/* This line renders left navigation menu */}
      <main className="main-panel"> {/* This line renders main content area */}
        <Navbar title="Evidence Management" /> {/* This line renders page title bar */}

        <section className="content-section"> {/* This line renders evidence page section */}
          {/* This part shows page heading */}
          <div className="section-header">
            <div>
              <p className="eyebrow">Investigation Files</p>
              <h2>Evidence</h2>
            </div>
            <span className="count-pill">{evidence.length} total</span>
          </div>

          <form className="form-card" onSubmit={handleSubmit}> {/* This line renders upload and edit form */}
            {/* This part shows upload form title */}
            <p className="eyebrow">{editId ? 'Edit Evidence' : 'Upload Evidence'}</p>
            <div className="filter-row case-filter-grid">
              <label>
                Title
                <input value={form.title} onChange={(event) => handleFormChange('title', event.target.value)} placeholder="Evidence title" />
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
                <input key={fileKey} type="file" onChange={(event) => setFile(event.target.files[0])} accept="image/*,application/pdf,video/*" />
              </label>
            </div>
            <label>
              Description
              <textarea value={form.description} onChange={(event) => handleFormChange('description', event.target.value)} placeholder="Describe the evidence" />
            </label>
            <div className="card-actions"> {/* This line renders form action buttons */}
              <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Saving' : editId ? 'Update Evidence' : 'Upload Evidence'}</button> {/* This line saves evidence */}
              {editId && <button className="btn btn-secondary" type="button" onClick={resetForm}>Cancel Edit</button>} {/* This line cancels edit mode */}
            </div>
          </form>

          <section className="form-card case-filter-card">
            {/* This part shows evidence filters */}
            <p className="eyebrow">Advanced Search</p>
            <div className="filter-row case-filter-grid">
              <label>
                Search Text
                <input value={filters.q} onChange={(event) => handleFilterChange('q', event.target.value)} placeholder="Search title or description" />
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

          {message && <div className="analysis-result"><p>{message}</p></div>} {/* This line shows success message */}
          {error && <div className="analysis-error"><p>{error}</p></div>} {/* This line shows error message */}
          {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}
          {!loading && evidence.length === 0 && <div className="empty-state">No evidence found</div>} {/* This line shows empty state */}

          {!loading && evidence.length > 0 && (
            <div className="fir-grid"> {/* This line renders evidence cards grid */}
              {evidence.map((item) => (
                <article key={item._id} className="fir-card"> {/* This line renders one evidence card */}
                  <div className="fir-card-header"> {/* This line renders evidence card header */}
                    <div>
                      <p className="eyebrow">Evidence Item</p>
                      <h3>{item.title}</h3>
                    </div>
                    <span className="badge">{item.status}</span>
                  </div>
                  <p className="fir-description">{item.description || 'No description added'}</p>
                  <div className="fir-meta">
                    <span>Case</span>
                    <strong>{item.caseId?.title || 'No case found'}</strong>
                  </div>
                  <div className="fir-meta">
                    <span>Suspect</span>
                    <strong>{item.suspectId?.name || 'No suspect linked'}</strong>
                  </div>
                  <div className="fir-meta">
                    <span>Uploaded By</span>
                    <strong>{item.uploadedBy?.name || 'Unknown'}</strong>
                  </div>
                  {item.fileUrl && (
                    <a className="btn btn-secondary evidence-file-link" href={item.fileUrl} target="_blank" rel="noreferrer">Open File</a>
                  )} {/* This line opens uploaded evidence file */}
                  <div className="card-actions"> {/* This line renders evidence card action buttons */}
                    {canEditEvidence(item) && <button className="btn btn-secondary" type="button" onClick={() => startEdit(item)}>Edit</button>} {/* This line starts edit mode */}
                    {canDelete && <button className="btn btn-danger" type="button" onClick={() => deleteEvidence(item._id)}>Delete</button>} {/* This line deletes evidence item */}
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

export default EvidenceUpload // This line exports the evidence management page
