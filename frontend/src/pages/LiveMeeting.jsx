// This file shows live meeting page where admin can create meetings and police can join.
// This line imports react hooks for state and effect handling.
import { useEffect, useState } from 'react'
// This line imports shared API client for backend requests.
import API, { getApiErrorMessage } from '../services/apiClient'
// This line imports top bar component.
import Navbar from '../components/Navbar'
// This line imports sidebar component.
import Sidebar from '../components/Sidebar'
// This line imports the shared loading logo component.
import Loader from '../components/Loader'
// This line imports auth hook to read role data.
import useAuth from '../hooks/useAuth'

// This part renders live meeting page.
function LiveMeeting() {
    // This line reads current logged in user data.
    const { user } = useAuth()
    // This line stores user role safely.
    let userRole = ''

    if (user && user.role) {
        userRole = user.role
    }
    // This line stores all active meetings.
    const [meetings, setMeetings] = useState([])
    // This line stores loading state.
    const [loading, setLoading] = useState(true)
    // This line stores error message text.
    const [error, setError] = useState('')
    // This line stores title input for new meeting.
    const [meetingTitle, setMeetingTitle] = useState('')
    // This line stores currently selected room code.
    const [selectedRoomCode, setSelectedRoomCode] = useState('')

    // This line checks whether current user is admin.
    const isAdmin = userRole === 'admin'
    // This line checks whether current user is police.
    const isPolice = userRole === 'police'

    // This line builds full meeting URL for iframe.
    let meetingUrl = ''

    if (selectedRoomCode) {
        meetingUrl = `https://meet.jit.si/${selectedRoomCode}`
    }

    // This helper returns meeting creator name safely.
    const getCreatorName = (meeting) => {
        if (meeting.createdBy && meeting.createdBy.name) {
            return meeting.createdBy.name
        }

        return 'Admin'
    }

    // This helper returns the active class for one meeting button
    const getMeetingButtonClass = (meeting) => {
        if (selectedRoomCode === meeting.roomCode) {
            return 'meeting-open-btn active'
        }

        return 'meeting-open-btn'
    }

    // This function loads active meetings from backend.
    const loadMeetings = async () => {
        // This line clears old error.
        setError('')
        try {
            // This line requests active meetings.
            const response = await API.get('/meetings')
            // This line saves meetings in state.
            setMeetings(response.data || [])
            // This line selects newest meeting by default when nothing selected.
            if (!selectedRoomCode && response.data && response.data.length > 0) {
                setSelectedRoomCode(response.data[0].roomCode)
            }
            // This line clears selected room when no active meeting exists.
            if (!response.data || response.data.length === 0) {
                setSelectedRoomCode('')
            }
        } catch (requestError) {
            // This line saves readable error.
            setError(getApiErrorMessage(requestError, 'Unable to load meetings'))
        } finally {
            // This line marks loading done.
            setLoading(false)
        }
    }

    // This effect loads meetings once and refreshes every few seconds.
    useEffect(() => {
        // This line loads meetings now.
        loadMeetings()
        // This line sets auto refresh timer for live updates.
        const intervalId = setInterval(loadMeetings, 5000)
        // This line clears timer when page closes.
        return () => clearInterval(intervalId)
    }, [])

    // This function lets admin create a meeting.
    const handleCreateMeeting = async (event) => {
        // This line stops form refresh behavior.
        event.preventDefault()
        // This line clears old error.
        setError('')
        // This line validates title input.
        if (!meetingTitle.trim()) {
            return
        }
        try {
            // This line sends create meeting request.
            await API.post('/meetings', { title: meetingTitle })
            // This line clears title field after create.
            setMeetingTitle('')
            // This line reloads meetings so new meeting appears.
            await loadMeetings()
        } catch (requestError) {
            // This line saves readable error.
            setError(getApiErrorMessage(requestError, 'Unable to create meeting'))
        }
    }

    // This function lets admin close a meeting.
    const handleCloseMeeting = async (meetingId) => {
        // This line clears old error.
        setError('')
        try {
            // This line sends close request to backend.
            await API.patch(`/meetings/${meetingId}/close`)
            // This line reloads list after close.
            await loadMeetings()
        } catch (requestError) {
            // This line saves readable error.
            setError(getApiErrorMessage(requestError, 'Unable to close meeting'))
        }
    }

    // This line returns meeting page UI.
    return (
        // This line renders shared app layout.
        <div className="app-layout">
            {/* This line renders left sidebar */}
            <Sidebar />
            {/* This line renders main content panel */}
            <main className="main-panel">
                {/* This line renders top navbar */}
                <Navbar title="Live Meeting" />
                {/* This line renders content section */}
                <section className="content-section">
                    {/* This line renders page heading */}
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Video Communication</p>
                            <h2>Live Meeting Room</h2>
                        </div>
                    </div>

                    {/* This line shows role access message for user role */}
                    {!isAdmin && !isPolice && (
                        <div className="empty-state">
                            <h3>Access denied</h3>
                            <p>Only admin and police can use live meeting.</p>
                        </div>
                    )}

                    {/* This line shows content only for admin and police */}
                    {(isAdmin || isPolice) && (
                        <div className="meeting-layout">
                            {/* This line renders left panel with meeting list and create form */}
                            <aside className="meeting-side">
                                {/* This line shows error text when any request fails */}
                                {error && <p className="form-error">{error}</p>}

                                {/* This line renders create form only for admin */}
                                {isAdmin && (
                                    <form className="form-card" onSubmit={handleCreateMeeting}>
                                        <h3>Create Meeting</h3>
                                        <label>
                                            Meeting title
                                            <input
                                                value={meetingTitle}
                                                onChange={(event) => setMeetingTitle(event.target.value)}
                                                placeholder="Enter meeting title"
                                            />
                                        </label>
                                        <button className="btn btn-primary" type="submit">Create</button>
                                    </form>
                                )}

                                {/* This line renders active meetings list */}
                                <div className="form-card">
                                    <h3>Active Meetings</h3>
                                    {loading && <Loader />}
                                    {!loading && meetings.length === 0 && <p>No active meeting right now.</p>}
                                    {!loading && meetings.map((meeting) => (
                                        <div key={meeting._id} className="meeting-item">
                                            <button
                                                className={getMeetingButtonClass(meeting)}
                                                onClick={() => setSelectedRoomCode(meeting.roomCode)}
                                            >
                                                <strong>{meeting.title}</strong>
                                                <span>Created by {getCreatorName(meeting)}</span>
                                            </button>
                                            {isAdmin && (
                                                <button className="btn btn-danger" onClick={() => handleCloseMeeting(meeting._id)}>
                                                    Close
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </aside>

                            {/* This line renders right panel with embedded meeting room */}
                            <div className="meeting-room">
                                {!selectedRoomCode && (
                                    <div className="empty-state">
                                        <h3>Select a meeting</h3>
                                        <p>Choose one active meeting from the left panel.</p>
                                    </div>
                                )}
                                {selectedRoomCode && (
                                    <iframe
                                        title="Live Meeting Room"
                                        src={meetingUrl}
                                        className="meeting-iframe"
                                        allow="camera; microphone; fullscreen; display-capture"
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

// This line exports live meeting page.
export default LiveMeeting
