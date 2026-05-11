// This file defines meeting API routes with role based access.
// This line imports express for router.
const express = require('express')
// This line creates router instance.
const router = express.Router()
// This line imports auth middleware.
const auth = require('../middleware/authMiddleware')
// This line imports role middleware.
const authorize = require('../middleware/roleMiddleware')
// This line imports meeting controller functions.
const { createMeeting, getActiveMeetings, closeMeeting } = require('../controllers/meetingController')

// This route lets admin and police view active meetings list.
router.get('/', auth, authorize('admin', 'police'), getActiveMeetings)
// This route lets only admin create a meeting.
router.post('/', auth, authorize('admin'), createMeeting)
// This route lets only admin close a meeting.
router.patch('/:id/close', auth, authorize('admin'), closeMeeting)

// This line exports router.
module.exports = router // This line exports meeting routes
