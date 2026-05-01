// This file connects the backend to MongoDB. It checks the database link from the env file before the server starts.
// This line imports mongoose so the backend can connect to MongoDB
const mongoose = require('mongoose')

// This part creates one reusable function for opening the database connection
const connectDB = async () => {

    // This line reads the MongoDB connection string from backend environment settings
    const mongoURI = process.env.MONGO_URI

    // This step stops the server early when the database URL is missing or still a placeholder
    if (!mongoURI || mongoURI === 'your_mongodb_url') {
        throw new Error('Please set a valid MONGO_URI in backend/.env')
    }

    // This line makes sure the database URL is a valid MongoDB connection format
    if (!mongoURI.startsWith('mongodb://') && !mongoURI.startsWith('mongodb+srv://')) {
        throw new Error('MONGO_URI must start with mongodb:// or mongodb+srv://')
    }

    // Opens the connection to MongoDB using the checked connection string
    await mongoose.connect(mongoURI)

    // Prints a success message after MongoDB accepts the connection
    console.log('MongoDB Connected')
}

// This line makes the database connection function available to server.js
module.exports = connectDB

