// This file shows the FIR list. It loads FIR records from the backend and lets allowed users update or delete them.
// This line imports hooks for fetching data after render and storing component state
import { useEffect, useState } from 'react'
// This line imports the shared API client for backend requests
import API from '../services/apiClient'
// This line imports the card component used for each FIR
import FIRCard from '../components/FIRCard'
// This line imports the shared loading logo component
import Loader from '../components/Loader'
// This line imports auth data so the list can pass the current role to cards
import useAuth from '../hooks/useAuth'

// This list keeps valid FIR status values in one place
const allowedFIRStatuses = ['pending', 'investigating', 'closed'] // This line stores allowed FIR statuses

// This part shows the list of FIR records available to the logged in user
function FIRList() {
    // This part keeps the FIR records returned by the backend
    const [firs, setFirs] = useState([])
    // Tracks whether the first FIR request is still running
    const [loading, setLoading] = useState(true)
    const [statusFilter, setStatusFilter] = useState('')
    const [searchText, setSearchText] = useState('')
    // This line reads the current logged in user
    const { user } = useAuth()

    // Fetches FIR records from the backend
    const fetchFIRs = async () => {
        // Always stops loading after the request attempt finishes
        try {
            // Requests the FIR list from the API
            const res = await API.get('/fir')
            // This part keeps the returned FIR array in state
            setFirs(res.data)
        } finally {
            // Hides the loading message after the request finishes
            setLoading(false)
        }
    }

    // Runs the FIR fetch once when the component first loads
    useEffect(() => {
        // Starts loading FIR records from the backend
        fetchFIRs()
    }, [])

    // This function deletes one FIR and refreshes the list
    const handleDelete = async (id) => {
        // This part sends the delete request for the selected FIR id
        await API.delete(`/fir/${id}`)
        // This line imports the updated FIR list after deletion
        fetchFIRs()
    }

    // Lets police or admin update the status of one FIR
    const handleEdit = async (fir) => {
        // Asks the user for the new status value
        const status = prompt('Enter status: pending, investigating, or closed', fir.status || 'pending')

        // This step stops when the user cancels or submits an empty value
        if (!status) {
            return
        }

        if (!allowedFIRStatuses.includes(status)) {
            alert('Use only pending investigating or closed status') // This line shows simple status error
            return // This line stops wrong status update
        }

        // This part sends the updated status to the backend
        await API.put(`/fir/${fir._id}`, { status })
        // Reloads records so the updated status appears
        fetchFIRs()
    }

    const filteredFIRs = firs.filter((fir) => {
        const matchesStatus = statusFilter ? fir.status === statusFilter : true
        const matchesText = searchText
            ? [fir.title, fir.description, fir.location].some((field) => field?.toLowerCase().includes(searchText.toLowerCase()))
            : true
        return matchesStatus && matchesText
    })

    // This line returns the FIR list section
    return (
        // Main section for FIR records
        <section className="content-section">
            {/* This header shows title and total count */}
            <div className="section-header">
                {/* Groups the label and heading */}
                <div>
                    {/* This is the small label for the section */}
                    <p className="eyebrow">Records</p>
                    {/* This is the main heading for the FIR list */}
                    <h2>Filed FIRs</h2>
                </div>
                {/* This part shows how many FIR records are currently loaded */}
                <span className="count-pill">{filteredFIRs.length} filtered</span>
            </div>
            <div className="filter-row">
                <label>
                    Search
                    <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search by title, location, or description"
                    />
                </label>
                <label>
                    Status
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="">All statuses</option>
                        <option value="pending">Pending</option>
                        <option value="investigating">Investigating</option>
                        <option value="closed">Closed</option>
                    </select>
                </label>
            </div>

            {/* This part shows a loading message during the first request */}
            {loading && <div className="empty-state"><Loader /></div>}

            {/* This part shows an empty state when the request finished and no FIRs exist */}
            {!loading && firs.length === 0 && (
                <div className="empty-state">
                    {/* Empty state heading */}
                    <h3>No FIR records found</h3>
                    {/* Empty state helper text */}
                    <p>Create a new FIR to see it listed here.</p>
                </div>
            )}

            {/* Grid container for FIR cards */}
            <div className="fir-grid">
                {/* This creates one card for each FIR record */}
                {filteredFIRs.map(fir => (
                    // This part sends FIR data and action handlers into the card
                    <FIRCard key={fir._id} fir={fir} onEdit={handleEdit} onDelete={handleDelete} role={user?.role} />
                ))}
            </div>
        </section>
    )
}

// This line makes the FIR list component
export default FIRList


