// This page displays notifications for the current user and allows marking them as read.
import { useEffect, useState } from 'react' // This line imports state and effect hooks
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports shared api client
import Navbar from '../components/Navbar' // This line imports top bar
import Sidebar from '../components/Sidebar' // This line imports left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component
import useAuth from '../hooks/useAuth' // This line imports current user data
import { getSocket, joinUserRoom } from '../services/socketClient' // This line imports socket helpers

// This part renders notification page for logged in user
function Notifications() {
  const { user } = useAuth() // This line reads logged in user data
  const [notifications, setNotifications] = useState([]) // This line stores notification list
  const [loading, setLoading] = useState(true) // This line stores loading state
  const [error, setError] = useState('') // This line stores error message

  // This function requests notification list from backend
  const loadNotifications = async () => {
    try {
      const response = await API.get('/notifications') // This line gets notification list
      setNotifications(response.data) // This line saves notification list
    } catch (requestError) {
      setError(getApiErrorMessage(requestError, 'Unable to load notifications.')) // This line shows loading error
    } finally {
      setLoading(false) // This line stops loading state
    }
  }

  // This effect loads notifications when page opens
  useEffect(() => {
    loadNotifications() // This line starts notification loading
  }, [])

  // This effect listens for live notifications from Socket.io
  useEffect(() => {
    // This check joins private room only when user id is available
    if (user && user.id) {
      joinUserRoom(user.id)
    }

    const socket = getSocket() // This line gets shared socket connection

    // This function reloads notifications after new notification event
    const handleNewNotification = () => {
      loadNotifications()
    }

    socket.on('newNotification', handleNewNotification)

    // This cleanup removes listener when page closes
    return () => {
      socket.off('newNotification', handleNewNotification)
    }
  }, [user])

  // This function marks one notification as read
  const markAsRead = async (id) => {
    try {
      await API.patch(`/notifications/${id}/read`) // This line sends mark as read request

      // This loop builds an updated notification list
      const updatedNotifications = []

      for (const note of notifications) {
        if (note._id === id) {
          updatedNotifications.push({
            _id: note._id,
            title: note.title,
            message: note.message,
            read: true,
            relatedCase: note.relatedCase,
            createdAt: note.createdAt,
            updatedAt: note.updatedAt,
            createdBy: note.createdBy
          })
        } else {
          updatedNotifications.push(note)
        }
      }

      setNotifications(updatedNotifications) // This line updates local read state
    } catch (requestError) {
      console.error(requestError) // This line logs error for debugging
    }
  }

  // This helper counts unread notifications with a simple loop
  const getUnreadCount = () => {
    let count = 0

    for (const item of notifications) {
      if (!item.read) {
        count += 1
      }
    }

    return count
  }

  // This helper returns the card class based on read state
  const getNotificationClass = (note) => {
    if (note.read) {
      return 'notification-card read'
    }

    return 'notification-card unread'
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-panel">
        <Navbar title="Notifications" />
        <section className="content-section">
          <div className="section-header">
            <div>
              <p className="eyebrow">Updates</p>
              <h2>Your Notifications</h2>
            </div>
            <span className="count-pill">{getUnreadCount()} unread</span> {/* This line shows unread count */}
          </div>

          {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}
          {!loading && error && <div className="empty-state error-state">{error}</div>} {/* This line shows error state */}
          {!loading && !error && notifications.length === 0 && (
            <div className="empty-state">
              <h3>No notifications yet</h3>
              <p>You will see updates when evidence or case activity occurs.</p>
            </div>
          )}

          <div className="notification-list">
            {notifications.map((note) => (
              <article key={note._id} className={getNotificationClass(note)}>
                <div>
                  <strong>{note.title}</strong>
                  <p>{note.message}</p>
                  {note.relatedCase && <small>Case: {note.relatedCase.title}</small>} {/* This line shows related case title */}
                </div>
                {!note.read && (
                  <button className="btn-small" onClick={() => markAsRead(note._id)}>
                    Mark read
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Notifications
