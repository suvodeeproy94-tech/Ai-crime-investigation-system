// This file handles chat API actions like listing contacts sending messages and reading conversation history.
// This line imports the user model so we can list allowed chat contacts.
const User = require('../models/User')
// This line imports chat message model so we can save and read messages.
const ChatMessage = require('../models/ChatMessage')
// This line imports helper functions for role based chat rules.
const { canRolesChat, getAllowedTargetRoles } = require('../utils/chatPermissions')

// This function returns users that the logged in user can chat with.
const getChatUsers = async (req, res) => {
    // This line reads logged in user id from auth token data.
    const loggedInUserId = req.user.id
    // This line reads logged in user role from auth token data.
    const loggedInUserRole = req.user.role
    // This line gets the list of roles this user can chat with.
    const allowedRoles = getAllowedTargetRoles(loggedInUserRole)

    // This line returns empty list when no roles are allowed.
    if (allowedRoles.length === 0) {
        return res.json([])
    }

    // This line fetches users with allowed roles and excludes current user.
    const users = await User.find({
        _id: { $ne: loggedInUserId },
        role: { $in: allowedRoles }
    }).select('_id name email role')

    // This line returns the allowed chat user list.
    res.json(users)
}

// This function returns chat messages between logged in user and one selected user.
const getConversation = async (req, res) => {
    // This line reads current logged in user id.
    const myUserId = req.user.id
    // This line reads selected other user id from URL.
    const otherUserId = req.params.otherUserId

    // This line loads the selected user to check role and existence.
    const otherUser = await User.findById(otherUserId).select('_id role')
    // This line returns not found when selected user does not exist.
    if (!otherUser) return res.status(404).json({ message: 'User not found' })

    // This line checks if logged in role can chat with selected user role.
    const allowed = canRolesChat(req.user.role, otherUser.role)
    // This line blocks conversation access when roles are not allowed.
    if (!allowed) return res.status(403).json({ message: 'Chat not allowed for these roles' })

    // This line fetches all messages between both users sorted by creation time.
    const messages = await ChatMessage.find({
        $or: [
            { sender: myUserId, receiver: otherUserId },
            { sender: otherUserId, receiver: myUserId }
        ]
    }).sort({ createdAt: 1 })

    // This line returns full message list for this conversation.
    res.json(messages)
}

// This function saves one new message from logged in user to selected user.
const sendMessage = async (req, res) => {
    // This line reads current logged in user id.
    const myUserId = req.user.id
    // This line reads selected other user id from URL.
    const otherUserId = req.params.otherUserId
    // This line reads message text from request body.
    const text = req.body.text

    // This line checks if text exists and is not only spaces.
    if (!text || !text.trim()) {
        return res.status(400).json({ message: 'Message text is required' })
    }

    // This line loads selected user to check role and existence.
    const otherUser = await User.findById(otherUserId).select('_id role')
    // This line returns not found when selected user does not exist.
    if (!otherUser) return res.status(404).json({ message: 'User not found' })

    // This line checks if logged in role can chat with selected user role.
    const allowed = canRolesChat(req.user.role, otherUser.role)
    // This line blocks sending when roles are not allowed.
    if (!allowed) return res.status(403).json({ message: 'Chat not allowed for these roles' })

    // This line creates and saves one new chat message document.
    const message = await ChatMessage.create({
        sender: myUserId,
        receiver: otherUserId,
        text: text.trim()
    })

    // This line returns the newly saved message.
    res.status(201).json(message)
}

// This line exports all controller functions for chat routes.
module.exports = { getChatUsers, getConversation, sendMessage }
