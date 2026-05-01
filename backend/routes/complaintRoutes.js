// This file defines complaint routes and connects them to controller actions.
const express = require('express')
const router = express.Router()

const auth = require('../middleware/authMiddleware')
const authorize = require('../middleware/roleMiddleware')
const {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint
} = require('../controllers/complaintController')

// Users and admins may file a complaint
router.post('/', auth, authorize('user', 'admin'), createComplaint)
// All authenticated users may request complaint data; the controller filters by role
router.get('/', auth, getAllComplaints)
// Get one complaint with role-aware access
router.get('/:id', auth, getComplaintById)
// Update complaint if user owns it or if police/admin
router.put('/:id', auth, updateComplaint)
// Delete complaint if user owns it or if admin
router.delete('/:id', auth, deleteComplaint)

module.exports = router
