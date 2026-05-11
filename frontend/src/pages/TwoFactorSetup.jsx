// This file shows the 2FA setup page for logged in users
// It lets users generate a new authenticator secret and verify it with a code
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import API from '../services/apiClient'

function TwoFactorSetup() {
    // This part keeps the secret information returned from the backend
    const [setupData, setSetupData] = useState(null)
    // This part keeps the OTP code entered by the user for verification
    const [code, setCode] = useState('')
    // This part stores a success or instruction message for the user
    const [message, setMessage] = useState('')
    // This part stores any error messages returned from the backend
    const [error, setError] = useState('')
    // This part shows loading state while the request is in progress
    const [loading, setLoading] = useState(false)

    // This function asks the backend to create a new 2FA secret
    const handleGenerateSecret = async () => {
        setError('')
        setMessage('')
        setLoading(true)

        try {
            // Call the 2FA setup API endpoint to get secret and otpauthUrl
            const res = await API.get('/users/2fa/setup')
            setSetupData(res.data)
            setMessage('Scan the QR code in your authenticator app and then enter the code below')
        } catch (err) {
            // Show a clear error if the backend fails
            setError(err.response?.data?.message || 'Failed to generate 2FA secret')
        } finally {
            setLoading(false)
        }
    }

    // This function keeps only six OTP numbers from what the user types
    const handleCodeChange = (e) => {
        const nextCode = e.target.value.replace(/\D/g, '').slice(0, 6)
        setCode(nextCode)
        setError('')
    }

    // This function sends the OTP code to the backend to enable 2FA
    const handleVerifyCode = async (e) => {
        e.preventDefault()
        setError('')
        setMessage('')
        setLoading(true)

        try {
            // Send the code to the verify endpoint to enable two factor authentication
            await API.post('/users/2fa/verify', { code })
            setMessage('Two factor authentication is enabled successfully')
            setSetupData(null)
            setCode('')
        } catch (err) {
            // Show a clear message when the code is invalid or the request fails
            setError(err.response?.data?.message || 'Invalid OTP code')
        } finally {
            setLoading(false)
        }
    }

    // This line returns the page layout for 2FA setup
    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Two Factor Setup" />
                <section className="auth-panel">
                    <div className="auth-card">
                        <p className="eyebrow">Secure your account</p>
                        <h2>Two Factor Authentication</h2>
                        <p>Use an authenticator app to generate a one time password each time you login.</p>

                        <button className="btn btn-primary" type="button" onClick={handleGenerateSecret} disabled={loading}>
                            {loading ? 'Generating secret...' : 'Generate 2FA secret'}
                        </button>

                        {setupData?.secret && (
                            <div className="auth-note">
                                <p>Enter this secret into your authenticator app</p>
                                <code>{setupData.secret}</code>
                            </div>
                        )}

                        {setupData?.qrCodeDataUrl && (
                            <div className="qr-box">
                                <p>Scan this QR code with Google Authenticator</p>
                                <img className="qr-image" src={setupData.qrCodeDataUrl} alt="Authenticator QR code" />
                            </div>
                        )}

                        {setupData?.otpauthUrl && (
                            <div className="auth-note">
                                <p>Or open this link in your authenticator app</p>
                                <a href={setupData.otpauthUrl} target="_blank" rel="noreferrer">Set up authenticator</a>
                            </div>
                        )}

                        <form onSubmit={handleVerifyCode}>
                            <label>
                                OTP Code
                                <input
                                    name="code"
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="6"
                                    value={code}
                                    onChange={handleCodeChange}
                                    placeholder="Enter 6 digit code"
                                />
                            </label>

                            <button className="btn btn-primary" type="submit" disabled={loading || code.length !== 6}>
                                {loading ? 'Verifying...' : 'Verify code'}
                            </button>
                        </form>

                        {message && <p className="form-success">{message}</p>}
                        {error && <p className="form-error">{error}</p>}
                        <p className="form-link">After setup, logout and login again to use OTP at login.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default TwoFactorSetup
