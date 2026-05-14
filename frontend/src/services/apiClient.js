// This file creates the frontend API client. It sends requests to the backend and adds the saved login token.
// This line imports axios for making HTTP requests to the backend
import axios from 'axios'

// This part creates one shared axios instance for all API calls
const API = axios.create({
    // Sets the backend API base URL used by every request
    baseURL: 'http://localhost:5000/api'
})

// This line adds the saved login token to outgoing requests
API.interceptors.request.use((request) => {

    // This line reads the token stored after login
    const token = localStorage.getItem('token')

    // Only add the saved token when the request did not already provide an Authorization header
    // This allows OTP verification requests to send the temp token without being replaced
    if (token && !request.headers.Authorization) {
        request.headers.Authorization = token
    }

    // This line returns the request so axios can continue sending it
    return request
})

// This helper returns a simple error message from an API error
export function getApiErrorMessage(error, fallbackMessage) {
    // This line starts with the message we want to show if backend gives no message
    let message = fallbackMessage

    // This part safely checks whether backend sent a message
    if (error && error.response && error.response.data && error.response.data.message) {
        message = error.response.data.message
    }

    // This line returns the final readable message
    return message
}

// This line makes the configured API client for pages and components
export default API
