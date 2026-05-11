// This file handles meeting creation listing and closing logic.
// This line imports meeting model for database operations.
const Meeting = require('../models/Meeting')

// This function creates one new meeting and only admin can use it.
exports.createMeeting = async (req, res) => {
    // This line reads title from request body.
    const title = req.body.title

    // This line checks title existence.
    if (!title || !title.trim()) {
        // This line returns validation error response.
        return res.status(400).json({ message: 'Meeting title is required' })
    }

    // This line creates simple unique room code.
    const roomCode = `crime-meet-${Date.now()}`

    // This line creates meeting record in database.
    const meeting = await Meeting.create({
        title: title.trim(),
        roomCode,
        createdBy: req.user.id,
        isActive: true
    })

    // This line returns created meeting data.
    res.status(201).json(meeting)
}

// This function returns active meetings for admin and police.
exports.getActiveMeetings = async (req, res) => {
    // This line fetches active meetings sorted by new first.
    const meetings = await Meeting.find({ isActive: true })
        .populate('createdBy', 'name role')
        .sort({ createdAt: -1 })

    // This line returns active meetings list.
    res.json(meetings)
}

// This function lets admin close a meeting.
exports.closeMeeting = async (req, res) => {
    // This line reads meeting id from route params.
    const meetingId = req.params.id

    // This line finds meeting by id.
    const meeting = await Meeting.findById(meetingId)

    // This line returns error when meeting is not found.
    if (!meeting) return res.status(404).json({ message: 'Meeting not found' })

    // This line sets meeting as inactive.
    meeting.isActive = false
    // This line saves updated meeting.
    await meeting.save()

    // This line returns success response.
    res.json({ message: 'Meeting closed successfully' })
}
