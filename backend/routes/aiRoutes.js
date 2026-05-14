// This file defines AI routes.
// It protects the AI analyze URL and connects it to the controller.

const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates ai router

const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const { analyzeText, generateReport } = require('../controllers/aiController') // This line imports ai controller functions

// This route receives case notes and returns an AI analysis.
router.post('/analyze', auth, analyzeText)

// This route receives raw crime notes and returns an AI generated report.
router.post('/generate-report', auth, generateReport)

module.exports = router // This line exports ai routes

