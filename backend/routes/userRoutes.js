// This file defines user routes. It connects register login and Google login URLs to user controller code.
// This line imports express to create a route group
const express = require('express')
// This part creates a router for user authentication endpoints
const router = express.Router()

// This line imports controller functions that handle user account requests
const { registerUser, loginUser, googleLogin, getAllUsers, setupTwoFactor, verifyTwoFactor, verifyTwoFactorLogin, disableTwoFactor } = require('../controllers/userController')
const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const authorize = require('../middleware/roleMiddleware') // This line imports role middleware

// This part handles normal account registration
router.post('/register', registerUser)
// This part handles email and password login
router.post('/login', loginUser)
// This part handles Google login
router.post('/google', googleLogin)
// This part handles second factor OTP verification after password login
router.post('/2fa/verify-login', verifyTwoFactorLogin)
// This part prepares a new 2FA secret for the authenticated user
router.get('/2fa/setup', auth, setupTwoFactor)
// This part verifies the 2FA code and enables two factor authentication
router.post('/2fa/verify', auth, verifyTwoFactor)
// This part disables two factor authentication for the authenticated user
router.post('/2fa/disable', auth, disableTwoFactor)
// This part allows admin to list all users
router.get('/', auth, authorize('admin'), getAllUsers)

// This line makes the router so server.js can mount it
module.exports = router
