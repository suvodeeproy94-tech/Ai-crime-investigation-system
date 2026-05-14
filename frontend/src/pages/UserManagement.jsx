// This file shows the admin user management page
// This page shows admins police and users in read only mode
import { useEffect, useState } from 'react' // This line imports hooks for state and loading
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports the shared API client
import Navbar from '../components/Navbar' // This line imports the top page bar
import Sidebar from '../components/Sidebar' // This line imports the left menu
import Loader from '../components/Loader' // This line imports the shared loading logo component

// This function shows role names in simple text
const getRoleName = (role) => {
    if (role === 'admin') {
        return 'Admin'
    }

    if (role === 'police') {
        return 'Police'
    }

    return 'User' // This line shows user role name
}

// This part renders the admin user management screen
function UserManagement() {
    const [users, setUsers] = useState([]) // This line stores all users
    const [loading, setLoading] = useState(true) // This line stores loading state
    const [error, setError] = useState('') // This line stores error text

    // This function loads users from the backend
    const loadUsers = async () => {
        setLoading(true) // This line starts loading
        setError('') // This line clears old error

        try {
            const response = await API.get('/users') // This line asks backend for user list
            setUsers(response.data || []) // This line saves the user list
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load users')) // This line shows request error
        } finally {
            setLoading(false) // This line stops loading
        }
    }

    // This effect loads users when page opens
    useEffect(() => {
        loadUsers() // This line starts user loading
    }, [])

    return (
        <div className="app-layout"> {/* This line renders app layout wrapper */}
            <Sidebar /> {/* This line renders left navigation menu */}
            <main className="main-panel"> {/* This line renders main content area */}
                <Navbar title="User Management" /> {/* This line renders page title bar */}

                <section className="content-section"> {/* This line renders user page section */}
                    {/* This part shows page title */}
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Admin Control</p>
                            <h2>Users</h2>
                        </div>
                        <span className="count-pill">{users.length} total</span>
                    </div>

                    {error && <div className="analysis-error"><p>{error}</p></div>} {/* This line shows error message */}
                    {loading && <div className="empty-state"><Loader /></div>} {/* This line shows loading state */}
                    {!loading && users.length === 0 && (
                        <div className="empty-state">No users found</div>
                    )}

                    {/* This part shows every account as a simple card */}
                    {!loading && users.length > 0 && (
                        <div className="fir-grid"> {/* This line renders user cards grid */}
                            {users.map((account) => (
                                <article key={account._id} className="fir-card"> {/* This line renders one user card */}
                                    <div className="fir-card-header"> {/* This line renders user card header */}
                                        <div>
                                            <p className="eyebrow">Account</p>
                                            <h3>{account.name}</h3>
                                        </div>
                                        <span className="badge">{getRoleName(account.role)}</span>
                                    </div>

                                    <div className="fir-meta">
                                        <span>Email</span>
                                        <strong>{account.email}</strong>
                                    </div>

                                    <div className="fir-meta">
                                        <span>Role</span>
                                        <strong>{getRoleName(account.role)}</strong>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}

export default UserManagement // This line exports the user management page
