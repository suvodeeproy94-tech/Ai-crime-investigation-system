// This file creates JSON web tokens for authenticated users.
const jwt = require('jsonwebtoken')

// Generates a signed token for the given user object
const generateToken = (user) => {
    // Signs the user id and role into the token payload
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        // Makes the token expire after one day
        expiresIn: '1d'
    })
}

module.exports = generateToken
