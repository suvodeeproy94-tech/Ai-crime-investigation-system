// This file checks login tokens. It protects backend routes by making sure the request has a valid user.
// This line imports jsonwebtoken so protected requests can be verified
const jwt = require('jsonwebtoken')

// This line checks whether a request has a valid login token
const auth = (req, res, next) => {

    // This line reads the token from the Authorization request header
    const token = req.header('Authorization')

    // This check rejects the request when no token is provided
    if (!token) {
        return res.status(401).json({ message: 'No token' })
    }

    // This line verifies the token and attaches the logged in user data
    try {

        // Decodes the token using the private JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // This part keeps decoded user id and role on the request object
        req.user = decoded

        // Passes control to the next middleware or controller
        next()

    } catch (error) {

        // This check rejects requests with invalid or expired tokens
        res.status(400).json({ message: 'Invalid token' })
    }
}

// This line makes the authentication middleware for protected routes
module.exports = auth

