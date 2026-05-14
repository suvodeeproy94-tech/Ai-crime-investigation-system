// This file handles chat actions like contacts, messages, and conversation history.
const User = require('../models/User') // This line imports the User model.
const ChatMessage = require('../models/ChatMessage') // This line imports the ChatMessage model.
const { createActivityLog } = require('../utils/activityLogger') // This line imports activity log helper.
const { sendToUser } = require('../utils/socketHelper') // This line imports socket helper.
// This line imports chat role helpers.
const {
    canRolesChat,
    getAllowedTargetRoles
} = require('../utils/chatPermissions')

// This function returns users that the logged in user can chat with.
const getChatUsers = async (req, res) => {
    try {
        // Read logged in user details from the auth middleware.
        const loggedInUserId = req.user.id
        const loggedInUserRole = req.user.role

        // Get the roles this user is allowed to chat with.
        const allowedRoles = getAllowedTargetRoles(loggedInUserRole)

        // Return an empty list when no chat roles are allowed.
        if (allowedRoles.length === 0) {
            return res.json([])
        }

        // Find allowed users and remove the current user from the list.
        const users = await User.find({
            _id: { $ne: loggedInUserId },
            role: { $in: allowedRoles }
        }).select('_id name email role')

        // Return the allowed chat users.
        res.json(users)
    } catch (error) {
        // Return a simple server error if users cannot be loaded.
        res.status(500).json({ error: error.message })
    }
}

// This function returns chat messages between logged in user and one selected user.
const getConversation = async (req, res) => {
    try {
        // Read both user ids needed for the conversation.
        const myUserId = req.user.id
        const otherUserId = req.params.otherUserId

        // Load the selected user to check role and existence.
        const otherUser = await User.findById(otherUserId).select('_id role')

        if (!otherUser) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Check if these two roles are allowed to chat.
        const allowed = canRolesChat(req.user.role, otherUser.role)

        if (!allowed) {
            return res.status(403).json({ message: 'Chat not allowed for these roles' })
        }

        // Find messages sent in either direction between these two users.
        const messages = await ChatMessage.find({
            $or: [
                { sender: myUserId, receiver: otherUserId },
                { sender: otherUserId, receiver: myUserId }
            ]
        }).sort({ createdAt: 1 })

        // Return the message list.
        res.json(messages)
    } catch (error) {
        // Return a simple server error if messages cannot be loaded.
        res.status(500).json({ error: error.message })
    }
}

// This function saves one new message from logged in user to selected user.
const sendMessage = async (req, res) => {
    try {
        // Read sender, receiver, and message text.
        const myUserId = req.user.id
        const otherUserId = req.params.otherUserId
        const text = req.body.text

        // Message text is required and cannot be only spaces.
        if (!text || !text.trim()) {
            return res.status(400).json({ message: 'Message text is required' })
        }

        // Load selected user to check role and existence.
        const otherUser = await User.findById(otherUserId).select('_id role')

        if (!otherUser) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Check if these two roles are allowed to chat.
        const allowed = canRolesChat(req.user.role, otherUser.role)

        if (!allowed) {
            return res.status(403).json({ message: 'Chat not allowed for these roles' })
        }

        // Create and save one new chat message.
        const message = await ChatMessage.create({
            sender: myUserId,
            receiver: otherUserId,
            text: text.trim()
        })

        // Save an audit log for sending a chat message.
        await createActivityLog(req, 'send', 'chat', 'Sent a chat message', String(message._id))

        // Send the message live to the receiver.
        sendToUser(req, otherUserId, 'newMessage', message)

        // Send the message live to the sender also.
        sendToUser(req, myUserId, 'newMessage', message)

        // Return the newly saved message.
        res.status(201).json(message)
    } catch (error) {
        // Return a simple server error if sending fails.
        res.status(500).json({ error: error.message })
    }
}

// This line exports all controller functions for chat routes.
module.exports = { getChatUsers, getConversation, sendMessage }
