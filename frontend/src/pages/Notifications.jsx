// This page displays notifications for the current user and allows marking them as read.
import { useEffect, useState } from 'react'
import API from '../services/api'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const res = await API.get('/notifications')
        setNotifications(res.data)
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load notifications.')
      } finally {
        setLoading(false)
      }
    }
    loadNotifications()
  }, [])

  const markAsRead = async (id) => {
    try {
      await API.patch(`/notifications/${id}/read`)
      setNotifications((current) => current.map((note) => note._id === id ? { ...note, read: true } : note))
    } catch (err) {
      console.error(err)
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
            <span className="count-pill">{notifications.filter((item) => !item.read).length} unread</span>
          </div>

          {loading && <div className="empty-state">Loading notifications…</div>}
          {!loading && error && <div className="empty-state error-state">{error}</div>}
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
                  {note.relatedCase && <small>Case: {note.relatedCase.title}</small>}
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
