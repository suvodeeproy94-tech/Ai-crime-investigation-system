// This file defines AI routes. It connects the AI analyze URL to login checking and the AI controller.
// This line imports express to create a route group
const express = require('express')
// This part creates a router for AI related endpoints
const router = express.Router()

// This line imports authentication middleware to protect AI routes
const auth = require('../middleware/authMiddleware')
// This line imports the AI analysis controller function
const { analyzeText } = require('../controllers/aiController')

// This part handles POST requests that send text for AI analysis
router.post('/analyze', auth, analyzeText)

// This line makes the router so server.js can mount it
module.exports = router

