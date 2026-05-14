// This file keeps Socket.io emit code in one simple place.

// This helper safely reads the Socket.io server from the Express app.
const getSocketServer = (req) => {
    // This check returns nothing when request or app is missing.
    if (!req || !req.app) {
        return null
    }

    // This line returns the socket server saved in server.js.
    return req.app.get('io')
}

// This helper sends a live event to one logged in user.
const sendToUser = (req, userId, eventName, data) => {
    const io = getSocketServer(req) // This line gets the Socket.io server.

    // This check stops the function when socket server is not ready.
    if (!io || !userId) {
        return
    }

    // This line sends the event to the selected user room.
    io.to(`user-${userId}`).emit(eventName, data)
}

// This helper sends a live event to all connected users.
const sendToAll = (req, eventName, data) => {
    const io = getSocketServer(req) // This line gets the Socket.io server.

    // This check stops the function when socket server is not ready.
    if (!io) {
        return
    }

    // This line sends the event to every connected frontend.
    io.emit(eventName, data)
}

// This line exports socket helper functions.
module.exports = { sendToUser, sendToAll }
