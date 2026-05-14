// This file shows the dashboard page with analytics.
// It shows totals, status summaries, recent records, and simple activity charts.
import { useEffect, useState } from 'react' // This line imports React hooks for state and effects.
import FIRList from './FIRList' // This line imports the FIR list section.
import Navbar from '../components/Navbar' // This line imports the top bar component.
import Sidebar from '../components/Sidebar' // This line imports the left sidebar component.
import API from '../services/apiClient' // This line imports the shared API client.
import useAuth from '../hooks/useAuth' // This line imports current user data.

// This helper turns a date into a short month name for the plot.
const getMonthLabel = (date) => {
    return date.toLocaleString('default', { month: 'short' })
}

// This helper creates six empty month points for the activity plot.
const getEmptyMonthPoints = () => {
    const today = new Date() // This line stores today date.
    const monthPoints = [] // This list stores the last six months.

    // This loop adds months from oldest to newest.
    for (let monthBack = 5; monthBack >= 0; monthBack -= 1) {
        const monthDate = new Date(today.getFullYear(), today.getMonth() - monthBack, 1)

        monthPoints.push({
            key: `${monthDate.getFullYear()}-${monthDate.getMonth()}`,
            label: getMonthLabel(monthDate),
            value: 0
        })
    }

    return monthPoints
}

// This helper counts records month wise for the activity plot.
const getMonthlyActivity = (items) => {
    const monthPoints = getEmptyMonthPoints() // This line creates six month points.
    const monthMap = {} // This object helps find each month by key.

    // This loop stores each point by its month key.
    for (const point of monthPoints) {
        monthMap[point.key] = point
    }

    // This loop counts records in their matching month.
    for (const item of items) {
        const recordDate = new Date(item.createdAt)

        // Skip the record when its date is not valid.
        if (Number.isNaN(recordDate.getTime())) {
            continue
        }

        const recordKey = `${recordDate.getFullYear()}-${recordDate.getMonth()}`
        const monthPoint = monthMap[recordKey]

        if (monthPoint) {
            monthPoint.value += 1
        }
    }

    return monthPoints
}

// This helper adds all row values for a small chart.
const getRowTotal = (rows) => {
    let total = 0

    for (const row of rows) {
        total += row.value
    }

    return total
}

// This helper finds the biggest value in monthly activity points.
const getMaxPointValue = (points) => {
    let maxValue = 1

    for (const point of points) {
        if (point.value > maxValue) {
            maxValue = point.value
        }
    }

    return maxValue
}

// This helper counts list items by status.
const countStatusValues = (items, startingCounts) => {
    const result = {}

    // This loop copies the starting count values.
    for (const statusName in startingCounts) {
        result[statusName] = startingCounts[statusName]
    }

    for (const item of items) {
        if (result[item.status] !== undefined) {
            result[item.status] += 1
        }
    }

    return result
}

// This helper returns the newest few records from a list.
const getRecentItems = (items) => {
    const copiedItems = items.slice()

    copiedItems.sort((firstItem, secondItem) => {
        return new Date(secondItem.createdAt) - new Date(firstItem.createdAt)
    })

    return copiedItems.slice(0, 5)
}

// This component shows one simple bar graph card.
function StatusBarChart({ title, rows }) {
    const total = getRowTotal(rows) // This line adds all row values.

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
                    let width = 0

                    if (total > 0) {
                        width = Math.round((row.value / total) * 100)
                    }

                    return (
                        <div key={row.label} className="bar-row">
                            <div className="bar-label">
                                <span>{row.label}</span>
                                <strong>{row.value}</strong>
                            </div>

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

// This component shows case activity with clean monthly bars.
function ActivityColumnChart({ title, points }) {
    const total = getRowTotal(points) // This line adds all month counts.
    const maxValue = getMaxPointValue(points) // This line finds the biggest month count.

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
                    const percent = Math.round((point.value / maxValue) * 100)
                    let height = 8

                    if (point.value > 0) {
                        height = Math.max(percent, 24)
                    }

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

// This component shows one dashboard summary card with a small icon.
function SummaryCard({ label, value, icon }) {
    return (
        <article className="summary-card summary-card-icon">
            <div>
                <p>{label}</p>
                <strong>{value}</strong>
            </div>
            <img className="summary-icon" src={icon} alt="" />
        </article>
    )
}

// This helper builds all dashboard analytics values.
const buildAnalytics = (data) => {
    const firStatus = countStatusValues(data.firs, { pending: 0, investigating: 0, closed: 0 })
    const caseStatus = countStatusValues(data.cases, { open: 0, under_review: 0, closed: 0 })
    const evidenceStatus = countStatusValues(data.evidence, { collected: 0, verified: 0, archived: 0 })
    const suspectStatus = countStatusValues(data.suspects, { unknown: 0, wanted: 0, cleared: 0 })

    return {
        firChart: [
            { label: 'Pending', value: firStatus.pending, color: '#f59e0b' },
            { label: 'Investigating', value: firStatus.investigating, color: '#2f6fed' },
            { label: 'Closed', value: firStatus.closed, color: '#16a34a' }
        ],
        caseChart: [
            { label: 'Open', value: caseStatus.open, color: '#2f6fed' },
            { label: 'Under Review', value: caseStatus.under_review, color: '#a855f7' },
            { label: 'Closed', value: caseStatus.closed, color: '#16a34a' }
        ],
        evidenceChart: [
            { label: 'Collected', value: evidenceStatus.collected, color: '#f59e0b' },
            { label: 'Verified', value: evidenceStatus.verified, color: '#14b8a6' },
            { label: 'Archived', value: evidenceStatus.archived, color: '#64748b' }
        ],
        suspectChart: [
            { label: 'Unknown', value: suspectStatus.unknown, color: '#64748b' },
            { label: 'Wanted', value: suspectStatus.wanted, color: '#ef4444' },
            { label: 'Cleared', value: suspectStatus.cleared, color: '#16a34a' }
        ],
        caseActivity: getMonthlyActivity(data.cases),
        recentCases: getRecentItems(data.cases),
        recentEvidence: getRecentItems(data.evidence)
    }
}

// This part renders the dashboard and analytics blocks.
function Dashboard() {
    const { user } = useAuth() // This line reads current user role.
    let userRole = '' // This line stores role safely.

    if (user && user.role) {
        userRole = user.role
    }
    const canViewSuspects = userRole === 'police' || userRole === 'admin' // This line checks suspect dashboard access.

    // This state keeps raw list data used to calculate dashboard analytics.
    const [data, setData] = useState({
        firs: [],
        evidence: [],
        cases: [],
        suspects: [],
        unreadNotifications: 0
    })

    // This state controls loading display for first request.
    const [loading, setLoading] = useState(true)

    // This effect loads dashboard data once when component mounts.
    useEffect(() => {
        const loadSummary = async () => {
            try {
                const firResponse = await API.get('/fir')
                const evidenceResponse = await API.get('/evidence')
                const unreadResponse = await API.get('/notifications/unread/count')
                const caseResponse = await API.get('/cases')
                let suspectData = []

                if (canViewSuspects) {
                    const suspectResponse = await API.get('/suspects')
                    suspectData = suspectResponse.data || []
                }

                let unreadCount = 0
                if (unreadResponse.data && unreadResponse.data.unread) {
                    unreadCount = unreadResponse.data.unread
                }

                setData({
                    firs: firResponse.data || [],
                    evidence: evidenceResponse.data || [],
                    cases: caseResponse.data || [],
                    suspects: suspectData,
                    unreadNotifications: unreadCount
                })
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        loadSummary()
    }, [canViewSuspects])

    // This line builds dashboard analytics from loaded data.
    const analytics = buildAnalytics(data)

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Dashboard" />

                <section className="dashboard-summary">
                    <SummaryCard label="Total FIRs" value={data.firs.length} icon="/logos/icon-fir.png" />
                    <SummaryCard label="Total Cases" value={data.cases.length} icon="/logos/icon-cases.png" />
                    <SummaryCard label="Evidence Items" value={data.evidence.length} icon="/logos/icon-evidence.png" />
                    <SummaryCard label="Unread Alerts" value={data.unreadNotifications} icon="/logos/icon-notifications.png" />
                    {canViewSuspects && (
                        <SummaryCard label="Total Suspects" value={data.suspects.length} icon="/logos/icon-suspects.png" />
                    )}
                </section>

                <section className="content-section dashboard-analytics-grid">
                    <StatusBarChart title="FIR Status Graph" rows={analytics.firChart} />
                    <StatusBarChart title="Case Status Graph" rows={analytics.caseChart} />
                    <StatusBarChart title="Evidence Status Graph" rows={analytics.evidenceChart} />
                    {canViewSuspects && <StatusBarChart title="Suspect Status Graph" rows={analytics.suspectChart} />}
                </section>

                <section className="content-section dashboard-plot-section">
                    <ActivityColumnChart title="Case Activity Chart" points={analytics.caseActivity} />
                </section>

                <section className="content-section dashboard-analytics-grid">
                    <article className="form-card">
                        <p className="eyebrow">Recent Cases</p>
                        {analytics.recentCases.length === 0 && !loading && <p>No recent cases.</p>}
                        {analytics.recentCases.map((item) => (
                            <div key={item._id} className="fir-meta">
                                <span>{item.status}</span>
                                <strong>{item.title}</strong>
                            </div>
                        ))}
                    </article>

                    <article className="form-card">
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

                <FIRList />
            </main>
        </div>
    )
}

export default Dashboard
