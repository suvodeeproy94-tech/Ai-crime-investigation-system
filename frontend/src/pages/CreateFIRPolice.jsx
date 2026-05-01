// This page lets police create a new FIR from an existing complaint.
import { useEffect, useState } from 'react'
import API from '../services/api'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function CreateFIRPolice() {
    const [complaints, setComplaints] = useState([])
    const [selectedComplaintId, setSelectedComplaintId] = useState('')
    const [form, setForm] = useState({ title: '', description: '', location: '' })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        const loadComplaints = async () => {
            try {
                const res = await API.get('/complaints')
                setComplaints(res.data.filter((item) => !item.firCreated))
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to load complaints')
            }
        }
        loadComplaints()
    }, [])

    useEffect(() => {
        const complaint = complaints.find((item) => item._id === selectedComplaintId)
        if (complaint) {
            setForm({
                title: complaint.title || '',
                description: complaint.description || '',
                location: complaint.location || ''
            })
        }
    }, [selectedComplaintId, complaints])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!selectedComplaintId) {
            setError('Please select a complaint to create an FIR from.')
            return
        }

        try {
            await API.post('/fir', {
                complaintId: selectedComplaintId,
                title: form.title,
                description: form.description,
                location: form.location
            })
            setSuccess('FIR created successfully')
            setSelectedComplaintId('')
            setForm({ title: '', description: '', location: '' })
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create FIR')
        }
    }

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Create FIR" />
                <section className="content-section narrow">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">New FIR</p>
                            <h2>Create FIR from Complaint</h2>
                        </div>
                    </div>

                    <div className="form-card">
                        {error && <div className="alert alert-error">{error}</div>}
                        {success && <div className="alert alert-success">{success}</div>}

                        <label>
                            Select Complaint
                            <select value={selectedComplaintId} onChange={(e) => setSelectedComplaintId(e.target.value)}>
                                <option value="">Select a complaint</option>
                                {complaints.map((complaint) => (
                                    <option key={complaint._id} value={complaint._id}>
                                        {complaint.title} - {complaint.location}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <form onSubmit={handleSubmit}>
                            <label>
                                FIR Title
                                <input name="title" value={form.title} onChange={handleChange} placeholder="Enter FIR title" />
                            </label>

                            <label>
                                Description
                                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the FIR details" rows="6" />
                            </label>

                            <label>
                                Location
                                <input name="location" value={form.location} onChange={handleChange} placeholder="Enter incident location" />
                            </label>

                            <button className="btn btn-primary" type="submit">Create FIR</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CreateFIRPolice
