// This file starts the React frontend. It connects the app to the browser page and wraps it with needed providers.
// This line imports React for rendering the component tree
import React from 'react'
// This line imports ReactDOM so the app can attach to the html root element
import ReactDOM from 'react-dom/client'
// This line imports Google OAuth provider for Google login support
import { GoogleOAuthProvider } from '@react-oauth/google'
// This line imports the authentication context provider for user login state
import { AuthProvider } from './context/AuthContext'

// This line imports the main application component
import App from './App'

// This line imports the global stylesheet for the whole frontend
import './index.css'

// Renders the React application into the root element in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  // This line turns on extra React checks during development
  <React.StrictMode>
    {/* This part gives Google login components access to the frontend Google client id */}
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ''}>
      {/* This part gives all pages access to login logout and user state */}
      <AuthProvider>
        {/* Starts the main application routes */}
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)


