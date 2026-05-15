// This file handles user accounts and adds two factor authentication support.
// This line imports the user model for database operations
const User = require('../models/User')
// This line imports bcrypt for password hashing and password checking
const bcrypt = require('bcryptjs')
// This line imports jsonwebtoken for creating login tokens and temp 2FA tokens
const jwt = require('jsonwebtoken')
// This line imports Google OAuth client for checking Google login credentials
const { OAuth2Client } = require('google-auth-library')
// This line imports QR code maker for authenticator app setup
const QRCode = require('qrcode')

// This line tries to import speakeasy for OTP support but allows backend to work without it
let speakeasy
try {
    speakeasy = require('speakeasy')
} catch (err) {
    speakeasy = null
}

// This part creates a Google client using the configured Google client id
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

// This part creates a signed JWT for an authenticated user
const createToken = (user) => {
    // Signs the user id and role into the token payload
    return jwt.sign(
        // This part keeps the user id and role inside the token
        { id: user._id, role: user.role },
        // This line uses the private JWT secret from backend .env
        process.env.JWT_SECRET,
        // This line makes the token expire after one day
        { expiresIn: '1d' }
    )
}

// This part creates a short lived JWT token used for 2FA verification
const createTwoFactorToken = (user) => {
    // Signs the user id and a twoFactor flag into the temp token
    return jwt.sign(
        { id: user._id, twoFactor: true },
        process.env.JWT_SECRET,
        // This line makes the temp token expire quickly for security
        { expiresIn: '5m' }
    )
}

// This part builds the secret link and QR image for Google Authenticator
const buildTwoFactorSetupData = async (user) => {
    // This line creates the special authenticator app link
    const otpauthUrl = speakeasy.otpauthURL({
        secret: user.twoFactorSecret,
        label: `CrimeInvestigation:${user.email}`,
        issuer: 'CrimeInvestigation',
        encoding: 'base32'
    })

    // This line changes the authenticator link into a QR image
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl)

    // This line sends the secret, link, and QR image to the frontend
    return {
        secret: user.twoFactorSecret,
        otpauthUrl,
        qrCodeDataUrl
    }
}

// This part keeps only safe user data for the frontend
const getSafeUserData = (user) => {
    // This line returns user details without password or OTP secret
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        twoFactorEnabled: user.twoFactorEnabled
    }
}

// This part reads the OTP code and keeps only numbers
const cleanOtpCode = (code) => {
    // This line removes spaces and letters from the OTP code
    return (code || '').toString().replace(/\D/g, '')
}

// This function keeps the selected signup role safe and simple
const getSignupRole = (role) => {
    // This check allows admin role when it is selected
    if (role === 'admin') {
        return 'admin'
    }

    // This check allows police role when it is selected
    if (role === 'police') {
        return 'police'
    }

    // This check keeps normal users as user role
    if (role === 'user') {
        return 'user'
    }

    // This line uses user role when no correct role is sent
    return 'user'
}

// This part checks one OTP code against one saved secret
const isOtpCodeValid = (secret, code) => {
    // This line gives a little time room for phone and computer clock difference
    return speakeasy.totp.verify({
        secret,
        encoding: 'base32',
        token: code,
        window: 4
    })
}

// Registers a new user account and prepares OTP secret for mandatory 2FA
exports.registerUser = async (req, res) => {

    // This line reads registration fields from the request body
    const { name, email, password, role } = req.body // This line reads signup fields

    // These lines remove extra spaces from name and email
    const cleanName = (name || '').trim()
    const cleanEmail = (email || '').trim().toLowerCase()

    // This line gets the selected role in a safe and simple way
    const selectedRole = getSignupRole(role)

    // This check stops signup when name is missing
    if (!cleanName) {
        return res.status(400).json({ message: 'Please enter full name' })
    }

    // This check stops signup when email is missing
    if (!cleanEmail) {
        return res.status(400).json({ message: 'Please enter email' })
    }

    // This check stops signup when email does not look valid
    if (!cleanEmail.includes('@')) {
        return res.status(400).json({ message: 'Please enter a valid email' })
    }

    // This check stops signup when password is missing
    if (!password) {
        return res.status(400).json({ message: 'Please enter password' })
    }

    // This check keeps password length simple for the project
    if (password.length < 4) {
        return res.status(400).json({ message: 'Password must be at least 4 characters' })
    }

    // This part handles registration errors with a clean API response
    try {

        // This line checks whether an account already exists with the same email
        let user = await User.findOne({ email: cleanEmail })

        // This part stops signup when the email is already used
        if (user) {
            return res.status(400).json({ message: 'User exists' }) // This line blocks duplicate signup
        }

        // This part creates a salt used for secure password hashing
        const salt = await bcrypt.genSalt(10)

        // Hashes the plain password before storing it
        const hashedPassword = await bcrypt.hash(password, salt)

        // This part creates the user document with the selected role
        user = new User({
            // This part keeps the user's display name
            name: cleanName,
            // This part keeps the user's email address
            email: cleanEmail,
            // This part keeps only the hashed password
            password: hashedPassword,
            // This line saves the selected role
            role: selectedRole
        })

        // If OTP support is available, generate a secret now for mandatory 2FA
        if (speakeasy) {
            const secret = speakeasy.generateSecret({ name: `CrimeInvestigation:${cleanEmail}` })
            user.twoFactorSecret = secret.base32
        }

        // This line saves the new user in MongoDB
        await user.save()

        // This part sends a success message after registration
        res.json({ message: 'Registered successfully' })

    } catch (error) {
        // This part sends a server error when registration fails
        res.status(500).json({ message: 'Registration failed. Please try again.' })
    }
}

// Logs in a user with email and password and begins 2FA if enabled
exports.loginUser = async (req, res) => {

    // This line reads login credentials from the request body
    const { email, password } = req.body

    // This part handles login errors with a clean API response
    try {

        // This line finds the user account by email
        const user = await User.findOne({ email })

        // This check rejects the login when no user exists for the email
        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }

        // Compares the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password)

        // This check rejects the login when the password is wrong
        if (!isMatch) {
            return res.status(400).json({ message: 'Wrong password' })
        }

        // If the user has no OTP secret yet, generate one for mandatory 2FA
        if (!user.twoFactorSecret && speakeasy) {
            const secret = speakeasy.generateSecret({ name: `CrimeInvestigation:${user.email}` })
            user.twoFactorSecret = secret.base32
            await user.save()
        }

        // If the user has an OTP secret, ask for OTP before login is complete
        if (speakeasy && user.twoFactorSecret) {
            // Create a short lived token that proves password was valid
            const tempToken = createTwoFactorToken(user)

            // Build the OTP response for the frontend
            const responseData = {
                twoFactorRequired: true,
                tempToken,
                message: 'Enter OTP to complete login'
            }

            // This line sends QR setup data so the user can scan it before entering OTP
            responseData.setupData = await buildTwoFactorSetupData(user)

            return res.json(responseData)
        }

        // This part creates a login token for the verified user
        const token = createToken(user)

        // This part sends the token and safe user details to the frontend
        res.json({
            // This line gives the frontend the token used for protected routes
            token,
            // This part sends profile data without exposing the password
            user: getSafeUserData(user)
        })

    } catch (error) {
        // This part sends a server error when login fails unexpectedly
        res.status(500).json({ error: error.message })
    }
}

// Verifies the OTP code after a password login when 2FA is enabled
exports.verifyTwoFactorLogin = async (req, res) => {

    // This line checks if speakeasy module is available for OTP support
    if (!speakeasy) {
        return res.status(500).json({ message: 'Two factor authentication is not configured' })
    }

    // This line reads the OTP code from the request body and trims extra spaces
    const code = cleanOtpCode(req.body.code)

    // This check rejects wrong length OTP codes before checking the secret
    if (code.length !== 6) {
        return res.status(400).json({ message: 'Enter a valid 6 digit OTP code' })
    }

    // This line reads the temporary 2FA token from the Authorization header
    const tempToken = req.header('Authorization')

    // This check rejects the request when the 2FA token is missing
    if (!tempToken) {
        return res.status(401).json({ message: 'Temp token is required' })
    }

    try {
        // This line decodes the temporary token to confirm the login step
        const decoded = jwt.verify(tempToken, process.env.JWT_SECRET)

        // This check rejects the request when the token is not a valid 2FA login token
        if (!decoded.twoFactor) {
            return res.status(401).json({ message: 'Invalid temp token' })
        }

        // Finds the user for the 2FA confirmation
        const user = await User.findById(decoded.id)

        // This check rejects if the user does not exist or if OTP secret is missing
        if (!user || !user.twoFactorSecret) {
            return res.status(401).json({ message: 'Two factor authentication is not configured for this user' })
        }

        // Verifies the submitted OTP code using the stored secret
        const verified = isOtpCodeValid(user.twoFactorSecret, code)

        // This check rejects invalid or expired OTP codes
        if (!verified) {
            return res.status(400).json({
                message: 'Invalid OTP code',
                setupData: await buildTwoFactorSetupData(user)
            })
        }

        // Enable two factor authentication permanently after successful first OTP
        if (!user.twoFactorEnabled) {
            user.twoFactorEnabled = true
            await user.save()
        }

        // This part creates the normal application token after successful OTP
        const token = createToken(user)

        // This part sends the token and safe user details to the frontend
        res.json({
            token,
            user: getSafeUserData(user)
        })

    } catch (error) {
        // This part handles expired or invalid temp tokens
        res.status(401).json({ message: 'Invalid or expired temp token' })
    }
}

// Sets up two factor authentication by generating a secret for the authenticated user
exports.setupTwoFactor = async (req, res) => {

    // This line checks if speakeasy module is available for OTP support
    if (!speakeasy) {
        return res.status(500).json({ message: 'Two factor authentication is not configured' })
    }

    // This line reads the authenticated user id from auth middleware
    const userId = req.user.id

    try {
        // This line finds the current user record
        const user = await User.findById(userId)

        // This check rejects when the user is not found
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // This check rejects if 2FA is already enabled
        if (user.twoFactorEnabled) {
            return res.status(400).json({ message: 'Two factor authentication already enabled' })
        }

        // This line generates a new secret for the authenticator app
        const secret = speakeasy.generateSecret({ name: `CrimeInvestigation:${user.email}` })

        // This line saves the secret in the user account for later verification
        user.twoFactorSecret = secret.base32
        await user.save()

        // This part prepares the setup data for the frontend
        const setupData = await buildTwoFactorSetupData(user)

        // This part sends the secret, link, and QR image to the frontend
        res.json({
            secret: setupData.secret,
            otpauthUrl: setupData.otpauthUrl,
            qrCodeDataUrl: setupData.qrCodeDataUrl,
            message: 'Use this secret in your authenticator app and verify with the code'
        })

    } catch (error) {
        // This part sends a server error when 2FA setup fails
        res.status(500).json({ error: error.message })
    }
}

// Verifies the OTP code and enables two factor authentication for the user
exports.verifyTwoFactor = async (req, res) => {

    // This line checks if speakeasy module is available for OTP support
    if (!speakeasy) {
        return res.status(500).json({ message: 'Two factor authentication is not configured' })
    }

    // This line reads the OTP code from the request body
    const code = cleanOtpCode(req.body.code)
    const userId = req.user.id

    // This check rejects wrong length OTP codes before checking the secret
    if (code.length !== 6) {
        return res.status(400).json({ message: 'Enter a valid 6 digit OTP code' })
    }

    try {
        // This line finds the current user record
        const user = await User.findById(userId)

        // This check rejects when the user is not found
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // This check rejects when there is no 2FA secret to verify against
        if (!user.twoFactorSecret) {
            return res.status(400).json({ message: 'Setup two factor authentication first' })
        }

        // Verifies the submitted OTP code using the stored secret
        const verified = isOtpCodeValid(user.twoFactorSecret, code)

        // This check rejects invalid OTP codes
        if (!verified) {
            return res.status(400).json({ message: 'Invalid OTP code' })
        }

        // This line turns on two factor authentication for the user
        user.twoFactorEnabled = true
        await user.save()

        // This part sends a success response after enabling 2FA
        res.json({ message: 'Two factor authentication enabled' })

    } catch (error) {
        // This part sends a server error when 2FA verification fails
        res.status(500).json({ error: error.message })
    }
}

// Disables two factor authentication for the authenticated user
exports.disableTwoFactor = async (req, res) => {

    // This line checks if speakeasy module is available for OTP support
    if (!speakeasy) {
        return res.status(500).json({ message: 'Two factor authentication is not configured' })
    }

    // This line reads the OTP code from the request body
    const code = cleanOtpCode(req.body.code)
    const userId = req.user.id

    // This check rejects wrong length OTP codes before checking the secret
    if (code.length !== 6) {
        return res.status(400).json({ message: 'Enter a valid 6 digit OTP code' })
    }

    try {
        // This line finds the current user record
        const user = await User.findById(userId)

        // This check rejects when the user is not found
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // This check rejects when 2FA is not enabled currently
        if (!user.twoFactorEnabled || !user.twoFactorSecret) {
            return res.status(400).json({ message: 'Two factor authentication is not active' })
        }

        // Verifies the submitted OTP code using the stored secret
        const verified = isOtpCodeValid(user.twoFactorSecret, code)

        // This check rejects invalid OTP codes
        if (!verified) {
            return res.status(400).json({ message: 'Invalid OTP code' })
        }

        // This line turns off two factor authentication and removes the secret
        user.twoFactorEnabled = false
        user.twoFactorSecret = undefined
        await user.save()

        // This part sends a response after successful disable
        res.json({ message: 'Two factor authentication disabled' })

    } catch (error) {
        // This part sends a server error when 2FA disable fails
        res.status(500).json({ error: error.message })
    }
}

// Logs in or creates a user with a Google credential
exports.googleLogin = async (req, res) => {

    // This line reads the Google credential token sent by the frontend
    const { credential } = req.body

    // This step stops Google login when the Google client id is missing
    if (!process.env.GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID === 'your_google_client_id') {
        return res.status(500).json({ message: 'Google Client ID is not configured' })
    }

    // This step stops Google login when the frontend did not send a credential
    if (!credential) {
        return res.status(400).json({ message: 'Google credential is required' })
    }

    // This line checks the Google credential and creates or logs in the user
    try {

        // This line verifies the Google id token against this app's client id
        const ticket = await googleClient.verifyIdToken({
            // Passes the token received from Google login
            idToken: credential,
            // Confirms the token was issued for this app
            audience: process.env.GOOGLE_CLIENT_ID
        })

        // This line reads the verified Google profile information
        const payload = ticket.getPayload()

        // This check rejects accounts whose Google email is not verified
        if (!payload.email_verified) {
            return res.status(400).json({ message: 'Google email is not verified' })
        }

        // Looks for an existing local user with the same Google email
        let user = await User.findOne({ email: payload.email })

        // This part creates a new local user when this Google account is new
        if (!user) {
            // This part creates a hashed fallback password because the schema requires one
            const randomPassword = await bcrypt.hash(payload.sub, 10)

            // Builds the user document from verified Google profile details
            user = new User({
                // This part keeps the Google profile name
                name: payload.name,
                // This part keeps the verified Google email
                email: payload.email,
                // This part keeps the generated hashed password
                password: randomPassword
            })

            // This line saves the new Google based user in MongoDB
            await user.save()
        }

        // If the user has no OTP secret yet, generate one for mandatory 2FA
        if (!user.twoFactorSecret && speakeasy) {
            const secret = speakeasy.generateSecret({ name: `CrimeInvestigation:${user.email}` })
            user.twoFactorSecret = secret.base32
            await user.save()
        }

        // If the user has an OTP secret, ask for OTP before login is complete
        if (speakeasy && user.twoFactorSecret) {
            const tempToken = createTwoFactorToken(user)
            const responseData = {
                twoFactorRequired: true,
                tempToken,
                message: 'Enter OTP to complete login'
            }

            // This line sends QR setup data so the user can scan it before entering OTP
            responseData.setupData = await buildTwoFactorSetupData(user)

            return res.json(responseData)
        }

        // This part creates a normal application token for the user
        const token = createToken(user)

        // This part sends the token and safe user details to the frontend
        res.json({
            // This line gives the frontend the token used for protected requests
            token,
            // This part sends profile data without exposing the password
            user: getSafeUserData(user)
        })

    } catch (error) {
        // This part sends an unauthorized response when Google verification fails
        res.status(401).json({ message: 'Google authentication failed' })
    }
}

// List all registered users. Only admin may use this endpoint.
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('name email role createdAt updatedAt')
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
