// This file defines suspect API routes. It connects suspect URLs to suspect controller logic.
const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')
const {
    createSuspect,
    getAllSuspects,
    getSuspectById,
    updateSuspect,
    deleteSuspect
} = require('../controllers/suspectController')

// Creates a new suspect record, only police and admin may create suspects
router.post('/', auth, authorize('police', 'admin'), createSuspect)
// Returns all suspects, only police and admin may view suspects
router.get('/', auth, authorize('police', 'admin'), getAllSuspects)
// Returns one suspect by id
router.get('/:id', auth, getSuspectById)
// Updates a suspect, only police and admin may update
router.put('/:id', auth, authorize('police', 'admin'), updateSuspect)
// Deletes a suspect, only admin may delete
router.delete('/:id', auth, authorize('admin'), deleteSuspect)

module.exports = router
