// This file defines suspect API routes. It connects suspect URLs to suspect controller logic.
const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates suspect router
const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const authorize = require('../middleware/roleMiddleware') // This line imports role middleware
const {
    createSuspect,
    getAllSuspects,
    getSuspectById,
    updateSuspect,
    deleteSuspect
} = require('../controllers/suspectController') // This line imports suspect controller functions

// Creates a new suspect record, only police and admin may create suspects
router.post('/', auth, authorize('police', 'admin'), createSuspect)
// Returns all suspects, only police and admin may view suspects
router.get('/', auth, authorize('police', 'admin'), getAllSuspects)
// Returns one suspect by id for police and admin
router.get('/:id', auth, authorize('police', 'admin'), getSuspectById)
// Updates a suspect, only police and admin may update
router.put('/:id', auth, authorize('police', 'admin'), updateSuspect)
// Deletes a suspect, only admin may delete
router.delete('/:id', auth, authorize('admin'), deleteSuspect)

module.exports = router // This line exports suspect routes
