// This file shows the registration page
// This page lets a person create an account
// This page lets a person select a role for the account
// This line imports useState for managing registration form state
import { useState } from 'react'
// This line imports the shared API client for backend requests
import API, { getApiErrorMessage } from '../services/apiClient'
// This line imports navigation helpers for links and redirects
import { Link, useNavigate } from 'react-router-dom'
// This line imports the 3D rotating logo component
import RotatingLogo3D from '../components/RotatingLogo3D'

// This function checks the form before sending it to the backend
function checkRegisterForm(form) {
    // This check makes sure the full name is not empty
    if (!form.name.trim()) {
        return 'Please enter full name'
    }

    // This check makes sure the email is not empty
    if (!form.email.trim()) {
        return 'Please enter email'
    }

    // This check makes sure the email has a basic email shape
    if (!form.email.includes('@')) {
        return 'Please enter a valid email'
    }

    // This check makes sure the password is not empty
    if (!form.password) {
        return 'Please enter password'
    }

    // This check asks for a simple minimum password length
    if (form.password.length < 4) {
        return 'Password must be at least 4 characters'
    }

    // This line means the form is valid
    return ''
}

// This part shows the registration page
function Register() {
    // This part keeps all registration form fields in one state object
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    }) // This line stores signup form values
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
                password: form.password,
                role: form.role
            })
        }

        // This part updates email
        if (fieldName === 'email') {
            setForm({
                name: form.name,
                email: fieldValue,
                password: form.password,
                role: form.role
            })
        }

        // This part updates password
        if (fieldName === 'password') {
            setForm({
                name: form.name,
                email: form.email,
                password: fieldValue,
                role: form.role
            })
        }

        // This part updates role
        if (fieldName === 'role') {
            setForm({
                name: form.name,
                email: form.email,
                password: form.password,
                role: fieldValue
            })
        }
    }

    // This part sends the registration form to the backend
    const handleSubmit = async (event) => {
        // Prevents the browser from refreshing on form submit
        event.preventDefault()

        // This line checks the form before calling the backend
        const formError = checkRegisterForm(form)

        // This check stops signup when a field is missing
        if (formError) {
            alert(formError)
            return
        }

        // This object sends clean signup data to the backend
        const registerData = {
            name: form.name.trim(),
            email: form.email.trim(),
            password: form.password,
            role: form.role
        }

        try {
            // This part creates the account through the backend API
            await API.post('/users/register', registerData)
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
                    <p className="eyebrow">Account Signup</p>
                    {/* This is the main page heading */}
                    <h1>Create Your Account</h1>
                    {/* Short description for new users */}
                    <p>Select your role and set up access to the investigation portal.</p>
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
                            <small>Account setup</small>
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
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" required />
                    </label>

                    {/* This is the email input field */}
                    <label>
                        Email
                        {/* This keeps the email entered by the user */}
                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter email" required />
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
                            required
                        />
                    </label>

                    {/* This is the role selection field */}
                    <label>
                        Role
                        {/* This keeps the role selected by the user */}
                        <select name="role" value={form.role} onChange={handleChange} required>
                            {/* This option creates a normal citizen account */}
                            <option value="user">User</option>
                            {/* This option creates a police account */}
                            <option value="police">Police</option>
                            {/* This option creates an admin account */}
                            <option value="admin">Admin</option>
                        </select>
                    </label>

                    {/* This submits the registration form */}
                    <button className="btn btn-primary" type="submit">Register</button>

                    {/* This part links back to the login page */}
                    <p className="form-link">
                        Already registered? <Link to="/">Login</Link>
                    </p>

                    {/* This line shows a short security note */}
                    <p className="auth-security-note">Your selected role controls which pages you can open</p>
                </form>
            </section>
        </main>
    )
}

// This line makes the registration page
export default Register


