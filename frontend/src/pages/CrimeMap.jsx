// This file shows crime cases on Google Maps.
// It uses latitude and longitude saved in case records.
import { useEffect, useRef, useState } from 'react' // This line imports React hooks.
import API, { getApiErrorMessage } from '../services/apiClient' // This line imports shared API client.
import Navbar from '../components/Navbar' // This line imports the top bar.
import Sidebar from '../components/Sidebar' // This line imports the left menu.
import Loader from '../components/Loader' // This line imports the loading component.
import { getSocket } from '../services/socketClient' // This line imports socket helper.

// This function loads Google Maps script only one time.
const loadGoogleMapScript = (apiKey) => {
    // This check returns quickly when Google Maps is already loaded.
    if (window.google && window.google.maps) {
        return Promise.resolve()
    }

    // This line finds old script tag if it was already added.
    const oldScript = document.getElementById('google-map-script')

    // This check waits for the old script instead of adding another script.
    if (oldScript) {
        return new Promise((resolve, reject) => {
            oldScript.onload = resolve
            oldScript.onerror = reject
        })
    }

    // This part creates a new Google Maps script tag.
    return new Promise((resolve, reject) => {
        const script = document.createElement('script') // This line creates script element.
        script.id = 'google-map-script' // This line gives script a fixed id.
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}` // This line sets Google Maps API URL.
        script.async = true // This line allows script to load in background.
        script.defer = true // This line waits before running the script.
        script.onload = resolve // This line runs when script loads.
        script.onerror = reject // This line runs when script fails.
        document.body.appendChild(script) // This line adds script to the page.
    })
}

// This helper keeps only cases that have valid map coordinates.
const getMapCases = (cases) => {
    const mapCases = []

    for (const caseItem of cases) {
        // This check skips cases where coordinates were not added.
        if (caseItem.latitude === undefined || caseItem.latitude === null || caseItem.latitude === '') {
            continue
        }

        // This check skips cases where coordinates were not added.
        if (caseItem.longitude === undefined || caseItem.longitude === null || caseItem.longitude === '') {
            continue
        }

        const latitude = Number(caseItem.latitude)
        const longitude = Number(caseItem.longitude)

        if (!Number.isNaN(latitude) && !Number.isNaN(longitude)) {
            mapCases.push({
                _id: caseItem._id,
                title: caseItem.title,
                location: caseItem.location,
                status: caseItem.status,
                latitude,
                longitude
            })
        }
    }

    return mapCases
}

// This part renders crime map page.
function CrimeMap() {
    const mapBoxRef = useRef(null) // This line stores the map div.
    const markersRef = useRef([]) // This line stores old markers for cleanup.

    const [cases, setCases] = useState([]) // This line stores case list.
    const [loading, setLoading] = useState(true) // This line stores loading state.
    const [error, setError] = useState('') // This line stores API error.
    const [mapError, setMapError] = useState('') // This line stores map loading error.

    // This function loads cases from backend.
    const loadCases = async () => {
        setLoading(true)
        setError('')

        try {
            const response = await API.get('/cases') // This line loads case records.
            setCases(response.data || []) // This line saves case records.
        } catch (requestError) {
            setError(getApiErrorMessage(requestError, 'Unable to load map cases'))
        } finally {
            setLoading(false)
        }
    }

    // This effect loads cases when page opens.
    useEffect(() => {
        loadCases()
    }, [])

    // This effect reloads map cases when case data changes live.
    useEffect(() => {
        const socket = getSocket() // This line gets shared socket connection.

        // This function reloads cases for map markers.
        const handleCaseUpdate = () => {
            loadCases()
        }

        socket.on('caseUpdated', handleCaseUpdate)

        // This cleanup removes listener when page closes.
        return () => {
            socket.off('caseUpdated', handleCaseUpdate)
        }
    }, [])

    // This effect draws the map after cases are loaded.
    useEffect(() => {
        // This line reads Google Maps API key from frontend environment.
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

        // This check shows a clear message when API key is missing.
        if (!apiKey) {
            setMapError('Google Maps API key is missing. Add VITE_GOOGLE_MAPS_API_KEY in frontend .env file.')
            return
        }

        // This check waits until the map div exists.
        if (!mapBoxRef.current) {
            return
        }

        // This function creates the map and markers.
        const drawMap = () => {
            const mapCases = getMapCases(cases) // This line keeps cases with coordinates only.

            // This location is India center and works when no case has coordinates.
            let centerPoint = {
                lat: 20.5937,
                lng: 78.9629
            }

            // This check uses the first case location as map center when available.
            if (mapCases.length > 0) {
                centerPoint = {
                    lat: mapCases[0].latitude,
                    lng: mapCases[0].longitude
                }
            }

            // This line creates the Google Map object.
            const map = new window.google.maps.Map(mapBoxRef.current, {
                center: centerPoint,
                zoom: mapCases.length > 0 ? 8 : 5
            })

            // This line removes old marker references before adding new markers.
            markersRef.current = []

            // This loop creates one marker for each case with coordinates.
            for (const caseItem of mapCases) {
                const marker = new window.google.maps.Marker({
                    position: {
                        lat: caseItem.latitude,
                        lng: caseItem.longitude
                    },
                    map,
                    title: caseItem.title
                })

                // This line creates simple popup text for the marker.
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<strong>${caseItem.title}</strong><br>${caseItem.location}<br>Status: ${caseItem.status}`
                })

                // This line opens popup when marker is clicked.
                marker.addListener('click', () => {
                    infoWindow.open({
                        anchor: marker,
                        map
                    })
                })

                markersRef.current.push(marker)
            }
        }

        // This part loads Google Maps first and then draws the map.
        loadGoogleMapScript(apiKey)
            .then(drawMap)
            .catch(() => {
                setMapError('Unable to load Google Maps')
            })
    }, [cases])

    const mapCases = getMapCases(cases) // This line stores cases that can appear on map.

    return (
        <div className="app-layout">
            <Sidebar />
            <main className="main-panel">
                <Navbar title="Crime Map" />

                <section className="content-section">
                    <div className="section-header">
                        <div>
                            <p className="eyebrow">Geo Location</p>
                            <h2>Crime Mapping</h2>
                        </div>
                        <span className="count-pill">{mapCases.length} mapped</span>
                    </div>

                    {loading && <div className="empty-state"><Loader /></div>}
                    {error && <div className="analysis-error"><p>{error}</p></div>}
                    {mapError && <div className="analysis-error"><p>{mapError}</p></div>}

                    {!loading && !error && (
                        <section className="form-card">
                            <p className="eyebrow">Google Maps View</p>
                            <div className="map-box" ref={mapBoxRef}></div>
                        </section>
                    )}

                    {!loading && mapCases.length === 0 && (
                        <div className="empty-state">
                            <h3>No mapped cases found</h3>
                            <p>Add latitude and longitude while creating a case.</p>
                        </div>
                    )}

                    {!loading && mapCases.length > 0 && (
                        <div className="fir-grid">
                            {mapCases.map((caseItem) => (
                                <article key={caseItem._id} className="fir-card">
                                    <div className="fir-card-header">
                                        <h3>{caseItem.title}</h3>
                                        <span className="badge">{caseItem.status}</span>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Location</span>
                                        <strong>{caseItem.location}</strong>
                                    </div>
                                    <div className="fir-meta">
                                        <span>Coordinates</span>
                                        <strong>{caseItem.latitude}, {caseItem.longitude}</strong>
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

export default CrimeMap
