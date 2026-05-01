// This file defines case API routes. It connects case URLs to case controller logic.
const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')
const {
    createCase,
    getAllCases,
    getCaseById,
    updateCase,
    deleteCase
} = require('../controllers/caseController')

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

module.exports = router
