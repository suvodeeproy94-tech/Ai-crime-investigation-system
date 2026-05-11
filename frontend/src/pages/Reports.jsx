// This file shows report management page
// This page lets logged in users create view edit and delete reports
import { useEffect, useState } from 'react' // This line imports state and effect hooks
import API from '../services/apiClient' // This line imports shared api client
import Navbar from '../components/Navbar' // This line imports top bar
import Sidebar from '../components/Sidebar' // This line imports left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component
import useAuth from '../hooks/useAuth' // This line imports user role data

// This object keeps empty form values
const emptyForm = {
    title: '', // This line stores report title
    content: '', // This line stores report content
    status: 'draft', // This line stores report status
    caseId: '', // This line stores selected case id
    firId: '' // This line stores selected fir id
}

// This part renders report management screen
function Reports() {
    const { user } = useAuth() // This line reads current user data
    const [reports, setReports] = useState([]) // This line stores report list
    const [cases, setCases] = useState([]) // This line stores case dropdown data
    const [firs, setFirs] = useState([]) // This line stores fir dropdown data
    const [form, setForm] = useState(emptyForm) // This line stores form values
    const [editId, setEditId] = useState('') // This line stores selected report id for edit
    const [loading, setLoading] = useState(true) // This line stores loading state
    const [saving, setSaving] = useState(false) // This line stores save button state
    const [message, setMessage] = useState('') // This line stores success message
    const [error, setError] = useState('') // This line stores error message

    const isAdmin = user?.role === 'admin' // This line checks admin role

    // This function loads case and fir options
    const loadOptions = async () => {
        try {
            const [caseRes, firRes] = await Promise.all([
                API.get('/cases'), // This line loads case options
                API.get('/fir') // This line loads fir options
            ])

            setCases(caseRes.data || []) // This line saves case options
            setFirs(firRes.data || []) // This line saves fir options
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to load report options') // This line shows option loading error
        }
    }

    // This function loads reports
    const loadReports = async () => {
        setLoading(true) // This line starts loading
        setError('') // This line clears old error

        try {
            const res = await API.get('/reports') // This line loads report list
            setReports(res.data || []) // This line saves report list
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to load reports') // This line shows loading error
        } finally {
            setLoading(false) // This line stops loading
        }
    }

    // This effect runs once to load initial data
    useEffect(() => {
        loadOptions() // This line loads case and fir options
        loadReports() // This line loads reports
    }, [])

    // This function changes one form field
    const handleFormChange = (field, value) => {
        setForm((current) => ({ ...current, [field]: value })) // This line updates one form value
    }

    // This function clears form and edit mode
    const resetForm = () => {
        setForm(emptyForm) // This line resets form values
        setEditId('') // This line exits edit mode
    }

    // This function saves new report or updates report
    const handleSubmit = async (event) => {
        event.preventDefault() // This line stops page refresh
        setMessage('') // This line clears old success message
        setError('') // This line clears old error message

        if (!form.title || !form.content) {
            setError('Please enter report title and report content') // This line checks required fields
            return // This line stops save when required fields are missing
        }

        const payload = {
            title: form.title, // This line sends report title
            content: form.content, // This line sends report content
            status: form.status, // This line sends report status
            caseId: form.caseId || undefined, // This line sends case id when selected
            firId: form.firId || undefined // This line sends fir id when selected
        }

        setSaving(true) // This line starts saving state

        try {
            if (editId) {
                await API.put(`/reports/${editId}`, payload) // This line updates selected report
                setMessage('Report updated successfully') // This line shows update success
            } else {
                await API.post('/reports', payload) // This line creates new report
                setMessage('Report created successfully') // This line shows create success
            }

            resetForm() // This line clears form
            loadReports() // This line reloads report list
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to save report') // This line shows save error
        } finally {
            setSaving(false) // This line stops saving state
        }
    }

    // This function fills form with selected report data
    const startEdit = (report) => {
        setEditId(report._id) // This line stores selected report id
        setForm({
            title: report.title || '', // This line fills report title
            content: report.content || '', // This line fills report content
            status: report.status || 'draft', // This line fills report status
            caseId: report.caseId?._id || '', // This line fills linked case id
            firId: report.firId?._id || '' // This line fills linked fir id
        })
    }

    // This function deletes selected report
    const deleteReport = async (report) => {
        const isOwner = report.createdBy?._id === user?.id // This line checks report owner

        if (!isAdmin && !isOwner) {
            setError('Only owner or admin can delete this report') // This line blocks unauthorized delete
            return // This line stops delete request
        }

        const confirmed = window.confirm('Do you want to delete this report') // This line asks confirmation
        if (!confirmed) return // This line stops delete when user cancels

        try {
            await API.delete(`/reports/${report._id}`) // This line sends delete request
            setMessage('Report deleted successfully') // This line shows delete success
            loadReports() // This line refreshes report list
        } catch (requestError) {
            setError(requestError.response?.data?.message || 'Unable to delete report') // This line shows delete error
        }
    }

    return (
        <div className="app-layout"> {/* This line renders app layout wrapper */}
            <Sidebar /> {/* This line renders left navigation menu */}
            <main className="main-panel"> {/* This line renders main content area */}
                <Navbar title="Reports" /> {/* This line renders page title bar */}

                <section className="content-section"> {/* This line renders reports page section */}
                    <div className="section-header"> {/* This line renders section heading row */}
                        <div>
                            <p className="eyebrow">Investigation Reports</p> {/* This line shows small section label */}
                            <h2>Reports</h2> {/* This line shows main section title */}
                        </div>
                        <span className="count-pill">{reports.length} total</span> {/* This line shows total report count */}
                    </div>

                    <form className="form-card" onSubmit={handleSubmit}> {/* This line renders create and edit form */}
                        <p className="eyebrow">{editId ? 'Edit Report' : 'Create Report'}</p> {/* This line shows form mode */}
                        <label>
                            Report Title
                            <input value={form.title} onChange={(event) => handleFormChange('title', event.target.value)} placeholder="Enter report title" />
                        </label>
                        <label>
                            Report Content
                            <textarea value={form.content} onChange={(event) => handleFormChange('content', event.target.value)} placeholder="Write report details" rows="7" />
                        </label>
                        <div className="filter-row case-filter-grid">
                            <label>
                                Status
                                <select value={form.status} onChange={(event) => handleFormChange('status', event.target.value)}>
                                    <option value="draft">Draft</option>
                                    <option value="final">Final</option>
                                </select>
                            </label>
                            <label>
                                Linked Case
                                <select value={form.caseId} onChange={(event) => handleFormChange('caseId', event.target.value)}>
                                    <option value="">No case selected</option>
                                    {cases.map((caseItem) => (
                                        <option key={caseItem._id} value={caseItem._id}>{caseItem.title}</option>
                                    ))}
                                </select>
                            </label>
                            <label>
                                Linked FIR
                                <select value={form.firId} onChange={(event) => handleFormChange('firId', event.target.value)}>
                                    <option value="">No fir selected</option>
                                    {firs.map((fir) => (
                                        <option key={fir._id} value={fir._id}>{fir.title}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="card-actions"> {/* This line renders form action buttons */}
                            <button className="btn btn-primary" type="submit" disabled={saving}>{saving ? 'Saving' : editId ? 'Update Report' : 'Create Report'}</button> {/* This line saves report */}
                            {editId && <button className="btn btn-secondary" type="button" onClick={resetForm}>Cancel Edit</button>} {/* This line cancels edit mode */}
                        </div>
                    </form>

                    {message && <div className="analysis-result"><p>{message}</p></div>} {/* This line shows success message */}
                    {error && <div className="analysis-error"><p>{error}</p></div>} {/* This line shows error message */}
                    {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}
                    {!loading && reports.length === 0 && <div className="empty-state">No reports found</div>} {/* This line shows empty state */}

                    {!loading && reports.length > 0 && (
                        <div className="fir-grid"> {/* This line renders report cards grid */}
                            {reports.map((report) => (
                                <article key={report._id} className="fir-card"> {/* This line renders one report card */}
                                    <div className="fir-card-header"> {/* This line renders report card header */}
                                        <div>
                                            <p className="eyebrow">Report Record</p>
                                            <h3>{report.title}</h3>
                                        </div>
                                        <span className="badge">{report.status}</span>
                                    </div>
                                    <p className="fir-description">{report.content}</p>
                                    <div className="fir-meta">
                                        <span>Case</span>
                                        <strong>{report.caseId?.title || 'No case linked'}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>FIR</span>
                                        <strong>{report.firId?.title || 'No fir linked'}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Created By</span>
                                        <strong>{report.createdBy?.name || 'Unknown user'}</strong>
                                    </div>
                                    <div className="card-actions"> {/* This line renders report card action buttons */}
                                        <button className="btn btn-secondary" type="button" onClick={() => startEdit(report)}>Edit</button> {/* This line starts edit mode */}
                                        <button className="btn btn-danger" type="button" onClick={() => deleteReport(report)}>Delete</button> {/* This line deletes report */}
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

export default Reports // This line exports report page
