// This file defines evidence API routes and connects them to evidence controller functions.
// This line imports express to build route endpoints.
const express = require('express')
// This line imports multer to handle file upload data.
const multer = require('multer')
// This line imports path to build safe upload folder paths.
const path = require('path')
// This line imports auth middleware for protected routes.
const auth = require('../middleware/authMiddleware')
// This line imports role middleware for role based access checks.
const authorize = require('../middleware/roleMiddleware')
const {
    // This line handles creating new evidence.
    createEvidence,
    // This line handles reading evidence list.
    getAllEvidence,
    // This line handles reading one evidence item.
    getEvidenceById,
    // This line handles updating one evidence item.
    updateEvidence,
    // This line handles deleting one evidence item.
    deleteEvidence
// This line imports evidence controller functions.
} = require('../controllers/evidenceController')

// This line creates a new router object.
const router = express.Router()

// This part sets upload storage destination and file name rules.
const storage = multer.diskStorage({
    // This function sets upload folder path.
    destination: function (req, file, cb) {
        // This line saves uploaded files into backend uploads folder.
        cb(null, path.join(__dirname, '..', 'uploads'))
    },
    // This function creates a safe file name for uploaded files.
    filename: function (req, file, cb) {
        // This line builds safe file name using time and cleaned original name.
        const safeName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`
        // This line passes safe file name back to multer.
        cb(null, safeName)
    }
})

// This part creates multer upload config with file type filtering.
const upload = multer({
    // This line uses storage setup defined above.
    storage,
    // This line keeps uploaded files within a safe size.
    limits: { fileSize: 50 * 1024 * 1024 },
    // This function allows only selected file types.
    fileFilter: (req, file, cb) => {
        // This line lists allowed file mime types.
        const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'video/mp4', 'video/quicktime']
        if (!allowed.includes(file.mimetype)) {
            return cb(new Error('Only image video and PDF files are allowed')) // This line rejects wrong file type
        }

        cb(null, true) // This line accepts valid file type
    }
})

// This middleware sends upload errors as simple JSON
const uploadEvidenceFile = (req, res, next) => {
    upload.single('file')(req, res, (error) => {
        if (error) {
            return res.status(400).json({ message: error.message }) // This line sends upload error
        }

        next() // This line continues when upload is valid
    })
}

// This route uploads one evidence item and optional file for police and admin.
router.post('/', auth, authorize('police', 'admin'), uploadEvidenceFile, createEvidence)
// This route returns evidence list based on logged in user permissions.
router.get('/', auth, getAllEvidence)
// This route returns one evidence item by id.
router.get('/:id', auth, getEvidenceById)
// This route updates one evidence item and optional replacement file.
router.put('/:id', auth, authorize('police', 'admin'), uploadEvidenceFile, updateEvidence)
// This route deletes one evidence item by id.
// This route deletes one evidence item and only admin can use it
router.delete('/:id', auth, authorize('admin'), deleteEvidence)

// This line exports router so server.js can mount it.
module.exports = router
