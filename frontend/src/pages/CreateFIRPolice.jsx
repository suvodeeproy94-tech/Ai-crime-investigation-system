// This page lets police create a new FIR from an existing complaint.
import { useEffect, useState } from 'react' // This line imports state and effect hooks
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports shared api client
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
                const response = await API.get('/complaints') // This line requests complaint list
                const openComplaints = [] // This list stores complaints that do not have FIR yet

                // This loop keeps only complaints without FIR
                for (const item of response.data) {
                    if (!item.firCreated) {
                        openComplaints.push(item)
                    }
                }

                setComplaints(openComplaints) // This line saves complaints without FIR
            } catch (requestError) {
                setError(getApiErrorMessage(requestError, 'Failed to load complaints')) // This line shows loading error
            }
        }
        loadComplaints() // This line starts complaint loading
    }, [])

    // This effect fills form when one complaint is selected
    useEffect(() => {
        let complaint = null // This line stores selected complaint when found

        // This loop finds selected complaint
        for (const item of complaints) {
            if (item._id === selectedComplaintId) {
                complaint = item
            }
        }

        if (complaint) {
            setForm({
                title: complaint.title || '', // This line sets title from complaint
                description: complaint.description || '', // This line sets description from complaint
                location: complaint.location || '' // This line sets location from complaint
            }) // This line updates form values
        }
    }, [selectedComplaintId, complaints])

    // This function changes one form field
    const handleChange = (event) => {
        const fieldName = event.target.name // This line reads changed field name
        const fieldValue = event.target.value // This line reads changed field value

        // This part updates FIR title
        if (fieldName === 'title') {
            setForm({
                title: fieldValue,
                description: form.description,
                location: form.location
            })
        }

        // This part updates FIR description
        if (fieldName === 'description') {
            setForm({
                title: form.title,
                description: fieldValue,
                location: form.location
            })
        }

        // This part updates FIR location
        if (fieldName === 'location') {
            setForm({
                title: form.title,
                description: form.description,
                location: fieldValue
            })
        }
    }

    // This function sends create fir request
    const handleSubmit = async (event) => {
        event.preventDefault() // This line stops page refresh
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
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Failed to create FIR')) // This line shows create error
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
                            <select value={selectedComplaintId} onChange={(event) => setSelectedComplaintId(event.target.value)}>
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
                                <input
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Enter FIR title"
                                />
                            </label>

                            <label>
                                Description
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Describe the FIR details"
                                    rows="6"
                                />
                            </label>

                            <label>
                                Location
                                <input
                                    name="location"
                                    value={form.location}
                                    onChange={handleChange}
                                    placeholder="Enter incident location"
                                />
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
