// This file shows the login page. It handles normal login and OTP verification.
import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import API from '../services/apiClient'
import useAuth from '../hooks/useAuth'

// This part shows the login page and a separate OTP verification step when needed
function Login() {
    // This part keeps the user email and password values
    const [form, setForm] = useState({ email: '', password: '' })
    // This part keeps the OTP code entered after the first login step
    const [code, setCode] = useState('')
    // This part tracks whether the backend requested OTP verification
    const [twoFactorRequired, setTwoFactorRequired] = useState(false)
    // This part stores the temporary token used only for OTP verification
    const [tempToken, setTempToken] = useState('')
    // This part stores optional OTP setup information from the backend
    const [setupData, setSetupData] = useState(null)
    // This part keeps an error message for the OTP verification step
    const [otpError, setOtpError] = useState('')
    // This line allows the page to move the user after login
    const navigate = useNavigate()
    // This line gives the login action from authentication context
    const { login } = useAuth()

    // This function opens the OTP screen after password or Google login
    const showTwoFactorStep = (data) => {
        setTwoFactorRequired(true)
        setTempToken(data.tempToken)
        setSetupData(data.setupData || null)
        setCode('')
        setOtpError('')
    }

    // This function updates form values as the user types
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // This function sends the email and password to the backend
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post('/users/login', form)

            if (res.data.twoFactorRequired) {
                showTwoFactorStep(res.data)
                return
            }

            login(res.data)
            navigate('/dashboard')
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed')
        }
    }

    // This function sends the OTP code to finalize login
    const handleOtpSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await API.post('/users/2fa/verify-login', { code: code.trim() }, {
                headers: { Authorization: tempToken }
            })

            login(res.data)
            navigate('/dashboard')
        } catch (error) {
            if (error.response?.data?.setupData) {
                setSetupData(error.response.data.setupData)
            }

            setOtpError(error.response?.data?.message || 'OTP verification failed')
        }
    }

    // This function handles successful login from Google authentication
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const res = await API.post('/users/google', {
                credential: credentialResponse.credential
            })

            if (res.data.twoFactorRequired) {
                showTwoFactorStep(res.data)
                return
            }

            login(res.data)
            navigate('/dashboard')
        } catch {
            alert('Google login failed')
        }
    }

    // This function resets OTP mode and returns the form to email login
    const resetTwoFactor = () => {
        setTwoFactorRequired(false)
        setTempToken('')
        setSetupData(null)
        setCode('')
        setOtpError('')
    }

    // This function keeps only six OTP numbers from what the user types
    const handleCodeChange = (e) => {
        const nextCode = e.target.value.replace(/\D/g, '').slice(0, 6)
        setCode(nextCode)
        setOtpError('')
    }

    return (
        <main className="auth-page">
            <section className="auth-panel">
                <div className="auth-copy">
                    <p className="eyebrow">Secure Access</p>
                    <h1>Crime Investigation System</h1>
                    <p>Login with your credentials. If your account uses two factor authentication, enter the OTP code next.</p>
                </div>

                <form className="auth-card" onSubmit={twoFactorRequired ? handleOtpSubmit : handleSubmit}>
                    {/* This part shows the portal name */}
                    <div className="auth-brand">
                        {/* This part shows the CrimeDesk logo */}
                        <img className="auth-brand-logo" src="/logos/logo-mark.png" alt="CrimeDesk logo" />
                        {/* This part shows the portal title and small text */}
                        <div>
                            {/* This line shows the portal title */}
                            <strong>CrimeDesk Portal</strong>
                            {/* This line shows the portal purpose */}
                            <small>Secure case access</small>
                        </div>
                    </div>

                    <div>
                        <p className="eyebrow">Welcome Back</p>
                        <h2>{twoFactorRequired ? 'Enter OTP Code' : 'Login'}</h2>
                    </div>

                    {twoFactorRequired ? (
                        <>
                            <p>Please enter the 6 digit code shown in your authenticator app.</p>

                            {setupData?.qrCodeDataUrl && (
                                <div className="qr-box">
                                    <p>Scan this QR code with Google Authenticator</p>
                                    <img className="qr-image" src={setupData.qrCodeDataUrl} alt="Authenticator QR code" />
                                </div>
                            )}

                            {setupData?.secret && (
                                <div className="auth-note">
                                    <p>Use this secret in your authenticator app:</p>
                                    <code>{setupData.secret}</code>
                                </div>
                            )}

                            {setupData?.otpauthUrl && (
                                <div className="auth-note">
                                    <p>Open this link in your authenticator app:</p>
                                    <a href={setupData.otpauthUrl} target="_blank" rel="noreferrer">Set up authenticator</a>
                                </div>
                            )}

                            <label>
                                OTP Code
                                <input
                                    name="code"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="6"
                                    value={code}
                                    onChange={handleCodeChange}
                                    placeholder="Enter OTP code"
                                />
                            </label>

                            <button className="btn btn-primary" type="submit" disabled={code.length !== 6}>Verify OTP</button>

                            {otpError && <p className="form-error">{otpError}</p>}

                            <button type="button" className="btn btn-secondary" onClick={resetTwoFactor}>Back to login</button>
                        </>
                    ) : (
                        <>
                            <label>
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter email"
                                />
                            </label>

                            <label>
                                Password
                                <input
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                />
                            </label>

                            <button className="btn btn-primary" type="submit">Login</button>

                            <div className="auth-divider">
                                <span></span>
                                <p>or</p>
                                <span></span>
                            </div>

                            <div className="google-login-wrap">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={() => alert('Google login failed')}
                                    theme="outline"
                                    size="large"
                                    width="100%"
                                />
                            </div>

                            <p className="form-link">
                                New user? <Link to="/register">Create account</Link>
                            </p>

                            {/* This line shows a short security note */}
                            <p className="auth-security-note">Protected access for citizens and investigation staff</p>
                        </>
                    )}
                </form>
            </section>
        </main>
    )
}

export default Login
