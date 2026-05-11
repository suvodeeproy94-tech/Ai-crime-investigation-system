// This file defines chat API routes and connects them to chat controller functions.
// This line imports express so we can create a route group.
const express = require('express')
// This line creates an express router instance.
const router = express.Router()
// This line imports auth middleware to protect chat routes.
const auth = require('../middleware/authMiddleware')
// This line imports chat controller functions.
const { getChatUsers, getConversation, sendMessage } = require('../controllers/chatController')

// This route returns users that logged in user is allowed to chat with.
router.get('/users', auth, getChatUsers)
// This route returns message history with one selected user.
router.get('/:otherUserId', auth, getConversation)
// This route sends one new message to one selected user.
router.post('/:otherUserId', auth, sendMessage)

// This line exports chat router for server setup.
module.exports = router // This line exports chat routes
