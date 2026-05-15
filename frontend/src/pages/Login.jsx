// This file shows the login page. It handles normal login and OTP verification.
import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import { Link, useNavigate } from 'react-router-dom'
import API, { getApiErrorMessage } from '../services/apiClient'
import useAuth from '../hooks/useAuth'
// This line imports the 3D rotating logo component
import RotatingLogo3D from '../components/RotatingLogo3D'

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
    const handleChange = (event) => {
        // This line reads the changed input name
        const fieldName = event.target.name

        // This line reads the changed input value
        const fieldValue = event.target.value

        // Update email without using a shortcut
        if (fieldName === 'email') {
            setForm({
                email: fieldValue,
                password: form.password
            })
        }

        // Update password without using a shortcut
        if (fieldName === 'password') {
            setForm({
                email: form.email,
                password: fieldValue
            })
        }
    }

    // This function sends the email and password to the backend
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await API.post('/users/login', form)

            if (response.data.twoFactorRequired) {
                showTwoFactorStep(response.data)
                return
            }

            login(response.data)
            navigate('/dashboard')
        } catch (error) {
            alert(getApiErrorMessage(error, 'Login failed'))
        }
    }

    // This function sends the OTP code to finalize login
    const handleOtpSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await API.post('/users/2fa/verify-login', { code: code.trim() }, {
                headers: { Authorization: tempToken }
            })

            login(response.data)
            navigate('/dashboard')
        } catch (error) {
            // This part updates setup data if the backend sends it again
            if (error && error.response && error.response.data && error.response.data.setupData) {
                setSetupData(error.response.data.setupData)
            }

            setOtpError(getApiErrorMessage(error, 'OTP verification failed'))
        }
    }

    // This function handles successful login from Google authentication
    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            const response = await API.post('/users/google', {
                credential: credentialResponse.credential
            })

            if (response.data.twoFactorRequired) {
                showTwoFactorStep(response.data)
                return
            }

            login(response.data)
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
    const handleCodeChange = (event) => {
        const nextCode = event.target.value.replace(/\D/g, '').slice(0, 6)
        setCode(nextCode)
        setOtpError('')
    }

    // These values keep the OTP setup checks easy to read in JSX
    const hasQrCode = setupData && setupData.qrCodeDataUrl
    const hasSecret = setupData && setupData.secret
    const hasSetupLink = setupData && setupData.otpauthUrl

    // This line stores the form title shown above inputs
    let formTitle = 'Login'

    // This line stores the submit function used by the form
    let submitHandler = handleSubmit

    // This part stores normal login fields by default
    let formFields = (
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
    )

    // This part replaces normal login fields with OTP fields when 2FA is needed
    if (twoFactorRequired) {
        formTitle = 'Scan QR And Enter OTP'
        submitHandler = handleOtpSubmit
        formFields = (
            <>
                <p>Scan the QR code in your authenticator app. Then enter the 6 digit code shown in the app.</p>

                {hasQrCode && (
                    <div className="qr-box">
                        <p>Scan this QR code first</p>
                        <img className="qr-image" src={setupData.qrCodeDataUrl} alt="Authenticator QR code" />
                    </div>
                )}

                {hasSecret && (
                    <div className="auth-note">
                        <p>If QR scan does not work, use this secret:</p>
                        <code>{setupData.secret}</code>
                    </div>
                )}

                {hasSetupLink && (
                    <div className="auth-note">
                        <p>You can also open this setup link:</p>
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

                <button className="btn btn-primary" type="submit" disabled={code.length !== 6}>
                    Verify OTP
                </button>

                {otpError && <p className="form-error">{otpError}</p>}

                <button type="button" className="btn btn-secondary" onClick={resetTwoFactor}>
                    Back to login
                </button>
            </>
        )
    }

    return (
        <main className="auth-page">
            <section className="auth-panel">
                <div className="auth-copy">
                    {/* This part shows the big rotating logo above the login page title */}
                    <div className="auth-copy-logo-box">
                        {/* This part shows the uploaded logo as a real 3D rotating logo */}
                        <RotatingLogo3D />
                    </div>

                    <p className="eyebrow">Secure Access</p>
                    <h1>Crime Investigation System</h1>
                    <p>Login with your credentials. If your account uses two factor authentication, enter the OTP code next.</p>
                </div>

                <form className="auth-card" onSubmit={submitHandler}>
                    {/* This part shows the portal name */}
                    <div className="auth-brand">
                        {/* This part shows the normal small CrimeDesk logo */}
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
                        <h2>{formTitle}</h2>
                    </div>

                    {formFields}
                </form>
            </section>
        </main>
    )
}

export default Login
