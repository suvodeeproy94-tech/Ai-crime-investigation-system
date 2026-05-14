// This file creates one Socket.io client for live frontend updates.
import { io } from 'socket.io-client' // This line imports Socket.io client.

let socket = null // This variable keeps one shared socket connection.

// This function returns the same socket connection everywhere.
export function getSocket() {
    // This check creates socket only once.
    if (!socket) {
        socket = io('http://localhost:5000', {
            autoConnect: true
        })
    }

    // This line returns the shared socket.
    return socket
}

// This function joins current user room for private live updates.
export function joinUserRoom(userId) {
    const currentSocket = getSocket() // This line gets shared socket.

    // This check sends room join only when user id exists.
    if (userId) {
        currentSocket.emit('joinUserRoom', userId)
    }
}
