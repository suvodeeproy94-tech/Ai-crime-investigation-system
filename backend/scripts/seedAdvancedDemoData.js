// This script creates demo data for the advanced features.
// It uses existing admin@gmail.com, police@gmail.com, and user@gmail.com accounts.
const path = require('path') // This line imports path helpers.
const dotenv = require('dotenv') // This line imports dotenv for reading backend .env.
const mongoose = require('mongoose') // This line imports mongoose for MongoDB connection.

const User = require('../models/User') // This line imports user model.
const Complaint = require('../models/Complaint') // This line imports complaint model.
const FIR = require('../models/FIR') // This line imports FIR model.
const Case = require('../models/Case') // This line imports case model.
const Suspect = require('../models/Suspect') // This line imports suspect model.
const Evidence = require('../models/Evidence') // This line imports evidence model.
const Notification = require('../models/Notification') // This line imports notification model.
const ChatMessage = require('../models/ChatMessage') // This line imports chat message model.
const Meeting = require('../models/Meeting') // This line imports meeting model.
const Report = require('../models/Report') // This line imports report model.
const ActivityLog = require('../models/ActivityLog') // This line imports activity log model.

// This line loads environment variables from backend/.env.
dotenv.config({ path: path.join(__dirname, '..', '.env') })

// This helper finds one user by email and stops when user is missing.
const findUserByEmail = async (email) => {
    const user = await User.findOne({ email }) // This line searches user by email.

    // This check stops the script if required user is not found.
    if (!user) {
        throw new Error(`User not found: ${email}`)
    }

    return user // This line returns the found user.
}

// This helper creates a record only when it does not already exist.
const findOrCreate = async (Model, filter, data) => {
    const existingRecord = await Model.findOne(filter) // This line checks existing record.

    // This check avoids duplicate demo data.
    if (existingRecord) {
        return existingRecord
    }

    return Model.create(data) // This line creates the record when missing.
}

// This helper adds one id to a list without duplicate values.
const addIdToList = (oldList, newId) => {
    const finalList = [] // This list stores clean ids.
    const usedIds = {} // This object remembers added ids.

    // This loop copies old ids first.
    for (const item of oldList || []) {
        const textId = String(item)

        if (!usedIds[textId]) {
            usedIds[textId] = true
            finalList.push(item)
        }
    }

    const newTextId = String(newId) // This line changes new id to text.

    // This check adds new id only once.
    if (!usedIds[newTextId]) {
        finalList.push(newId)
    }

    return finalList // This line returns the cleaned list.
}

// This helper creates one activity log for demo checking.
const createDemoLog = async (user, action, moduleName, description, targetId) => {
    return findOrCreate(
        ActivityLog,
        { action, moduleName, description },
        {
            user: user._id,
            userRole: user.role,
            action,
            moduleName,
            description,
            targetId: String(targetId)
        }
    )
}

// This function creates all advanced demo records.
const seedAdvancedDemoData = async () => {
    const mongoURI = process.env.MONGO_URI // This line reads MongoDB URL.

    // This check stops script when MongoDB URL is missing.
    if (!mongoURI || mongoURI === 'your_mongodb_url') {
        throw new Error('Please set a valid MONGO_URI in backend/.env')
    }

    await mongoose.connect(mongoURI) // This line connects to MongoDB.
    console.log('Connected to MongoDB for advanced demo seed')

    // This part loads your existing users from the screenshot.
    const adminUser = await findUserByEmail('admin@gmail.com')
    const policeUser = await findUserByEmail('police@gmail.com')
    const normalUser = await findUserByEmail('user@gmail.com')

    // This part creates a complaint for the normal user.
    const complaint = await findOrCreate(
        Complaint,
        { title: 'DEMO ADVANCED Complaint - Market Chain Snatching' },
        {
            title: 'DEMO ADVANCED Complaint - Market Chain Snatching',
            description: 'Demo complaint filed by the user for checking complaint, FIR, notification, and logs.',
            location: 'New Market, Kolkata',
            createdBy: normalUser._id,
            assignedTo: policeUser._id,
            status: 'under review'
        }
    )

    // This part creates an FIR linked to the complaint.
    const fir = await findOrCreate(
        FIR,
        { title: 'DEMO ADVANCED FIR - Market Chain Snatching' },
        {
            title: 'DEMO ADVANCED FIR - Market Chain Snatching',
            description: 'Demo FIR created by police for the advanced feature test.',
            location: 'New Market, Kolkata',
            status: 'investigating',
            createdBy: policeUser._id,
            complaint: complaint._id
        }
    )

    // This part links the complaint with the FIR.
    complaint.firCreated = fir._id
    await complaint.save()

    // This part creates a mapped case with latitude and longitude.
    const mappedCase = await findOrCreate(
        Case,
        { title: 'DEMO ADVANCED Case - Kolkata Crime Map Test' },
        {
            title: 'DEMO ADVANCED Case - Kolkata Crime Map Test',
            description: 'Demo mapped case for checking Google Maps markers and live case refresh.',
            location: 'New Market, Kolkata',
            latitude: 22.5605,
            longitude: 88.3525,
            status: 'under_review',
            priority: 'high',
            assignedTo: policeUser._id,
            filedBy: normalUser._id
        }
    )

    // This part creates another mapped case so the map shows more than one marker.
    const secondMappedCase = await findOrCreate(
        Case,
        { title: 'DEMO ADVANCED Case - Howrah Map Test' },
        {
            title: 'DEMO ADVANCED Case - Howrah Map Test',
            description: 'Second demo mapped case for checking multiple crime map points.',
            location: 'Howrah Station Area',
            latitude: 22.5839,
            longitude: 88.3423,
            status: 'open',
            priority: 'medium',
            assignedTo: policeUser._id,
            filedBy: normalUser._id
        }
    )

    // This part creates one suspect linked with the mapped case.
    const suspect = await findOrCreate(
        Suspect,
        { name: 'DEMO ADVANCED Suspect - Rohan Das' },
        {
            name: 'DEMO ADVANCED Suspect - Rohan Das',
            age: 28,
            gender: 'male',
            lastSeenLocation: 'New Market, Kolkata',
            status: 'wanted',
            relatedCases: [mappedCase._id],
            createdBy: policeUser._id
        }
    )

    // This part creates evidence linked with the mapped case.
    const evidence = await findOrCreate(
        Evidence,
        { title: 'DEMO ADVANCED Evidence - CCTV Snapshot' },
        {
            title: 'DEMO ADVANCED Evidence - CCTV Snapshot',
            description: 'Demo evidence record for checking evidence list and audit logs.',
            fileUrl: 'https://example.com/demo-advanced-cctv.jpg',
            caseId: mappedCase._id,
            suspectId: suspect._id,
            uploadedBy: policeUser._id,
            status: 'verified'
        }
    )

    // This part keeps case links updated for suspect and evidence.
    mappedCase.suspects = addIdToList(mappedCase.suspects, suspect._id)
    mappedCase.evidence = addIdToList(mappedCase.evidence, evidence._id)
    await mappedCase.save()

    // This part creates one report for the new mapped case and FIR.
    const report = await findOrCreate(
        Report,
        { title: 'DEMO ADVANCED Report - Market Chain Snatching' },
        {
            title: 'DEMO ADVANCED Report - Market Chain Snatching',
            content: 'This is a demo report to verify report listing, linking, and activity logs.',
            status: 'draft',
            caseId: mappedCase._id,
            firId: fir._id,
            createdBy: policeUser._id
        }
    )

    // This part creates one live meeting record.
    const meeting = await findOrCreate(
        Meeting,
        { title: 'DEMO ADVANCED Meeting - Case Review' },
        {
            title: 'DEMO ADVANCED Meeting - Case Review',
            roomCode: 'demo-advanced-case-review',
            createdBy: adminUser._id,
            isActive: true
        }
    )

    // This part creates a chat message between police and user.
    const chatMessage = await findOrCreate(
        ChatMessage,
        {
            sender: policeUser._id,
            receiver: normalUser._id,
            text: 'DEMO ADVANCED: Please check the updated FIR and case notification.'
        },
        {
            sender: policeUser._id,
            receiver: normalUser._id,
            text: 'DEMO ADVANCED: Please check the updated FIR and case notification.'
        }
    )

    // This part creates notification for the normal user.
    const notification = await findOrCreate(
        Notification,
        { title: 'DEMO ADVANCED Alert - FIR Created', recipient: normalUser._id },
        {
            recipient: normalUser._id,
            title: 'DEMO ADVANCED Alert - FIR Created',
            message: 'A demo FIR and mapped case were created for checking real-time notifications.',
            read: false,
            relatedCase: mappedCase._id,
            createdBy: policeUser._id
        }
    )

    // This part creates activity logs for checking audit tracking page.
    await createDemoLog(normalUser, 'create', 'complaint', `Created complaint "${complaint.title}"`, complaint._id)
    await createDemoLog(policeUser, 'create', 'fir', `Created FIR "${fir.title}"`, fir._id)
    await createDemoLog(policeUser, 'create', 'case', `Created mapped case "${mappedCase.title}"`, mappedCase._id)
    await createDemoLog(policeUser, 'create', 'evidence', `Uploaded evidence "${evidence.title}"`, evidence._id)
    await createDemoLog(policeUser, 'create', 'suspect', `Created suspect "${suspect.name}"`, suspect._id)
    await createDemoLog(policeUser, 'create', 'report', `Created report "${report.title}"`, report._id)
    await createDemoLog(adminUser, 'create', 'meeting', `Created meeting "${meeting.title}"`, meeting._id)
    await createDemoLog(policeUser, 'send', 'chat', 'Sent demo chat message', chatMessage._id)
    await createDemoLog(policeUser, 'create', 'notification', `Created notification "${notification.title}"`, notification._id)
    await createDemoLog(policeUser, 'create', 'case', `Created mapped case "${secondMappedCase.title}"`, secondMappedCase._id)

    console.log('Advanced demo data created successfully')
    console.log('Use these pages to check:')
    console.log('1. Crime Map')
    console.log('2. Activity Logs')
    console.log('3. Notifications')
    console.log('4. Chat')
    console.log('5. Cases')
}

// This part runs the seed and closes MongoDB connection.
seedAdvancedDemoData()
    .catch((error) => {
        console.error('Advanced demo seed failed:', error.message)
        process.exitCode = 1
    })
    .finally(async () => {
        await mongoose.connection.close()
        console.log('MongoDB connection closed')
    })
