// This file shows the login page. It handles email password login and OTP 2FA verification.
// This line imports useState for managing local form and OTP state
import { useState } from 'react'
// This line imports the Google login button component
import { GoogleLogin } from '@react-oauth/google'
// This line imports the shared API client for backend requests
import API from '../services/api'
// This line imports navigation helpers for links and redirects
import { Link, useNavigate } from 'react-router-dom'
// This line imports authentication actions from context
import useAuth from '../hooks/useAuth'

// This part shows the login page and OTP form when required
function Login() {
    // This part keeps email and password inputs
    const [form, setForm] = useState({ email: '', password: '' })
    // This part keeps the OTP code provided by the user
    const [code, setCode] = useState('')
    // This part tracks whether the backend asked for OTP verification
    const [twoFactorRequired, setTwoFactorRequired] = useState(false)
    // This part stores the temporary token returned by the backend for OTP verification
    const [tempToken, setTempToken] = useState('')
    // This part stores setup data returned by the backend when OTP is generated
    const [setupData, setSetupData] = useState(null)
    // This part stores an optional error message for the OTP flow
    const [otpError, setOtpError] = useState('')
    // This part creates a function used to move to another page after login
    const navigate = useNavigate()
    // This line reads the login function from authentication context
    const { login } = useAuth()

    // This function updates a field when the user types in the form
    const handleChange = (e) => {
        // This line copies the previous form and updates the changed field
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // This part handles normal email and password login
    const handleSubmit = async (e) => {
        // Prevents the browser from refreshing on form submit
        e.preventDefault()

        // This part sends login details and handles success or failure
        try {
            // This part sends login credentials to the backend
            const res = await API.post('/users/login', form)

            // This branch handles the new OTP required response
            if (res.data.twoFactorRequired) {
                setTwoFactorRequired(true)
                setTempToken(res.data.tempToken)
                setSetupData(res.data.setupData || null)
                setOtpError('')
                return
            }

            // This line saves the returned token and user in auth context
            login(res.data)
            // Moves the user to the dashboard after login
            navigate('/dashboard')
        } catch (error) {
            // This part shows the backend error message when login fails
            alert(error.response?.data?.message || 'Login failed')
        }
    }

    // This part handles OTP code submission after password login
    const handleOtpSubmit = async (e) => {
        // Prevents the browser from refreshing on form submit
        e.preventDefault()

        // This part sends the entered OTP code and temp token to the backend
        try {
            const res = await API.post('/users/2fa/verify-login', { code }, {
                headers: { Authorization: tempToken }
            })

            // This line saves the final token and user in auth context
            login(res.data)
            // Moves the user to the dashboard after successful OTP verification
            navigate('/dashboard')
        } catch (error) {
            // This part stores the OTP error message so it can be shown on screen
            setOtpError(error.response?.data?.message || 'OTP verification failed')
        }
    }

    // This part handles a successful Google login response
    const handleGoogleSuccess = async (credentialResponse) => {
        // This part sends the Google credential to the backend for verification
        try {
            // Calls the backend Google login route
            const res = await API.post('/users/google', {
                // This part sends the credential token provided by Google
                credential: credentialResponse.credential
            })

            // This line saves the returned application token and user
            login(res.data)
            // Moves the user to the dashboard after login
            navigate('/dashboard')
        } catch {
            // This part shows a simple message when Google login fails
            alert('Google login failed')
        }
    }

    // This part resets the OTP flow and returns to normal email login
    const resetTwoFactor = () => {
        setTwoFactorRequired(false)
        setTempToken('')
        setSetupData(null)
        setCode('')
        setOtpError('')
    }

    // This line returns the login page layout
    return (
        // Main centered login page wrapper
        <main className="auth-page">
            {/* Two column panel with intro text and login form */}
            <section className="auth-panel">
                {/* This is the left side visual and product copy */}
                <div className="auth-copy">
                    {/* This is the small label above the main heading */}
                    <p className="eyebrow">Secure Access</p>
                    {/* This is the main product heading */}
                    <h1>Crime Investigation System</h1>
                    {/* Short description of the system */}
                    <p>Manage FIR records, review case information, and run AI-supported analysis from one workspace.</p>
                </div>

                {/* Login or OTP form depending on state */}
                <form className="auth-card" onSubmit={twoFactorRequired ? handleOtpSubmit : handleSubmit}>
                    {/* This is the form heading area */}
                    <div>
                        {/* This is the small label for the form */}
                        <p className="eyebrow">Welcome Back</p>
                        {/* This is the form title */}
                        <h2>{twoFactorRequired ? 'Enter OTP' : 'Login'}</h2>
                    </div>

                    {twoFactorRequired ? (
                        <>
                            {/* Shows instructions when OTP is required */}
                            <p>Please enter the code from your authenticator app.</p>

                            {setupData?.secret && (
                                <div className="auth-note">
                                    <p>Use this secret in your authenticator app:</p>
                                    <code>{setupData.secret}</code>
                                </div>
                            )}

                            {setupData?.otpauthUrl && (
                                <div className="auth-note">
                                    <p>Open this link to add the account:</p>
                                    <a href={setupData.otpauthUrl} target="_blank" rel="noreferrer">Set up authenticator</a>
                                </div>
                            )}

                            {/* This is the OTP code input field */}
                            <label>
                                OTP Code
                                {/* This keeps the OTP code entered by the user */}
                                <input name="code" type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter OTP code" />
                            </label>

                            {/* This submits the OTP verification form */}
                            <button className="btn btn-primary" type="submit">Verify OTP</button>

                            {/* Shows the login error if OTP verification fails */}
                            {otpError && <p className="form-error">{otpError}</p>}

                            {/* Button to go back to the normal login form */}
                            <button type="button" className="btn btn-secondary" onClick={resetTwoFactor}>Back to login</button>
                        </>
                    ) : (
                        <>
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
                                <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter password" />
                            </label>

                            {/* This submits the normal login form */}
                            <button className="btn btn-primary" type="submit">Login</button>

                            {/* Divider between password login and Google login */}
                            <div className="auth-divider">
                                <span></span>
                                <p>or</p>
                                <span></span>
                            </div>

                            {/* Holds the Google login button */}
                            <div className="google-login-wrap">
                                {/* This is the Google login button from the Google OAuth package */}
                                <GoogleLogin
                                    // Runs after Google returns a credential
                                    onSuccess={handleGoogleSuccess}
                                    // This part shows an error when Google login fails before backend verification
                                    onError={() => alert('Google login failed')}
                                    // This line uses the outlined Google button style
                                    theme="outline"
                                    // This line uses the large Google button size
                                    size="large"
                                    // This line makes the Google button fill the available width
                                    width="100%"
                                />
                            </div>

                            {/* This part links to the registration page */}
                            <p className="form-link">
                                New officer? <Link to="/register">Create account</Link>
                            </p>
                        </>
                    )}
                </form>
            </section>
        </main>
    )
}

// This line makes the login page
export default Login


