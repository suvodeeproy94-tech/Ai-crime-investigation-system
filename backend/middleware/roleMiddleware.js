// This file checks user roles. It makes sure only allowed roles can use selected backend routes.
// This part creates middleware that allows only selected roles
const authorize = (...roles) => {
    // This line returns the actual Express middleware function
    return (req, res, next) => {
        // This check rejects the request when authentication did not attach a user
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' })
        }

        // This check rejects the request when the user's role is not allowed
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied' })
        }

        // This check allows the request to continue when the role is valid
        next()
    }
}

// This line makes the role checking middleware factory
module.exports = authorize

