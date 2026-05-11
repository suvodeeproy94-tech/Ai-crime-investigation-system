// This file controls frontend page routes.
// This file decides which page opens for each browser URL.
// This line imports routing components used to switch pages in the browser
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// This line imports the theme provider so all pages can use dark mode state
import { ThemeProvider } from './context/ThemeContext'

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
// This line imports the two factor setup page component
import TwoFactorSetup from './pages/TwoFactorSetup'
// This line imports the chat page component
import Chat from './pages/Chat'
// This line imports the live meeting page component
import LiveMeeting from './pages/LiveMeeting'
// This line imports the case management page component
import CasePage from './pages/CasePage'
// This line imports the suspect management page
import SuspectManagement from './pages/SuspectManagement'
// This line imports the reports page
import Reports from './pages/Reports'
// This line imports the ai logs page
import AILogs from './pages/AILogs'
// This line imports the admin user management page
import UserManagement from './pages/UserManagement'
// This line imports the wrapper that protects routes from unauthorized users
import ProtectedRoute from './components/ProtectedRoute'

// This part defines all browser routes for the frontend application.
function App() {

  // This line returns the router and route list used by the app.
  return (
    // This line wraps the app with shared theme state for dark mode.
    <ThemeProvider>
      {/* This line turns on client side browser routing */}
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
        {/* This part shows the FIR creation form only to police and admin users */}
        <Route path="/create-fir" element={<ProtectedRoute roles={['police', 'admin']}><CreateFIRPolice /></ProtectedRoute>} />
        {/* This part shows the evidence upload form only to police and admin users */}
        <Route path="/evidence" element={<ProtectedRoute roles={['police', 'admin']}><EvidenceUpload /></ProtectedRoute>} />
        {/* This part shows the notification area to every logged in user */}
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        {/* This part shows the AI analyzer only to police and admin roles */}
        <Route path="/ai" element={<ProtectedRoute roles={['police', 'admin']}><AIAnalysis /></ProtectedRoute>} />
        {/* This part shows the 2FA setup page to every logged in user */}
        <Route path="/2fa-setup" element={<ProtectedRoute><TwoFactorSetup /></ProtectedRoute>} />
        {/* This part shows the chat page to every logged in user */}
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        {/* This part shows live meeting page to admin and police */}
        <Route path="/meetings" element={<ProtectedRoute roles={['admin', 'police']}><LiveMeeting /></ProtectedRoute>} />
        {/* This part shows the case management page to all logged in users */}
        <Route path="/cases" element={<ProtectedRoute><CasePage /></ProtectedRoute>} />
        {/* This part shows suspect management only to police and admin */}
        <Route path="/suspects" element={<ProtectedRoute roles={['police', 'admin']}><SuspectManagement /></ProtectedRoute>} />
        {/* This part shows reports to every logged in user */}
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        {/* This part shows ai logs to every logged in user */}
        <Route path="/ai-logs" element={<ProtectedRoute><AILogs /></ProtectedRoute>} />
        {/* This part shows user management only to admin */}
        <Route path="/users" element={<ProtectedRoute roles={['admin']}><UserManagement /></ProtectedRoute>} />
      </Routes>

      </BrowserRouter>
    </ThemeProvider>
  )
}

// This line exports the App component for main.jsx.
export default App
