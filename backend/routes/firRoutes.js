// This file defines FIR routes. It connects FIR URLs to the correct controller functions and role checks.
// This line imports express to create a route group
const express = require('express')
// This part creates a router for FIR endpoints
const router = express.Router()

// This line imports controller functions that handle FIR requests
const {
    // This part handles FIR creation
    createFIR,
    // This part handles FIR listing
    getAllFIR,
    // This part handles FIR updates
    updateFIR,
    // This part handles FIR deletion
    deleteFIR
} = require('../controllers/firController')

// This line imports authentication middleware for protected FIR routes
const auth = require('../middleware/authMiddleware')
// This line imports role middleware for routes limited by user role
const authorize = require('../middleware/roleMiddleware')

// This check allows police and admins to create FIR records from complaints
router.post('/', auth, authorize('police', 'admin'), createFIR)
// This check allows logged in users, police, and admin to view their permitted FIR records
router.get('/', auth, getAllFIR)
// This check allows police and admins to update FIR records with ownership rules in the controller
router.put('/:id', auth, authorize('police', 'admin'), updateFIR)
// This check allows police and admins to delete FIR records with ownership rules in the controller
router.delete('/:id', auth, authorize('police', 'admin'), deleteFIR)

// This line makes the router so server.js can mount it
module.exports = router

