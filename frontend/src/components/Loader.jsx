// This file shows a loading message. It is used when the frontend is waiting for data to finish loading.
// This part shows a simple loading message while data is being fetched
function Loader() {

    // This line returns the visible loading text
    return (
        // This part shows the loading message in the center with the existing classes
        <div className="text-center p-4">
            Loading...
        </div>
    )
}

// This line makes the loader component
export default Loader


