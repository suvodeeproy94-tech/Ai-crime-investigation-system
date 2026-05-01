// this file defines notification API endpoints and connects them to controller actions
const express = require('express') // import express to create a router
const auth = require('../middleware/authMiddleware') // import auth middleware for protected endpoints
const {
    getNotifications,
    markAsRead,
    getUnreadCount
} = require('../controllers/notificationController') // import notification controller functions

const router = express.Router() // create a router instance

router.get('/', auth, getNotifications) // get all notifications for the logged in user
router.get('/unread/count', auth, getUnreadCount) // get unread notification count for the user
router.patch('/:id/read', auth, markAsRead) // mark a specific notification as read

module.exports = router // export the router for server.js to mount
