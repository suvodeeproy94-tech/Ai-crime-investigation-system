// This file defines AI log routes and connects URLs with controller functions.
const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates ai log router

const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const { getAllAILogs } = require('../controllers/aiLogController') // This line imports ai log controller function

// This route returns ai logs for every logged in user
router.get('/', auth, getAllAILogs)

// This line exports ai log routes
module.exports = router
