// This file shows the left sidebar menu. It displays navigation links user role and the logout button.
// This line imports NavLink so menu links can show active state
import { NavLink } from 'react-router-dom'
// This line imports auth data for user role and logout action
import useAuth from '../hooks/useAuth'

// This part shows the left navigation panel for logged in pages
function Sidebar() {
    // This line reads the current user and logout function from auth context
    const { user, logout } = useAuth()

    // This line returns the sidebar navigation and user box
    return (
        // Main sidebar container
        <aside className="sidebar">
            {/* This part shows the application brand area */}
            <div className="brand">
                {/* This part shows the short brand mark */}
                <div className="brand-mark">CI</div>
                {/* This part shows the application name and subtitle */}
                <div>
                    <strong>CrimeDesk</strong>
                    <span>Investigation Portal</span>
                </div>
            </div>

            {/* This part shows navigation links based on the current role */}
            <nav className="side-nav">
                {/* Dashboard is available to every logged in user */}
                <NavLink to="/dashboard">Dashboard</NavLink>
                {/* Complaint submission is available only to normal users */}
                {['user'].includes(user?.role) && <NavLink to="/create">Submit Complaint</NavLink>}
                {/* Create FIR is available only to police users */}
                {['police'].includes(user?.role) && <NavLink to="/create-fir">Create FIR</NavLink>}
                {/* Evidence upload is available only to police and admins */}
                {['police', 'admin'].includes(user?.role) && <NavLink to="/evidence">Upload Evidence</NavLink>}
                {/* Notifications are available to every logged in user */}
                <NavLink to="/notifications">Notifications</NavLink>
                {/* AI Analysis is available to police and admins */}
                {['police', 'admin'].includes(user?.role) && <NavLink to="/ai">AI Analysis</NavLink>}
            </nav>

            {/* This part shows the logged in user details and logout button */}
            <div className="user-box">
                {/* This part shows the user name or a fallback label */}
                <span>{user?.name || 'Logged in'}</span>
                {/* This part shows the user's role */}
                <strong>{user?.role}</strong>
                {/* Logs the user out when clicked */}
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </aside>
    )
}

// This line makes the sidebar component
export default Sidebar


