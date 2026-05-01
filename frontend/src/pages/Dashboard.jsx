// This file shows the dashboard page. It displays the main layout and the list of FIR records for the logged in user.
import { useEffect, useState } from 'react'
// This line imports the FIR list shown on the dashboard
import FIRList from './FIRList'
// This line imports the shared top bar
import Navbar from '../components/Navbar'
// This line imports the shared sidebar navigation
import Sidebar from '../components/Sidebar'
import API from '../services/api'

// This part shows the main dashboard page
function Dashboard() {
    const [summary, setSummary] = useState({ firCount: 0, evidenceCount: 0, unreadNotifications: 0 })

    useEffect(() => {
        const loadSummary = async () => {
            try {
                const [firRes, evidenceRes, unreadRes] = await Promise.all([
                    API.get('/fir'),
                    API.get('/evidence'),
                    API.get('/notifications/unread/count')
                ])
                setSummary({
                    firCount: firRes.data.length,
                    evidenceCount: evidenceRes.data.length,
                    unreadNotifications: unreadRes.data.unread || 0
                })
            } catch (error) {
                console.error(error)
            }
        }
        loadSummary()
    }, [])

    // This line returns the protected page layout with sidebar and main content
    return (
        // App layout places sidebar beside the main panel
        <div className="app-layout">
            {/* This part shows the left navigation */}
            <Sidebar />

            {/* This is the main dashboard content area */}
            <main className="main-panel">
                {/* This part shows the dashboard title */}
                <Navbar title="Dashboard" />
                <section className="dashboard-summary">
                    <div className="summary-card">
                        <p>Total FIRs</p>
                        <strong>{summary.firCount}</strong>
                    </div>
                    <div className="summary-card">
                        <p>Evidence Items</p>
                        <strong>{summary.evidenceCount}</strong>
                    </div>
                    <div className="summary-card">
                        <p>Unread Alerts</p>
                        <strong>{summary.unreadNotifications}</strong>
                    </div>
                </section>
                {/* This part shows all FIR records available to the user */}
                <FIRList />
            </main>
        </div>
    )
}

// This line makes the dashboard page
export default Dashboard


