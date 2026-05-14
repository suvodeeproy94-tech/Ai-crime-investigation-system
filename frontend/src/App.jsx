// This file controls frontend page routes.
// It decides which page opens for each browser URL.
import { BrowserRouter, Routes, Route } from 'react-router-dom' // This line imports browser routing tools.
import { ThemeProvider } from './context/ThemeContext' // This line imports dark mode provider.

import Login from './pages/Login' // This line imports login page.
import Register from './pages/Register' // This line imports register page.
import Dashboard from './pages/Dashboard' // This line imports dashboard page.
import CreateFIR from './pages/CreateFIR' // This line imports complaint form page.
import CreateFIRPolice from './pages/CreateFIRPolice' // This line imports FIR creation page.
import AIAnalysis from './pages/AIAnalysis' // This line imports AI analysis page.
import EvidenceUpload from './pages/EvidenceUpload' // This line imports evidence page.
import Notifications from './pages/Notifications' // This line imports notifications page.
import TwoFactorSetup from './pages/TwoFactorSetup' // This line imports 2FA setup page.
import Chat from './pages/Chat' // This line imports chat page.
import LiveMeeting from './pages/LiveMeeting' // This line imports live meeting page.
import CasePage from './pages/CasePage' // This line imports case page.
import CrimeMap from './pages/CrimeMap' // This line imports crime map page.
import SuspectManagement from './pages/SuspectManagement' // This line imports suspect page.
import Reports from './pages/Reports' // This line imports reports page.
import AILogs from './pages/AILogs' // This line imports AI logs page.
import ActivityLogs from './pages/ActivityLogs' // This line imports activity logs page.
import UserManagement from './pages/UserManagement' // This line imports user management page.
import ProtectedRoute from './components/ProtectedRoute' // This line imports route protection wrapper.

// This part defines all browser routes for the frontend application.
function App() {
  // This line returns the router and route list used by the app.
  return (
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
          <Route
            path="/dashboard"
            element={(
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the complaint form only to user role */}
          <Route
            path="/create"
            element={(
              <ProtectedRoute roles={['user']}>
                <CreateFIR />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the FIR creation form only to police and admin users */}
          <Route
            path="/create-fir"
            element={(
              <ProtectedRoute roles={['police', 'admin']}>
                <CreateFIRPolice />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the evidence page only to police and admin users */}
          <Route
            path="/evidence"
            element={(
              <ProtectedRoute roles={['police', 'admin']}>
                <EvidenceUpload />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the notification page to every logged in user */}
          <Route
            path="/notifications"
            element={(
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the AI analyzer only to police and admin roles */}
          <Route
            path="/ai"
            element={(
              <ProtectedRoute roles={['police', 'admin']}>
                <AIAnalysis />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the 2FA setup page to every logged in user */}
          <Route
            path="/2fa-setup"
            element={(
              <ProtectedRoute>
                <TwoFactorSetup />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the chat page to every logged in user */}
          <Route
            path="/chat"
            element={(
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            )}
          />

          {/* This part shows live meeting page to admin and police */}
          <Route
            path="/meetings"
            element={(
              <ProtectedRoute roles={['admin', 'police']}>
                <LiveMeeting />
              </ProtectedRoute>
            )}
          />

          {/* This part shows the case management page to all logged in users */}
          <Route
            path="/cases"
            element={(
              <ProtectedRoute>
                <CasePage />
              </ProtectedRoute>
            )}
          />

          {/* This part shows crime map to every logged in user */}
          <Route
            path="/crime-map"
            element={(
              <ProtectedRoute>
                <CrimeMap />
              </ProtectedRoute>
            )}
          />

          {/* This part shows suspect management only to police and admin */}
          <Route
            path="/suspects"
            element={(
              <ProtectedRoute roles={['police', 'admin']}>
                <SuspectManagement />
              </ProtectedRoute>
            )}
          />

          {/* This part shows reports to every logged in user */}
          <Route
            path="/reports"
            element={(
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            )}
          />

          {/* This part shows AI logs to every logged in user */}
          <Route
            path="/ai-logs"
            element={(
              <ProtectedRoute>
                <AILogs />
              </ProtectedRoute>
            )}
          />

          {/* This part shows activity logs to every logged in user */}
          <Route
            path="/activity-logs"
            element={(
              <ProtectedRoute>
                <ActivityLogs />
              </ProtectedRoute>
            )}
          />

          {/* This part shows user management only to admin */}
          <Route
            path="/users"
            element={(
              <ProtectedRoute roles={['admin']}>
                <UserManagement />
              </ProtectedRoute>
            )}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

// This line exports the App component for main.jsx.
export default App
