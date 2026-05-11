// This file shows the dashboard page with analytics.
// This page shows totals, status summaries, and recent activity.
import { useEffect, useMemo, useState } from 'react' // This line imports React hooks for state, effects, and memo values.
import FIRList from './FIRList' // This line imports the FIR list section.
import Navbar from '../components/Navbar' // This line imports the top bar component.
import Sidebar from '../components/Sidebar' // This line imports the left sidebar component.
import API from '../services/apiClient' // This line imports the shared API client.
import useAuth from '../hooks/useAuth' // This line imports current user data.

// This helper turns a date into a short month name for the plot.
const getMonthLabel = (date) => date.toLocaleString('default', { month: 'short' }) // This line returns a short month name.

// This helper creates six empty month points for the activity plot.
const getEmptyMonthPoints = () => {
    const today = new Date() // This line stores today date.

    return Array.from({ length: 6 }, (_, index) => {
        const monthDate = new Date(today.getFullYear(), today.getMonth() - (5 - index), 1) // This line gets one month in order.

        return {
            key: `${monthDate.getFullYear()}-${monthDate.getMonth()}`, // This line stores a simple month key.
            label: getMonthLabel(monthDate), // This line stores the month name shown below the plot.
            value: 0 // This line starts the count at zero.
        }
    })
}

// This helper counts records month wise for the activity plot.
const getMonthlyActivity = (items) => {
    const monthPoints = getEmptyMonthPoints() // This line creates the six month points.
    const monthMap = new Map(monthPoints.map((point) => [point.key, point])) // This line helps find each month fast.

    items.forEach((item) => {
        const recordDate = new Date(item.createdAt) // This line reads the record created date.

        if (Number.isNaN(recordDate.getTime())) return // This line skips records with a wrong date.

        const recordKey = `${recordDate.getFullYear()}-${recordDate.getMonth()}` // This line creates the month key for this record.
        const monthPoint = monthMap.get(recordKey) // This line finds the matching month point.

        if (monthPoint) monthPoint.value += 1 // This line adds one record to the month count.
    })

    return monthPoints // This line returns the final month list.
}

// This component shows one simple bar graph card.
function StatusBarChart({ title, rows }) {
    const total = rows.reduce((sum, row) => sum + row.value, 0) // This line adds all row values.

    return (
        <article className="form-card chart-card">
            {/* This part shows the graph title and total count */}
            <div className="chart-title-row">
                <p className="eyebrow">{title}</p>
                <span className="chart-total">{total}</span>
            </div>

            {/* This part shows each status as one bar */}
            <div className="bar-chart">
                {rows.map((row) => {
                    const width = total === 0 ? 0 : Math.round((row.value / total) * 100) // This line finds the bar width.

                    return (
                        <div key={row.label} className="bar-row">
                            {/* This line shows the status name and number */}
                            <div className="bar-label">
                                <span>{row.label}</span>
                                <strong>{row.value}</strong>
                            </div>

                            {/* This line shows the colored bar */}
                            <div className="bar-track">
                                <span className="bar-fill" style={{ width: `${width}%`, backgroundColor: row.color }} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

// This component shows case activity with clean monthly bars
// This component uses simple div tags so the code stays easy
function ActivityColumnChart({ title, points }) {
    const total = points.reduce((sum, point) => sum + point.value, 0) // This line adds all month counts
    const maxValue = Math.max(...points.map((point) => point.value), 1) // This line finds the biggest month count

    return (
        <article className="form-card chart-card activity-card">
            {/* This part shows the chart title and total count */}
            <div className="chart-title-row">
                <p className="eyebrow">{title}</p>
                <span className="chart-total">{total}</span>
            </div>

            {/* This part shows every month as one vertical bar */}
            <div className="activity-bars" aria-label={title}>
                {points.map((point) => {
                    const percent = Math.round((point.value / maxValue) * 100) // This line changes count into bar height
                    const height = point.value === 0 ? 8 : Math.max(percent, 24) // This line keeps every bar visible

                    return (
                        <div key={point.key} className="activity-month">
                            <span className="activity-value">{point.value}</span>
                            <div className="activity-track">
                                <span className="activity-fill" style={{ height: `${height}%` }} />
                            </div>
                            <span className="activity-label">{point.label}</span>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

// This component shows one dashboard summary card with a small icon
function SummaryCard({ label, value, icon }) {
    // This line returns the card with text and matching module logo
    return (
        <article className="summary-card summary-card-icon">
            {/* This part shows the card label and value */}
            <div>
                {/* This line shows the summary label */}
                <p>{label}</p>
                {/* This line shows the summary number */}
                <strong>{value}</strong>
            </div>
            {/* This line shows the matching summary icon */}
            <img className="summary-icon" src={icon} alt="" />
        </article>
    )
}

// This part renders the dashboard and analytics blocks.
function Dashboard() {
    const { user } = useAuth() // This line reads current user role.
    const canViewSuspects = ['police', 'admin'].includes(user?.role) // This line checks suspect dashboard access.
    // This state keeps raw list data used to calculate dashboard analytics.
    const [data, setData] = useState({ firs: [], evidence: [], cases: [], suspects: [], unreadNotifications: 0 }) // This line stores all dashboard source lists in one object.
    // This state controls loading display for first request.
    const [loading, setLoading] = useState(true) // This line stores loading state for initial API calls.

    // This effect loads dashboard data once when component mounts.
    useEffect(() => {
        const loadSummary = async () => {
            try {
                const [firRes, evidenceRes, unreadRes, caseRes, suspectRes] = await Promise.all([
                    API.get('/fir'), // Load FIR list
                    API.get('/evidence'), // Load evidence list
                    API.get('/notifications/unread/count'), // Load unread notification count
                    API.get('/cases'), // Load case list
                    canViewSuspects ? API.get('/suspects') : Promise.resolve({ data: [] }) // Load suspects only for staff
                ])

                setData({
                    firs: firRes.data || [], // Save FIR records
                    evidence: evidenceRes.data || [], // Save evidence records
                    cases: caseRes.data || [], // Save case records
                    suspects: suspectRes.data || [], // Save suspect records
                    unreadNotifications: unreadRes.data?.unread || 0 // Save unread count with safe fallback
                })
            } catch (error) {
                console.error(error) // Log error for debugging when request fails
            } finally {
                setLoading(false) // Stop loading state after request attempt
            }
        }

        loadSummary() // Start data loading
    }, [canViewSuspects])

    // This memo calculates all analytics values in one place from loaded data.
    const analytics = useMemo(() => {
        const firStatus = { pending: 0, investigating: 0, closed: 0 } // FIR status buckets
        const caseStatus = { open: 0, under_review: 0, closed: 0 } // Case status buckets
        const evidenceStatus = { collected: 0, verified: 0, archived: 0 } // Evidence status buckets
        const suspectStatus = { unknown: 0, wanted: 0, cleared: 0 } // Suspect status buckets

        data.firs.forEach((item) => {
            if (firStatus[item.status] !== undefined) firStatus[item.status] += 1 // Count each FIR by status
        })

        data.cases.forEach((item) => {
            if (caseStatus[item.status] !== undefined) caseStatus[item.status] += 1 // Count each case by status
        })

        data.evidence.forEach((item) => {
            if (evidenceStatus[item.status] !== undefined) evidenceStatus[item.status] += 1 // Count each evidence by status
        })

        data.suspects.forEach((item) => {
            if (suspectStatus[item.status] !== undefined) suspectStatus[item.status] += 1 // Count each suspect by status
        })

        const recentCases = [...data.cases] // Create shallow copy for safe sort
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Newest first
            .slice(0, 5) // Keep only top 5 records

        const recentEvidence = [...data.evidence] // Create shallow copy for safe sort
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Newest first
            .slice(0, 5) // Keep only top 5 records

        const firChart = [
            { label: 'Pending', value: firStatus.pending, color: '#f59e0b' }, // This line stores pending FIR graph data.
            { label: 'Investigating', value: firStatus.investigating, color: '#2f6fed' }, // This line stores investigating FIR graph data.
            { label: 'Closed', value: firStatus.closed, color: '#16a34a' } // This line stores closed FIR graph data.
        ]

        const caseChart = [
            { label: 'Open', value: caseStatus.open, color: '#2f6fed' }, // This line stores open case graph data.
            { label: 'Under Review', value: caseStatus.under_review, color: '#a855f7' }, // This line stores review case graph data.
            { label: 'Closed', value: caseStatus.closed, color: '#16a34a' } // This line stores closed case graph data.
        ]

        const evidenceChart = [
            { label: 'Collected', value: evidenceStatus.collected, color: '#f59e0b' }, // This line stores collected evidence graph data.
            { label: 'Verified', value: evidenceStatus.verified, color: '#14b8a6' }, // This line stores verified evidence graph data.
            { label: 'Archived', value: evidenceStatus.archived, color: '#64748b' } // This line stores archived evidence graph data.
        ]

        const suspectChart = [
            { label: 'Unknown', value: suspectStatus.unknown, color: '#64748b' }, // This line stores unknown suspect graph data.
            { label: 'Wanted', value: suspectStatus.wanted, color: '#ef4444' }, // This line stores wanted suspect graph data.
            { label: 'Cleared', value: suspectStatus.cleared, color: '#16a34a' } // This line stores cleared suspect graph data.
        ]

        const caseActivity = getMonthlyActivity(data.cases) // This line builds month wise case activity.

        return {
            firStatus, // Return FIR status summary
            caseStatus, // Return case status summary
            evidenceStatus, // Return evidence status summary
            suspectStatus, // Return suspect status summary
            firChart, // Return FIR chart rows
            caseChart, // Return case chart rows
            evidenceChart, // Return evidence chart rows
            suspectChart, // Return suspect chart rows
            caseActivity, // Return case activity plot points
            recentCases, // Return recent case activity list
            recentEvidence // Return recent evidence activity list
        }
    }, [data])

    return (
        <div className="app-layout"> {/* This line renders app layout wrapper */}
            <Sidebar /> {/* This line renders left navigation menu */}
            <main className="main-panel"> {/* This line renders main content area */}
                <Navbar title="Dashboard" /> {/* This line renders page title bar */}

                <section className="dashboard-summary"> {/* This line renders top summary cards section */}
                    <SummaryCard label="Total FIRs" value={data.firs.length} icon="/logos/icon-fir.png" /> {/* This line renders total fir card */}
                    <SummaryCard label="Total Cases" value={data.cases.length} icon="/logos/icon-cases.png" /> {/* This line renders total case card */}
                    <SummaryCard label="Evidence Items" value={data.evidence.length} icon="/logos/icon-evidence.png" /> {/* This line renders evidence count card */}
                    <SummaryCard label="Unread Alerts" value={data.unreadNotifications} icon="/logos/icon-notifications.png" /> {/* This line renders unread alerts card */}
                    {canViewSuspects && (
                        <SummaryCard label="Total Suspects" value={data.suspects.length} icon="/logos/icon-suspects.png" />
                    )}
                </section>

                <section className="content-section dashboard-analytics-grid"> {/* This line renders analytics graphs section */}
                    {/* This part shows FIR status as a graph */}
                    <StatusBarChart title="FIR Status Graph" rows={analytics.firChart} />

                    {/* This part shows case status as a graph */}
                    <StatusBarChart title="Case Status Graph" rows={analytics.caseChart} />

                    {/* This part shows evidence status as a graph */}
                    <StatusBarChart title="Evidence Status Graph" rows={analytics.evidenceChart} />

                    {/* This part shows suspect status as a graph */}
                    {canViewSuspects && <StatusBarChart title="Suspect Status Graph" rows={analytics.suspectChart} />}
                </section>

                <section className="content-section dashboard-plot-section"> {/* This line renders activity chart section */}
                    {/* This part shows case activity as a clean bar chart */}
                    <ActivityColumnChart title="Case Activity Chart" points={analytics.caseActivity} />
                </section>

                <section className="content-section dashboard-analytics-grid"> {/* This line renders recent activity cards section */}
                    <article className="form-card"> {/* This line renders recent cases card */}
                        <p className="eyebrow">Recent Cases</p>
                        {analytics.recentCases.length === 0 && !loading && <p>No recent cases.</p>}
                        {analytics.recentCases.map((item) => (
                            <div key={item._id} className="fir-meta">
                                <span>{item.status}</span>
                                <strong>{item.title}</strong>
                            </div>
                        ))}
                    </article>

                    <article className="form-card"> {/* This line renders recent evidence card */}
                        <p className="eyebrow">Recent Evidence</p>
                        {analytics.recentEvidence.length === 0 && !loading && <p>No recent evidence.</p>}
                        {analytics.recentEvidence.map((item) => (
                            <div key={item._id} className="fir-meta">
                                <span>{item.status}</span>
                                <strong>{item.title}</strong>
                            </div>
                        ))}
                    </article>
                </section>

                <FIRList /> {/* This line renders fir list section */}
            </main>
        </div>
    )
}

export default Dashboard // Export dashboard page component
