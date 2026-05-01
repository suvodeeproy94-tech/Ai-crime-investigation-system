// This file controls frontend page routes. It decides which page opens for each browser URL.
// This line imports routing components used to switch pages in the browser
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// This line imports the login page component
import Login from './pages/Login'
// This line imports the registration page component
import Register from './pages/Register'
// This line imports the dashboard page component
import Dashboard from './pages/Dashboard'
// This line imports the complaint creation page component
import CreateFIR from './pages/CreateFIR'
// This line imports the police FIR creation page component
import CreateFIRPolice from './pages/CreateFIRPolice'
// This line imports the AI analysis page component
import AIAnalysis from './pages/AIAnalysis'
// This line imports the evidence upload page component
import EvidenceUpload from './pages/EvidenceUpload'
// This line imports the notifications page component
import Notifications from './pages/Notifications'
// This line imports the wrapper that protects routes from unauthorized users
import ProtectedRoute from './components/ProtectedRoute'

// This part describes all browser routes for the frontend application
function App() {

  // This line returns the router and route list used by the app
  return (
    // This line turns on client side browser routing
    <BrowserRouter>

      {/* This keeps all route definitions in one place */}
      <Routes>
        {/* This part shows the login page at the root URL */}
        <Route path="/" element={<Login />} />
        {/* This part shows the register page */}
        <Route path="/register" element={<Register />} />
        {/* This part shows the dashboard only to logged in users */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        {/* This part shows the complaint form only to user role */}
        <Route path="/create" element={<ProtectedRoute roles={['user']}><CreateFIR /></ProtectedRoute>} />
        {/* This part shows the police FIR creation form only to police users */}
        <Route path="/create-fir" element={<ProtectedRoute roles={['police']}><CreateFIRPolice /></ProtectedRoute>} />
        {/* This part shows the evidence upload form only to police and admin users */}
        <Route path="/evidence" element={<ProtectedRoute roles={['police', 'admin']}><EvidenceUpload /></ProtectedRoute>} />
        {/* This part shows the notification area to every logged in user */}
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        {/* This part shows the AI analyzer only to police and admin roles */}
        <Route path="/ai" element={<ProtectedRoute roles={['police', 'admin']}><AIAnalysis /></ProtectedRoute>} />
      </Routes>

    </BrowserRouter>
  )
}

// This line makes the App component available to main.jsx
export default App


