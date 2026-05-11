// This file defines report routes
// This file connects report urls with report controller functions
const express = require('express') // This line imports express for route creation
const router = express.Router() // This line creates report router

const auth = require('../middleware/authMiddleware') // This line imports auth middleware
const { createReport, getAllReports, getReportById, updateReport, deleteReport } = require('../controllers/reportController') // This line imports report controller functions

// This route creates a new report for any logged in user
router.post('/', auth, createReport)
// This route returns report list for logged in user
router.get('/', auth, getAllReports)
// This route returns one report by id
router.get('/:id', auth, getReportById)
// This route updates one report
router.put('/:id', auth, updateReport)
// This route deletes one report
router.delete('/:id', auth, deleteReport)

module.exports = router // This line exports report routes
