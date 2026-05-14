// This file shows the left sidebar menu.
// This file shows navigation links, user role, and the logout button.
// This line imports NavLink so menu links can show active state
import { NavLink } from 'react-router-dom'
// This line imports auth data for user role and logout action
import useAuth from '../hooks/useAuth'

// This object stores role icon paths in one place
const roleIcons = {
    user: '/logos/role-user.png',
    police: '/logos/role-police.png',
    admin: '/logos/role-admin.png'
}

// This list stores sidebar links and their matching icons
const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '/logos/logo-mark.png' },
    { label: 'Submit Complaint', path: '/create', icon: '/logos/icon-fir.png', roles: ['user'] },
    { label: 'Create FIR', path: '/create-fir', icon: '/logos/icon-fir.png', roles: ['police', 'admin'] },
    { label: 'Evidence', path: '/evidence', icon: '/logos/icon-evidence.png', roles: ['police', 'admin'] },
    { label: 'Cases', path: '/cases', icon: '/logos/icon-cases.png' },
    { label: 'Crime Map', path: '/crime-map', icon: '/logos/icon-cases.png' },
    { label: 'Suspects', path: '/suspects', icon: '/logos/icon-suspects.png', roles: ['police', 'admin'] },
    { label: 'Reports', path: '/reports', icon: '/logos/icon-reports.png' },
    { label: 'Notifications', path: '/notifications', icon: '/logos/icon-notifications.png' },
    { label: 'Chat', path: '/chat', icon: '/logos/role-user.png' },
    { label: 'Live Meeting', path: '/meetings', icon: '/logos/role-admin.png', roles: ['admin', 'police'] },
    { label: 'AI Analysis', path: '/ai', icon: '/logos/icon-ai.png', roles: ['police', 'admin'] },
    { label: 'AI Logs', path: '/ai-logs', icon: '/logos/icon-alert.png' },
    { label: 'Activity Logs', path: '/activity-logs', icon: '/logos/icon-alert.png' },
    { label: 'Users', path: '/users', icon: '/logos/role-admin.png', roles: ['admin'] }
]

// This part shows the left navigation panel for logged in pages.
function Sidebar() {
    // This line reads the current user and logout function from auth context
    const { user, logout } = useAuth()

    // This line stores the current role in a simple variable
    let userRole = 'user'

    if (user && user.role) {
        userRole = user.role
    }

    // This line stores the display name shown in the sidebar
    let userName = 'Logged in'

    if (user && user.name) {
        userName = user.name
    }

    // This line stores the icon that matches the current user role
    const roleIcon = roleIcons[userRole] || roleIcons.user

    // This function checks whether a menu item should be visible
    const canShowNavItem = (item) => {
        if (!item.roles) {
            return true
        }

        return item.roles.includes(userRole)
    }

    // This list stores only menu items visible for the current role
    const visibleNavItems = []

    // This loop keeps the role filtering easy to read
    for (const item of navItems) {
        if (canShowNavItem(item)) {
            visibleNavItems.push(item)
        }
    }

    // This line returns the sidebar navigation and user box.
    return (
        // This line renders the main sidebar container.
        <aside className="sidebar">
            {/* This part shows the application brand area */}
            <div className="brand">
                {/* This part shows the CrimeDesk logo */}
                <img className="brand-logo" src="/logos/logo-mark.png" alt="CrimeDesk logo" />
                {/* This part shows the application name and subtitle */}
                <div>
                    <strong>CrimeDesk</strong>
                    <span>Investigation Portal</span>
                </div>
            </div>

            {/* This part shows navigation links based on the current role */}
            <nav className="side-nav">
                {/* This part creates each sidebar link with its matching icon */}
                {visibleNavItems.map((item) => (
                    <NavLink key={item.path} to={item.path}>
                        {/* This line shows the menu icon */}
                        <img className="nav-icon" src={item.icon} alt="" />
                        {/* This line shows the menu text */}
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* This part shows the logged in user details and logout button */}
            <div className="user-box">
                {/* This part shows the current role icon and account text */}
                <div className="user-role-row">
                    {/* This line shows the role icon */}
                    <img className="role-icon" src={roleIcon} alt="" />
                    {/* This part shows the user name and role */}
                    <div>
                        {/* This part shows the user name or a fallback label */}
                        <span>{userName}</span>
                        {/* This part shows the user's role */}
                        <strong>{userRole}</strong>
                    </div>
                </div>
                {/* This line logs out the user when clicked. */}
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </aside>
    )
}

// This line exports the Sidebar component.
export default Sidebar
