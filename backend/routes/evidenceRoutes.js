// this file defines evidence routes and connects them to the evidence controller logic
const express = require('express') // import express to build routes
const multer = require('multer') // import multer to handle file uploads
const path = require('path') // import path to build upload directory paths
const auth = require('../middleware/authMiddleware') // import auth middleware for protected routes
const authorize = require('../middleware/roleMiddleware') // import role middleware for access control
const {
    createEvidence,
    getAllEvidence,
    getEvidenceById,
    updateEvidence,
    deleteEvidence
} = require('../controllers/evidenceController') // import evidence controller functions

const router = express.Router() // create a new router object

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads')) // save uploaded files to the uploads folder
    },
    filename: function (req, file, cb) {
        const safeName = `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_')}` // generate a safe filename
        cb(null, safeName) // pass the safe filename to multer
    }
})

const upload = multer({
    storage, // use the storage configuration above
    fileFilter: (req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf', 'video/mp4', 'video/mov'] // allowed upload mime types
        cb(null, allowed.includes(file.mimetype)) // accept only allowed file types
    }
})

router.post('/', auth, authorize('police', 'admin'), upload.single('file'), createEvidence) // upload evidence with file and role restrictions
router.get('/', auth, getAllEvidence) // get list of evidence records for authorized users
router.get('/:id', auth, getEvidenceById) // get one evidence record by id
router.put('/:id', auth, authorize('police', 'admin'), upload.single('file'), updateEvidence) // update evidence and optional file upload
router.delete('/:id', auth, authorize('police', 'admin'), deleteEvidence) // delete evidence by id for admin or police

module.exports = router // export the router for server.js to mount
