// This file defines complaint routes and connects them to controller actions.
const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates complaint router

const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const authorize = require('../middleware/roleMiddleware') // This line imports role middleware
const {
    createComplaint,
    getAllComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint
} = require('../controllers/complaintController') // This line imports complaint controller functions

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

module.exports = router // This line exports complaint routes
