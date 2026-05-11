// This file shows a simple chat page where logged in users can chat with allowed roles.
// This line imports hooks for state, effects, and memoized values.
import { useEffect, useMemo, useState } from 'react'
// This line imports shared API client for backend calls.
import API from '../services/apiClient'
// This line imports top navigation component.
import Navbar from '../components/Navbar'
// This line imports sidebar navigation component.
import Sidebar from '../components/Sidebar'
// This line imports the shared loading logo component.
import Loader from '../components/Loader'
// This line imports auth hook so we can know current user id.
import useAuth from '../hooks/useAuth'

// This part renders the chat page content.
function Chat() {
    // This line reads current logged in user data from auth context.
    const { user } = useAuth()
    // This line stores users that current user can chat with.
    const [chatUsers, setChatUsers] = useState([])
    // This line stores selected chat user id.
    const [selectedUserId, setSelectedUserId] = useState('')
    // This line stores loaded messages for current conversation.
    const [messages, setMessages] = useState([])
    // This line stores current message input text.
    const [messageText, setMessageText] = useState('')
    // This line stores loading state for initial users fetch.
    const [loadingUsers, setLoadingUsers] = useState(true)
    // This line stores loading state for conversation fetch.
    const [loadingMessages, setLoadingMessages] = useState(false)
    // This line stores any error message for user feedback.
    const [error, setError] = useState('')

    // This line finds selected user object for display based on selected id.
    const selectedUser = useMemo(() => chatUsers.find((item) => item._id === selectedUserId), [chatUsers, selectedUserId])

    // This effect loads allowed chat users once when page opens.
    useEffect(() => {
        // This async function requests allowed chat users from backend.
        const loadUsers = async () => {
            // This line clears old error before request.
            setError('')
            try {
                // This line calls backend to get allowed users list.
                const res = await API.get('/chat/users')
                // This line saves allowed users to state.
                setChatUsers(res.data || [])
                // This line selects first user by default when list is not empty.
                if (res.data?.length) setSelectedUserId(res.data[0]._id)
            } catch (err) {
                // This line saves readable error message when request fails.
                setError(err.response?.data?.message || 'Unable to load chat users')
            } finally {
                // This line marks user loading as complete.
                setLoadingUsers(false)
            }
        }
        // This line starts user loading.
        loadUsers()
    }, [])

    // This effect loads conversation whenever selected user changes.
    useEffect(() => {
        // This line stops effect when no user is selected.
        if (!selectedUserId) return
        // This async function requests messages for selected user.
        const loadMessages = async () => {
            // This line clears old error before request.
            setError('')
            // This line marks messages as loading.
            setLoadingMessages(true)
            try {
                // This line calls backend to get message history.
                const res = await API.get(`/chat/${selectedUserId}`)
                // This line saves fetched messages to state.
                setMessages(res.data || [])
            } catch (err) {
                // This line saves readable error message when request fails.
                setError(err.response?.data?.message || 'Unable to load messages')
            } finally {
                // This line marks message loading as complete.
                setLoadingMessages(false)
            }
        }
        // This line starts message loading.
        loadMessages()

        // This timer refreshes conversation every 4 seconds for simple near real time chat.
        const intervalId = setInterval(loadMessages, 4000)
        // This cleanup removes timer when selected user changes or page closes.
        return () => clearInterval(intervalId)
    }, [selectedUserId])

    // This function sends one message to the selected user.
    const handleSendMessage = async (event) => {
        // This line prevents browser form reload behavior.
        event.preventDefault()
        // This line clears old error before send request.
        setError('')
        // This line stops sending when no user is selected.
        if (!selectedUserId) return
        // This line stops sending empty message text.
        if (!messageText.trim()) return
        try {
            // This line sends new message text to backend.
            const res = await API.post(`/chat/${selectedUserId}`, { text: messageText })
            // This line appends newly sent message to local list.
            setMessages((current) => [...current, res.data])
            // This line clears input field after successful send.
            setMessageText('')
        } catch (err) {
            // This line saves readable error message when send fails.
            setError(err.response?.data?.message || 'Unable to send message')
        }
    }

    // This line returns full page layout for chat feature.
    return (
        // This line uses shared app layout with sidebar and main panel.
        <div className="app-layout">
            {/* This line renders left navigation sidebar */}
            <Sidebar />
            {/* This line renders main content panel */}
            <main className="main-panel">
                {/* This line renders top navbar with page title */}
                <Navbar title="Chat" />
                {/* This line creates content area for chat */}
                <section className="content-section">
                    {/* This line renders page heading section */}
                    <div className="section-header">
                        {/* This line groups small heading and big heading */}
                        <div>
                            {/* This line renders small label above heading */}
                            <p className="eyebrow">Communication</p>
                            {/* This line renders main page heading */}
                            <h2>Role Based Chat</h2>
                        </div>
                    </div>

                    {/* This line shows error message when any API call fails */}
                    {error && <p className="form-error">{error}</p>}

                    {/* This line shows loading box while contacts are loading */}
                    {loadingUsers && <div className="empty-state"><Loader /></div>}

                    {/* This line shows empty state when no chat users are available */}
                    {!loadingUsers && chatUsers.length === 0 && (
                        <div className="empty-state">
                            <h3>No users available for chat</h3>
                            <p>Your role can not chat with anyone right now.</p>
                        </div>
                    )}

                    {/* This line shows chat layout when at least one chat user exists */}
                    {!loadingUsers && chatUsers.length > 0 && (
                        <div className="chat-layout">
                            {/* This line renders contact list area */}
                            <aside className="chat-users">
                                {/* This line maps each allowed user as a selectable button */}
                                {chatUsers.map((chatUser) => (
                                    <button
                                        key={chatUser._id}
                                        className={`chat-user-btn ${selectedUserId === chatUser._id ? 'active' : ''}`}
                                        onClick={() => setSelectedUserId(chatUser._id)}
                                    >
                                        <strong>{chatUser.name}</strong>
                                        <span>{chatUser.role}</span>
                                    </button>
                                ))}
                            </aside>

                            {/* This line renders conversation area */}
                            <div className="chat-window">
                                {/* This line renders current conversation title */}
                                <div className="chat-window-head">
                                    <strong>{selectedUser ? `Chat with ${selectedUser.name}` : 'Select a user'}</strong>
                                </div>

                                {/* This line renders message list area */}
                                <div className="chat-messages">
                                    {/* This line shows loading text while messages load */}
                                    {loadingMessages && <p>Loading messages...</p>}
                                    {/* This line shows empty text when conversation has no messages */}
                                    {!loadingMessages && messages.length === 0 && <p>No messages yet. Start chatting now.</p>}
                                    {/* This line renders all messages in the conversation */}
                                    {messages.map((message) => (
                                        <div
                                            key={message._id}
                                            className={`chat-message ${String(message.sender) === String(user?.id) ? 'mine' : 'theirs'}`}
                                        >
                                            <p>{message.text}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* This line renders send message form */}
                                <form className="chat-form" onSubmit={handleSendMessage}>
                                    {/* This line renders input field for new message text */}
                                    <input
                                        value={messageText}
                                        onChange={(event) => setMessageText(event.target.value)}
                                        placeholder="Type your message"
                                    />
                                    {/* This line renders send button */}
                                    <button className="btn btn-primary" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

// This line exports chat page component.
export default Chat
