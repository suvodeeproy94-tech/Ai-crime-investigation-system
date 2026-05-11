// This file defines case API routes. It connects case URLs to case controller logic.
const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates case router
const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const authorize = require('../middleware/roleMiddleware') // This line imports role middleware
const {
    createCase,
    getAllCases,
    getCaseById,
    updateCase,
    deleteCase
} = require('../controllers/caseController') // This line imports case controller functions

// Creates a new case record, only police or admin may create cases
router.post('/', auth, authorize('police', 'admin'), createCase)
// Returns case list, police and admin may view all cases, regular users see their own
router.get('/', auth, getAllCases)
// Returns a single case by id
router.get('/:id', auth, getCaseById)
// Updates a case, only police and admin may update
router.put('/:id', auth, authorize('police', 'admin'), updateCase)
// Deletes a case, only admin may delete
router.delete('/:id', auth, authorize('admin'), deleteCase)

module.exports = router // This line exports case routes
