// This file creates the frontend API client. It sends requests to the backend and adds the saved login token.
// This line imports axios for making HTTP requests to the backend
import axios from 'axios'

// This part creates one shared axios instance for all API calls
const API = axios.create({
    // Sets the backend API base URL used by every request
    baseURL: 'http://localhost:5000/api'
})

// This line adds the saved login token to outgoing requests
API.interceptors.request.use((req) => {

    // This line reads the token stored after login
    const token = localStorage.getItem('token')

    // This line adds the token header only when a token exists
    if (token) {
        req.headers.Authorization = token
    }

    // This line returns the request so axios can continue sending it
    return req
})

// This line makes the configured API client for pages and components
export default API

