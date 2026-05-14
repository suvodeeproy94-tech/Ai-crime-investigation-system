// This file shows the registration page
// This page lets a person create an account
// This page creates normal user accounts only
// This line imports useState for managing registration form state
import { useState } from 'react'
// This line imports the shared API client for backend requests
import API, { getApiErrorMessage } from '../services/apiClient'
// This line imports navigation helpers for links and redirects
import { Link, useNavigate } from 'react-router-dom'
// This line imports the 3D rotating logo component
import RotatingLogo3D from '../components/RotatingLogo3D'

// This part shows the registration page
function Register() {
    // This part keeps all registration form fields in one state object
    const [form, setForm] = useState({ name: '', email: '', password: '' }) // This line stores signup form values
    // This part creates a function used to redirect after registration
    const navigate = useNavigate()

    // This function updates the matching field when the user types or selects role
    const handleChange = (event) => {
        // This line reads the changed input name
        const fieldName = event.target.name

        // This line reads the changed input value
        const fieldValue = event.target.value

        // This part updates name
        if (fieldName === 'name') {
            setForm({
                name: fieldValue,
                email: form.email,
                password: form.password
            })
        }

        // This part updates email
        if (fieldName === 'email') {
            setForm({
                name: form.name,
                email: fieldValue,
                password: form.password
            })
        }

        // This part updates password
        if (fieldName === 'password') {
            setForm({
                name: form.name,
                email: form.email,
                password: fieldValue
            })
        }
    }

    // This part sends the registration form to the backend
    const handleSubmit = async (event) => {
        // Prevents the browser from refreshing on form submit
        event.preventDefault()

        try {
            // This part creates the account through the backend API
            await API.post('/users/register', form)
            // This line removes old login token after signup
            localStorage.removeItem('token')
            // This line removes old saved user after signup
            localStorage.removeItem('user')
            // This part sends the user back to the login page after registration
            navigate('/')
        } catch (error) {
            // This line shows a simple registration error
            alert(getApiErrorMessage(error, 'Registration failed'))
        }
    }

    // This line returns the registration page layout
    return (
        // Main centered registration page wrapper
        <main className="auth-page">
            {/* Two column panel with intro text and registration form */}
            <section className="auth-panel">
                {/* This is the left side visual and onboarding copy */}
                <div className="auth-copy">
                    {/* This part shows the big rotating logo above the register page title */}
                    <div className="auth-copy-logo-box">
                        {/* This part shows the uploaded logo as a real 3D rotating logo */}
                        <RotatingLogo3D />
                    </div>

                    {/* This is the small label above the main heading */}
                    <p className="eyebrow">Citizen Signup</p>
                    {/* This is the main page heading */}
                    <h1>Create Your Account</h1>
                    {/* Short description for new users */}
                    <p>Set up access to submit complaints and track investigation updates.</p>
                </div>

                {/* Registration form sends account data to the backend */}
                <form className="auth-card" onSubmit={handleSubmit}>
                    {/* This part shows the portal name */}
                    <div className="auth-brand">
                        {/* This part shows the normal small CrimeDesk logo */}
                        <img className="auth-brand-logo" src="/logos/logo-mark.png" alt="CrimeDesk logo" />
                        {/* This part shows the portal title and small text */}
                        <div>
                            {/* This line shows the portal title */}
                            <strong>CrimeDesk Portal</strong>
                            {/* This line shows the portal purpose */}
                            <small>Citizen account setup</small>
                        </div>
                    </div>

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
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Create password"
                        />
                    </label>

                    {/* This submits the registration form */}
                    <button className="btn btn-primary" type="submit">Register</button>

                    {/* This part links back to the login page */}
                    <p className="form-link">
                        Already registered? <Link to="/">Login</Link>
                    </p>

                    {/* This line shows a short security note */}
                    <p className="auth-security-note">Your account is used for complaint and case updates</p>
                </form>
            </section>
        </main>
    )
}

// This line makes the registration page
export default Register


