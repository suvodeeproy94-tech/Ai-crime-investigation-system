// This file shows the report management page.
// It lets logged in users create, view, edit, and delete reports.
import { useEffect, useState } from 'react' // This line imports state and effect hooks.
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports shared API client.
import Navbar from '../components/Navbar' // This line imports top bar.
import Sidebar from '../components/Sidebar' // This line imports left menu.
import Loader from '../components/Loader' // This line imports the shared loading logo component.
import useAuth from '../hooks/useAuth' // This line imports user role data.

// This object keeps empty report form values.
const emptyForm = {
    title: '',
    content: '',
    status: 'draft',
    caseId: '',
    firId: ''
}

// This helper returns linked case title safely.
const getCaseTitle = (report) => {
    if (report.caseId && report.caseId.title) {
        return report.caseId.title
    }

    return 'No case linked'
}

// This helper returns linked FIR title safely.
const getFIRTitle = (report) => {
    if (report.firId && report.firId.title) {
        return report.firId.title
    }

    return 'No fir linked'
}

// This helper returns report creator name safely.
const getCreatorName = (report) => {
    if (report.createdBy && report.createdBy.name) {
        return report.createdBy.name
    }

    return 'Unknown user'
}

// This part renders report management screen.
function Reports() {
    const { user } = useAuth() // This line reads current user data.
    let userRole = '' // This line stores role safely.
    let userId = '' // This line stores user id safely.

    if (user && user.role) {
        userRole = user.role
    }

    if (user && user.id) {
        userId = user.id
    }

    const [reports, setReports] = useState([]) // This line stores report list.
    const [cases, setCases] = useState([]) // This line stores case dropdown data.
    const [firs, setFirs] = useState([]) // This line stores fir dropdown data.
    const [form, setForm] = useState(emptyForm) // This line stores form values.
    const [aiNotes, setAiNotes] = useState('') // This line stores raw notes for AI report generation.
    const [editId, setEditId] = useState('') // This line stores selected report id for edit.
    const [loading, setLoading] = useState(true) // This line stores loading state.
    const [saving, setSaving] = useState(false) // This line stores save button state.
    const [aiLoading, setAiLoading] = useState(false) // This line stores AI report button state.
    const [message, setMessage] = useState('') // This line stores success message.
    const [error, setError] = useState('') // This line stores error message.

    const isAdmin = userRole === 'admin' // This line checks admin role.
    const canUseAI = ['police', 'admin'].includes(userRole) // This line checks who can generate AI reports.

    // This function loads case and FIR options.
    const loadOptions = async () => {
        try {
            const caseResponse = await API.get('/cases')
            const firResponse = await API.get('/fir')

            setCases(caseResponse.data || [])
            setFirs(firResponse.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load report options'))
        }
    }

    // This function loads reports.
    const loadReports = async () => {
        setLoading(true)
        setError('')

        try {
            const response = await API.get('/reports')
            setReports(response.data || [])
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load reports'))
        } finally {
            setLoading(false)
        }
    }

    // This effect runs once to load initial data.
    useEffect(() => {
        loadOptions()
        loadReports()
    }, [])

    // This function changes one form field.
    const handleFormChange = (field, value) => {
        const updatedForm = {
            title: form.title,
            content: form.content,
            status: form.status,
            caseId: form.caseId,
            firId: form.firId
        }

        updatedForm[field] = value
        setForm(updatedForm)
    }

    // This function clears form and edit mode.
    const resetForm = () => {
        setForm(emptyForm)
        setEditId('')
    }

    // This function asks backend AI to make a clean crime report from raw notes.
    const handleGenerateReport = async () => {
        setMessage('')
        setError('')

        // AI needs some notes before it can create a useful report.
        if (!aiNotes.trim()) {
            setError('Please enter crime notes before generating report')
            return
        }

        setAiLoading(true)

        try {
            // Send raw notes to the backend AI report route.
            const response = await API.post('/ai/generate-report', { text: aiNotes.trim() })

            // Read generated title and content safely from backend response.
            const generatedTitle = response.data.title || 'AI Crime Report'
            const generatedContent = response.data.content || ''

            // Stop here if AI did not return report text.
            if (!generatedContent) {
                setError('AI did not return report content')
                return
            }

            // Put AI output into the normal report form for review and saving.
            setForm({
                title: generatedTitle,
                content: generatedContent,
                status: 'draft',
                caseId: form.caseId,
                firId: form.firId
            })

            setEditId('')
            setMessage('AI report generated. Please review it before saving.')
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to generate AI report'))
        } finally {
            setAiLoading(false)
        }
    }

    // This function saves new report or updates report.
    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage('')
        setError('')

        if (!form.title || !form.content) {
            setError('Please enter report title and report content')
            return
        }

        const payload = {
            title: form.title,
            content: form.content,
            status: form.status,
            caseId: form.caseId || undefined,
            firId: form.firId || undefined
        }

        setSaving(true)

        try {
            if (editId) {
                await API.put(`/reports/${editId}`, payload)
                setMessage('Report updated successfully')
            } else {
                await API.post('/reports', payload)
                setMessage('Report created successfully')
            }

            resetForm()
            loadReports()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to save report'))
        } finally {
            setSaving(false)
        }
    }

    // This function fills form with selected report data.
    const startEdit = (report) => {
        let caseId = ''
        let firId = ''

        if (report.caseId && report.caseId._id) {
            caseId = report.caseId._id
        }

        if (report.firId && report.firId._id) {
            firId = report.firId._id
        }

        setEditId(report._id)
        setForm({
            title: report.title || '',
            content: report.content || '',
            status: report.status || 'draft',
            caseId,
            firId
        })
    }

    // This function deletes selected report.
    const deleteReport = async (report) => {
        let isOwner = false

        if (report.createdBy && report.createdBy._id === userId) {
            isOwner = true
        }

        if (!isAdmin && !isOwner) {
            setError('Only owner or admin can delete this report')
            return
        }

        const confirmed = window.confirm('Do you want to delete this report')

        if (!confirmed) {
            return
        }

        try {
            await API.delete(`/reports/${report._id}`)
            setMessage('Report deleted successfully')
            loadReports()
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to delete report'))
        }
    }

    // This line keeps the save button text simple.
    let saveButtonText = 'Create Report'
    let formTitle = 'Create Report'

    if (saving) {
        saveButtonText = 'Saving'
    } else if (editId) {
        saveButtonText = 'Update Report'
        formTitle = 'Edit Report'
    }

    // This line keeps the AI generate button text simple.
    let generateButtonText = 'Generate AI Report'

    if (aiLoading) {
        generateButtonText = 'Generating'
    }

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Reports" />

                <section className="content-section">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Investigation Reports</p>
                            <h2>Reports</h2>
                        </div>
                        <span className="count-pill">{reports.length} total</span>
                    </div>

                    {canUseAI && (
                        <section className="form-card case-filter-card">
                            <p className="eyebrow">ATS Friendly AI Report</p>
                            <label>
                                Raw Crime Notes
                                <textarea
                                    value={aiNotes}
                                    onChange={(event) => setAiNotes(event.target.value)}
                                    placeholder="Paste victim suspect location evidence and officer notes"
                                    rows="6"
                                />
                            </label>
                            <div className="card-actions">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleGenerateReport}
                                    disabled={aiLoading || !aiNotes.trim()}
                                >
                                    {generateButtonText}
                                </button>
                                <button className="btn btn-secondary" type="button" onClick={() => setAiNotes('')}>
                                    Clear Notes
                                </button>
                            </div>
                        </section>
                    )}

                    <form className="form-card" onSubmit={handleSubmit}>
                        <p className="eyebrow">{formTitle}</p>
                        <label>
                            Report Title
                            <input
                                value={form.title}
                                onChange={(event) => handleFormChange('title', event.target.value)}
                                placeholder="Enter report title"
                            />
                        </label>
                        <label>
                            Report Content
                            <textarea
                                value={form.content}
                                onChange={(event) => handleFormChange('content', event.target.value)}
                                placeholder="Write report details"
                                rows="7"
                            />
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

                    {message && <div className="analysis-result"><p>{message}</p></div>}
                    {error && <div className="analysis-error"><p>{error}</p></div>}
                    {loading && <div className="empty-state"><Loader /></div>}
                    {!loading && reports.length === 0 && <div className="empty-state">No reports found</div>}

                    {!loading && reports.length > 0 && (
                        <div className="fir-grid">
                            {reports.map((report) => (
                                <article key={report._id} className="fir-card">
                                    <div className="fir-card-header">
                                        <div>
                                            <p className="eyebrow">Report Record</p>
                                            <h3>{report.title}</h3>
                                        </div>
                                        <span className="badge">{report.status}</span>
                                    </div>
                                    <p className="fir-description">{report.content}</p>
                                    <div className="fir-meta">
                                        <span>Case</span>
                                        <strong>{getCaseTitle(report)}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>FIR</span>
                                        <strong>{getFIRTitle(report)}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Created By</span>
                                        <strong>{getCreatorName(report)}</strong>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn btn-secondary" type="button" onClick={() => startEdit(report)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" type="button" onClick={() => deleteReport(report)}>
                                            Delete
                                        </button>
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

export default Reports
