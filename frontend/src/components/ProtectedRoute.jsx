// This file protects frontend pages. It checks if the user is logged in and has the correct role before showing a page.
// This line imports Navigate for redirecting users to another route
import { Navigate } from 'react-router-dom'
// This line imports the authentication hook to read the current user
import useAuth from '../hooks/useAuth'

// This part protects a page from users who are not logged in or do not have permission
function ProtectedRoute({ children, roles }) {
    // This line reads the current logged in user from auth context
    const { user } = useAuth()
    // This line reads the saved token from browser storage
    const token = localStorage.getItem('token')

    // This part sends the visitor to login when no session is available
    if (!token || !user) {
        return <Navigate to="/" replace />
    }

    // This part shows an access denied page when the user's role is not allowed
    if (roles && !roles.includes(user.role)) {
        return (
            // This line uses the auth page layout for the access denied screen
            <main className="auth-page">
                {/* This part shows the permission warning content */}
                <section className="access-denied">
                    {/* This labels the current state of the page */}
                    <p className="eyebrow">Access Denied</p>
                    {/* Explains that the route is blocked for this role */}
                    <h1>This page is not available for your role.</h1>
                    {/* This part shows the role currently assigned to the user */}
                    <p>Your current role is <strong>{user.role}</strong>.</p>
                    {/* This part gives the user a way back to the dashboard */}
                    <a className="btn btn-primary" href="/dashboard">Go to Dashboard</a>
                </section>
            </main>
        )
    }

    // This part shows the protected page when login and role checks pass
    return children
}

// This line makes the route guard component
export default ProtectedRoute


