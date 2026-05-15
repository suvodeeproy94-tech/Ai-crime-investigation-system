// This file starts the backend server. It connects middleware routes and the database in one place.
// This line imports path so the server can find files using reliable folder paths
const path = require('path')
// This line imports express to create the backend API server
const express = require('express')
// This line imports http so Socket.io can use the same server
const http = require('http')
// This line imports Socket.io for real time updates
const { Server } = require('socket.io')
// This line imports cors so the frontend can call the backend from another local port
const cors = require('cors')
// This line imports environment variables from the backend .env file
require('dotenv').config({ path: path.join(__dirname, '.env') })

// This line imports the MongoDB connection function
const fs = require('fs')
const connectDB = require('./config/db')

// This line reads allowed frontend URLs from Render environment settings.
const allowedOriginText = process.env.CORS_ORIGIN || 'http://localhost:5173'

// This part changes comma separated frontend URLs into a simple list.
const allowedOrigins = allowedOriginText
    .split(',')
    .map((origin) => origin.trim())
    .filter((origin) => origin !== '')

// This function checks if a frontend URL is allowed to call the backend.
function checkAllowedOrigin(origin) {
    // Browser tools and server checks can call the API without an origin.
    if (!origin) {
        return true
    }

    // This line allows the exact frontend URLs saved in CORS_ORIGIN.
    if (allowedOrigins.includes(origin)) {
        return true
    }

    // This part allows this project's Vercel frontend deployment URLs.
    if (origin.startsWith('https://ai-crime-investigation-frontend') && origin.endsWith('.vercel.app')) {
        return true
    }

    // Any other website is blocked.
    return false
}

// This object is used by Express CORS middleware.
const corsOptions = {
    origin: (origin, callback) => {
        // This check allows the request when the origin is trusted.
        if (checkAllowedOrigin(origin)) {
            callback(null, true)
            return
        }

        // This line blocks unknown websites from using the backend.
        callback(new Error('This frontend is not allowed by CORS'))
    }
}

// This function is used by Socket.io CORS settings.
function checkSocketOrigin(origin, callback) {
    // This check allows live socket connection from trusted frontend URLs.
    if (checkAllowedOrigin(origin)) {
        callback(null, true)
        return
    }

    // This line blocks unknown socket connections.
    callback(new Error('This frontend is not allowed by CORS'))
}

// This part creates the Express app instance
const app = express()

// This part creates one HTTP server for Express and Socket.io
const server = http.createServer(app)

// This part creates the Socket.io server for live updates
const io = new Server(server, {
    cors: {
        origin: checkSocketOrigin,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    }
})

// This line keeps Socket.io available inside controllers through req.app
app.set('io', io)

// This part listens for frontend socket connections
io.on('connection', (socket) => {
    // This event puts each logged in user in their own room
    socket.on('joinUserRoom', (userId) => {
        // This check avoids joining an empty room
        if (userId) {
            socket.join(`user-${userId}`)
        }
    })
})

// This check allows the backend to read JSON request bodies
app.use(express.json())
// This check allows browser requests from the frontend app
app.use(cors(corsOptions))

// Serve uploaded evidence files from the backend
const uploadsDir = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
}
app.use('/uploads', express.static(uploadsDir))

// Simple route used to check that the API server is running
app.get('/', (req, res) => {
    // This part sends a plain status message to the browser or API client
    res.send('AI Based Crime Investigation System API is running')
})

// This line connects all user authentication routes under api users
app.use('/api/users', require('./routes/userRoutes'))
// This line connects all FIR routes under api fir
app.use('/api/fir', require('./routes/firRoutes'))
// This line connects all complaint routes under api complaints
app.use('/api/complaints', require('./routes/complaintRoutes'))
// This line connects all AI analysis routes under api ai
app.use('/api/ai', require('./routes/aiRoutes'))
// This line connects all case routes under api cases
app.use('/api/cases', require('./routes/caseRoutes'))
// This line connects all suspect routes under api suspects
app.use('/api/suspects', require('./routes/suspectRoutes'))
// This line connects evidence routes under api evidence
app.use('/api/evidence', require('./routes/evidenceRoutes'))
// This line connects notification routes under api notifications
app.use('/api/notifications', require('./routes/notificationRoutes'))
// This line connects report routes under api reports
app.use('/api/reports', require('./routes/reportRoutes'))
// This line connects chat routes under api chat
app.use('/api/chat', require('./routes/chatRoutes'))
// This line connects meeting routes under api meetings
app.use('/api/meetings', require('./routes/meetingRoutes'))
// This line connects ai log routes under api ai logs
app.use('/api/ai-logs', require('./routes/aiLogRoutes'))
// This line connects activity log routes under api activity logs
app.use('/api/activity-logs', require('./routes/activityLogRoutes'))

// This line reads the server port from environment settings or uses 5000 by default
const PORT = process.env.PORT || 5000

// Connects to the database before accepting API requests
connectDB()
    // Starts the web server only after the database connection succeeds
    .then(() => {
        // Listens for incoming requests on the selected port
        server.listen(PORT, () => {
            // This part shows the local backend URL in the terminal
            console.log(`Server running on http://localhost:${PORT}`)
        })
    })
    // This part handles database connection errors before the server starts
    .catch((error) => {
        // Prints the database error message for debugging
        console.error(`Database connection failed: ${error.message}`)
        // This line gives a short hint about where the database setting should be fixed
        console.error('Fix backend/.env, then run: npm run dev')
        // This step stops the backend process because it cannot work without the database
        process.exit(1)
    })
