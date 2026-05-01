// This file shows the top bar on dashboard pages. It displays the page title and the online status.
// This part shows the top bar used on protected pages
function Navbar({ title = 'Dashboard' }) {
    // This line returns the heading area and online status
    return (
        // Main top navigation bar
        <header className="topbar">
            {/* This is the left side shows product label and current page title */}
            <div>
                {/* This is the small label above the page title */}
                <p className="eyebrow">AI Crime Investigation System</p>
                {/* This part shows the current page title */}
                <h1>{title}</h1>
            </div>
            {/* This is the right side shows a simple online status */}
            <div className="status-pill">
                {/* This is the small green indicator dot */}
                <span className="status-dot"></span>
                Online
            </div>
        </header>
    )
}

// This line makes the navbar component
export default Navbar


