// This file defines notification API routes and connects them to notification controller functions.
// This line imports express to create a route group.
const express = require('express')
// This line imports auth middleware so only logged in users can access notification routes.
const auth = require('../middleware/authMiddleware')
const {
    // This line handles loading user notifications.
    getNotifications,
    // This line handles marking one notification as read.
    markAsRead,
    // This line handles unread notification count.
    getUnreadCount
// This line imports notification controller functions.
} = require('../controllers/notificationController')

// This line creates a router instance.
const router = express.Router()

// This route returns all notifications for the logged in user.
router.get('/', auth, getNotifications)
// This route returns only unread notification count for the logged in user.
router.get('/unread/count', auth, getUnreadCount)
// This route marks one notification as read by notification id.
router.patch('/:id/read', auth, markAsRead)

// This line exports the router so server.js can mount it.
module.exports = router
