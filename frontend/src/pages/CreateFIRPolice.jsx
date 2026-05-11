// This page lets police create a new FIR from an existing complaint.
import { useEffect, useState } from 'react' // This line imports state and effect hooks
import API from '../services/apiClient' // This line imports shared api client
import Navbar from '../components/Navbar' // This line imports top bar
import Sidebar from '../components/Sidebar' // This line imports left menu

// This part renders create fir page for police and admin users
function CreateFIRPolice() {
    const [complaints, setComplaints] = useState([]) // This line stores complaint list
    const [selectedComplaintId, setSelectedComplaintId] = useState('') // This line stores selected complaint id
    const [form, setForm] = useState({ title: '', description: '', location: '' }) // This line stores fir form values
    const [error, setError] = useState('') // This line stores error message
    const [success, setSuccess] = useState('') // This line stores success message

    // This effect loads complaint list when page opens
    useEffect(() => {
        // This function loads complaints from backend
        const loadComplaints = async () => {
            try {
                const res = await API.get('/complaints') // This line requests complaint list
                setComplaints(res.data.filter((item) => !item.firCreated)) // This line keeps complaints without fir
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to load complaints') // This line shows loading error
            }
        }
        loadComplaints() // This line starts complaint loading
    }, [])

    // This effect fills form when one complaint is selected
    useEffect(() => {
        const complaint = complaints.find((item) => item._id === selectedComplaintId) // This line finds selected complaint
        if (complaint) {
            setForm({
                title: complaint.title || '', // This line sets title from complaint
                description: complaint.description || '', // This line sets description from complaint
                location: complaint.location || '' // This line sets location from complaint
            }) // This line updates form values
        }
    }, [selectedComplaintId, complaints])

    // This function changes one form field
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }) // This line updates one form input value
    }

    // This function sends create fir request
    const handleSubmit = async (e) => {
        e.preventDefault() // This line stops page refresh
        setError('') // This line clears old error message
        setSuccess('') // This line clears old success message

        if (!selectedComplaintId) {
            setError('Please select a complaint to create an FIR from.') // This line shows required complaint message
            return // This line stops submit when no complaint is selected
        }

        try {
            await API.post('/fir', {
                complaintId: selectedComplaintId, // This line sends selected complaint id
                title: form.title, // This line sends fir title
                description: form.description, // This line sends fir description
                location: form.location // This line sends fir location
            }) // This line creates fir record
            setSuccess('FIR created successfully') // This line shows success message
            setSelectedComplaintId('') // This line clears selected complaint id
            setForm({ title: '', description: '', location: '' }) // This line clears form after success
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create FIR') // This line shows create error
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
                        {error && <div className="alert alert-error">{error}</div>} {/* This line shows error message */}
                        {success && <div className="alert alert-success">{success}</div>} {/* This line shows success message */}

                        <label>
                            Select Complaint
                            <select value={selectedComplaintId} onChange={(e) => setSelectedComplaintId(e.target.value)}> {/* This line updates selected complaint */}
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
                                <input name="title" value={form.title} onChange={handleChange} placeholder="Enter FIR title" /> {/* This line captures fir title */}
                            </label>

                            <label>
                                Description
                                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the FIR details" rows="6" /> {/* This line captures fir description */}
                            </label>

                            <label>
                                Location
                                <input name="location" value={form.location} onChange={handleChange} placeholder="Enter incident location" /> {/* This line captures fir location */}
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
