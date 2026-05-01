// this controller manages notification retrieval and read status updates
const Notification = require('../models/Notification') // import the Notification model

exports.getNotifications = async (req, res) => {
    try {
        const filter = { recipient: req.user.id } // only load notifications for the current user
        const notifications = await Notification.find(filter) // find matching notifications
            .sort({ createdAt: -1 }) // sort newest first
            .populate('createdBy', 'name email role') // attach sender user info
            .populate('relatedCase', 'title status') // attach related case details

        res.json(notifications) // return the notification list
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if query fails
    }
}

exports.markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id) // find the notification by id
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' }) // return not found when missing
        }

        if (String(notification.recipient) !== req.user.id) {
            return res.status(403).json({ message: 'Access denied' }) // only the recipient may mark read
        }

        notification.read = true // set the notification as read
        await notification.save() // save the updated notification
        res.json(notification) // return the notification record
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if update fails
    }
}

exports.getUnreadCount = async (req, res) => {
    try {
        const count = await Notification.countDocuments({ recipient: req.user.id, read: false }) // count unread notifications for the user
        res.json({ unread: count }) // return the unread count
    } catch (error) {
        res.status(500).json({ error: error.message }) // return server error if count fails
    }
}
