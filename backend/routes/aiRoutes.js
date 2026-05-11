// This file defines AI routes.
// It protects the AI analyze URL and connects it to the controller.

const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates ai router

const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const { analyzeText } = require('../controllers/aiController') // This line imports ai controller function

// This route receives case notes and returns an AI analysis.
router.post('/analyze', auth, analyzeText)

module.exports = router // This line exports ai routes

