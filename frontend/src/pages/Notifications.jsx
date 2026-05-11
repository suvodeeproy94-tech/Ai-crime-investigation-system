// This page displays notifications for the current user and allows marking them as read.
import { useEffect, useState } from 'react' // This line imports state and effect hooks
import API from '../services/apiClient' // This line imports shared api client
import Navbar from '../components/Navbar' // This line imports top bar
import Sidebar from '../components/Sidebar' // This line imports left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component

// This part renders notification page for logged in user
function Notifications() {
  const [notifications, setNotifications] = useState([]) // This line stores notification list
  const [loading, setLoading] = useState(true) // This line stores loading state
  const [error, setError] = useState('') // This line stores error message

  // This effect loads notifications when page opens
  useEffect(() => {
    // This function requests notification list from backend
    const loadNotifications = async () => {
      try {
        const res = await API.get('/notifications') // This line gets notification list
        setNotifications(res.data) // This line saves notification list
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load notifications.') // This line shows loading error
      } finally {
        setLoading(false) // This line stops loading state
      }
    }
    loadNotifications() // This line starts notification loading
  }, [])

  // This function marks one notification as read
  const markAsRead = async (id) => {
    try {
      await API.patch(`/notifications/${id}/read`) // This line sends mark as read request
      setNotifications((current) => current.map((note) => note._id === id ? { ...note, read: true } : note)) // This line updates local read state
    } catch (err) {
      console.error(err) // This line logs error for debugging
    }
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
            <span className="count-pill">{notifications.filter((item) => !item.read).length} unread</span> {/* This line shows unread count */}
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
              <article key={note._id} className={`notification-card ${note.read ? 'read' : 'unread'}`}>
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
