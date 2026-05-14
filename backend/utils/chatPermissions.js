// This file contains simple role rules for chat access between users.

// This function checks if one role is allowed to chat with another role.
const canRolesChat = (senderRole, receiverRole) => {
    // This rule allows admin to chat with police and user.
    if (senderRole === 'admin') {
        return ['police', 'user'].includes(receiverRole)
    }

    // This rule allows police to chat with admin and user.
    if (senderRole === 'police') {
        return ['admin', 'user'].includes(receiverRole)
    }

    // This rule allows user to chat only with police.
    if (senderRole === 'user') {
        return ['police'].includes(receiverRole)
    }

    // This line blocks unknown roles.
    return false
}

// This function returns the list of roles that current role can chat with.
const getAllowedTargetRoles = (role) => {
    // This line returns role list for admin.
    if (role === 'admin') {
        return ['police', 'user']
    }

    // This line returns role list for police.
    if (role === 'police') {
        return ['admin', 'user']
    }

    // This line returns role list for normal user.
    if (role === 'user') {
        return ['police']
    }

    // This line returns empty list for unknown role.
    return []
}

// This line exports helper functions for controllers.
module.exports = { canRolesChat, getAllowedTargetRoles }
