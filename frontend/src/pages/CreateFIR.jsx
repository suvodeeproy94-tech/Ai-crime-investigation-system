// This file shows the Create Complaint page. It lets a user enter incident details and submit a new complaint to the backend.
// This line imports useState for managing form input
import { useState } from 'react'
// This line imports the shared API client for backend requests
import API, { getApiErrorMessage } from '../services/apiClient'
// This line imports the shared top bar
import Navbar from '../components/Navbar'
// This line imports the shared sidebar navigation
import Sidebar from '../components/Sidebar'

// This part shows the form used to create a new complaint
function CreateFIR() {
    // This part keeps all FIR form fields in one state object
    const [form, setForm] = useState({
        // This part keeps the FIR title input
        title: '',
        // This part keeps the incident description input
        description: '',
        // This part keeps the incident location input
        location: ''
    })

    // This function updates the matching form field when an input changes
    const handleChange = (event) => {
        // This line reads the changed input name
        const fieldName = event.target.name

        // This line reads the changed input value
        const fieldValue = event.target.value

        // This part updates title
        if (fieldName === 'title') {
            setForm({
                title: fieldValue,
                description: form.description,
                location: form.location
            })
        }

        // This part updates description
        if (fieldName === 'description') {
            setForm({
                title: form.title,
                description: fieldValue,
                location: form.location
            })
        }

        // This part updates location
        if (fieldName === 'location') {
            setForm({
                title: form.title,
                description: form.description,
                location: fieldValue
            })
        }
    }

    // This part sends the form data to the backend as a complaint
    const handleSubmit = async (event) => {
        // This step stops the browser from refreshing the page
        event.preventDefault()
        try {
            // This part creates the complaint through the backend API
            await API.post('/complaints', form)
            // Tells the user that the complaint was created
            alert('Complaint created')
            // Clears the form after successful creation
            setForm({ title: '', description: '', location: '' })
        } catch (error) {
            // This line shows a simple complaint error
            alert(getApiErrorMessage(error, 'Complaint creation failed'))
        }
    }

    // This line returns the create complaint page layout
    return (
        // App layout places sidebar beside the main panel
        <div className="app-layout">
            {/* This part shows the left navigation */}
            <Sidebar />

            {/* This is the main form content area */}
            <main className="main-panel">
                {/* This part shows the page title */}
                <Navbar title="Create Complaint" />

                {/* Keeps the form at a readable width */}
                <section className="content-section narrow">
                    {/* This part shows the section heading */}
                    <div className="section-header">
                        {/* Groups the small label and heading */}
                        <div>
                            {/* This is the small label for the form */}
                            <p className="eyebrow">New Complaint</p>
                            {/* This is the main section heading */}
                            <h2>Fill Complaint Details</h2>
                        </div>
                    </div>

                    {/* This is the form card sends complaint data on submit */}
                    <form className="form-card" onSubmit={handleSubmit}>
                        {/* This is the title input field */}
                        <label>
                            Complaint Title
                            {/* This keeps the title entered by the user */}
                            <input name="title" value={form.title} onChange={handleChange} placeholder="Enter complaint title" />
                        </label>

                        {/* This is the description input field */}
                        <label>
                            Description
                            {/* This keeps the incident details entered by the user */}
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Describe the incident"
                                rows="6"
                            />
                        </label>

                        {/* This is the location input field */}
                        <label>
                            Location
                            {/* This keeps the incident location entered by the user */}
                            <input name="location" value={form.location} onChange={handleChange} placeholder="Enter incident location" />
                        </label>

                        {/* This submits the complaint form */}
                        <button className="btn btn-primary" type="submit">Create Complaint</button>
                    </form>
                </section>
            </main>
        </div>
    )
}

// This line makes the create complaint page
export default CreateFIR


