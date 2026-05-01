// This file shows the registration page. It lets a new user create an account and choose a role.
// This line imports useState for managing registration form state
import { useState } from 'react'
// This line imports the shared API client for backend requests
import API from '../services/api'
// This line imports navigation helpers for links and redirects
import { Link, useNavigate } from 'react-router-dom'

// This part shows the registration page
function Register() {
    // This part keeps all registration form fields in one state object
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' })
    // This part creates a function used to redirect after registration
    const navigate = useNavigate()

    // This function updates the matching field when the user types or selects a role
    const handleChange = (e) => {
        // This line copies the existing form and updates only the changed field
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // This part sends the registration form to the backend
    const handleSubmit = async (e) => {
        // Prevents the browser from refreshing on form submit
        e.preventDefault()
        // This part creates the account through the backend API
        await API.post('/users/register', form)
        // This part sends the user back to the login page after registration
        navigate('/')
    }

    // This line returns the registration page layout
    return (
        // Main centered registration page wrapper
        <main className="auth-page">
            {/* Two column panel with intro text and registration form */}
            <section className="auth-panel">
                {/* This is the left side visual and onboarding copy */}
                <div className="auth-copy">
                    {/* This is the small label above the main heading */}
                    <p className="eyebrow">Officer Onboarding</p>
                    {/* This is the main page heading */}
                    <h1>Create Your Account</h1>
                    {/* Short description for new users */}
                    <p>Set up access to submit FIRs and coordinate investigation records.</p>
                </div>

                {/* Registration form sends account data to the backend */}
                <form className="auth-card" onSubmit={handleSubmit}>
                    {/* This is the form heading area */}
                    <div>
                        {/* This is the small label for the form */}
                        <p className="eyebrow">Registration</p>
                        {/* This is the form title */}
                        <h2>Sign Up</h2>
                    </div>

                    {/* Full name input field */}
                    <label>
                        Full Name
                        {/* This keeps the full name entered by the user */}
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" />
                    </label>

                    {/* This is the email input field */}
                    <label>
                        Email
                        {/* This keeps the email entered by the user */}
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter email" />
                    </label>

                    {/* This is the password input field */}
                    <label>
                        Password
                        {/* This keeps the password entered by the user */}
                        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Create password" />
                    </label>

                    {/* This is the role selection field */}
                    <label>
                        Role
                        {/* This keeps the selected access role */}
                        <select name="role" value={form.role} onChange={handleChange}>
                            {/* Standard user role for FIR creation */}
                            <option value="user">User</option>
                            {/* Police role for investigation and AI analysis */}
                            <option value="police">Police</option>
                            {/* Admin role for full system access */}
                            <option value="admin">Admin</option>
                        </select>
                    </label>

                    {/* This submits the registration form */}
                    <button className="btn btn-primary" type="submit">Register</button>

                    {/* This part links back to the login page */}
                    <p className="form-link">
                        Already registered? <Link to="/">Login</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}

// This line makes the registration page
export default Register


