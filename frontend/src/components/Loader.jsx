// This file shows a loading message. It is used when the frontend is waiting for data to finish loading.
// This part shows a simple loading message while data is being fetched
function Loader() {

    // This line returns the visible loading text
    return (
        // This part shows the loading logo and text in the center
        <div className="loader-box">
            {/* This line shows the loading logo */}
            <img className="loader-logo" src="/logos/loading-logo.png" alt="" />
            {/* This line shows the loading message */}
            <span>Loading investigation data...</span>
        </div>
    )
}

// This line makes the loader component
export default Loader


