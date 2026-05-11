// This file defines ai log routes
// This file connects ai log urls with ai log controller function
const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates ai log router

const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const { getAllAILogs } = require('../controllers/aiLogController') // This line imports ai log controller function

// This route returns ai logs for every logged in user
router.get('/', auth, getAllAILogs)

module.exports = router // This line exports ai log routes
