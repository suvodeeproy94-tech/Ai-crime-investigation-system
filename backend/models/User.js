// This file defines the user data shape. It stores account details login password data and the user role.
// This line imports mongoose for defining the user collection structure
const mongoose = require('mongoose')

// This part describes the fields stored for each user account
const userSchema = new mongoose.Schema({

    // This part keeps the user's full name
    name: {
        // This line saves the name as text
        type: String,
        // Requires a name before saving
        required: true
    },

    // This part keeps the user's email address
    email: {
        // This line saves the email as text
        type: String,
        // Requires an email before saving
        required: true,
        // Prevents two users from sharing the same email
        unique: true
    },

    // This part keeps the user's hashed password
    password: {
        // This line saves the hashed password as text
        type: String,
        // Requires a password before saving
        required: true
    },

    // This part keeps the user's permission level
    role: {
        // This line saves the role as text
        type: String,
        // Restricts the role to the known access levels
        enum: ['admin', 'police', 'user'],
        // This line gives new accounts the user role by default
        default: 'user'
    },

    // This part keeps whether the user has enabled two factor authentication
    twoFactorEnabled: {
        // This line saves the 2FA state as true or false
        type: Boolean,
        // This line makes 2FA disabled by default for new accounts
        default: false
    },

    // This part keeps the secret used by authenticator apps for one time passwords
    twoFactorSecret: {
        // This line saves the secret as text so it can validate OTP codes
        type: String
    }

// This line adds createdAt and updatedAt fields automatically
}, { timestamps: true })

// This part creates and exports the User model
module.exports = mongoose.model('User', userSchema)

