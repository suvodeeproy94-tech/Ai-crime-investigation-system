// This file defines activity log routes.
const express = require('express') // This line imports express for route creation.
const router = express.Router() // This line creates activity log router.

const auth = require('../middleware/authMiddleware') // This line imports auth middleware.
const { getActivityLogs } = require('../controllers/activityLogController') // This line imports controller function.

// This route returns activity logs for the logged in user.
router.get('/', auth, getActivityLogs)

// This line exports activity log routes.
module.exports = router
