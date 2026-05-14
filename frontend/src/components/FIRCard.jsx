// This file shows one FIR record as a card. It displays the FIR details and the edit or delete buttons based on the user role.
// This part shows one FIR record as a card in the FIR list
function FIRCard({ fir, onEdit, onDelete, role }) {
    // This line stores status history in a safe list
    const statusHistory = fir.statusHistory || []

    // This line stores the current status or a simple fallback
    const firStatus = fir.status || 'pending'

    // This line returns the card layout with record details and role based actions
    return (
        // Main container for one FIR item
        <article className="fir-card">
            {/* This header contains the FIR title and status badge */}
            <div className="fir-card-header">
                {/* This is the left side of the card header */}
                <div>
                    {/* This is the small label for the card type */}
                    <p className="eyebrow">FIR Record</p>
                    {/* This part shows the FIR title */}
                    <h3>{fir.title}</h3>
                </div>
                {/* This part shows the current FIR status and status based styling */}
                <span className={`badge badge-${firStatus}`}>
                    {/* Uses pending when the status is missing */}
                    {firStatus}
                </span>
            </div>

            {/* This part shows the FIR description */}
            <p className="fir-description">{fir.description}</p>

            {/* This part shows the incident location area */}
            <div className="fir-meta">
                {/* This labels the location value */}
                <span>Location</span>
                {/* This shows the stored location */}
                <strong>{fir.location}</strong>
            </div>

            {/* This part shows FIR status history when available */}
            {statusHistory.length > 0 && (
                <div className="status-history">
                    {/* This labels the history block */}
                    <span>Status History</span>
                    {statusHistory.map((historyItem) => (
                        <p key={historyItem._id || `${historyItem.status}-${historyItem.changedAt}`}>
                            {historyItem.status} on {new Date(historyItem.changedAt).toLocaleString()}
                        </p>
                    ))}
                </div>
            )}

            {/* Contains buttons that change based on user role */}
            <div className="card-actions">
                {/* This part allows police and admins to edit the FIR status */}
                {['police', 'admin'].includes(role) && (
                    <button className="btn btn-secondary" onClick={() => onEdit(fir)}>Edit Status</button>
                )}
                {/* This part allows only admins to delete the FIR */}
                {role === 'admin' && (
                    <button className="btn btn-danger" onClick={() => onDelete(fir._id)}>Delete</button>
                )}
            </div>
        </article>
    )
}

// This line makes the FIR card component
export default FIRCard


