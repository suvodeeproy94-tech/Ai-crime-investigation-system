// This file seeds simple demo data for testing the full project flow.
// This script creates demo users, complaints, FIRs, cases, suspects, evidence, and notifications.
const path = require('path') // This line imports path helpers.
const dotenv = require('dotenv') // This line imports dotenv for env variables.
const mongoose = require('mongoose') // This line imports mongoose for MongoDB connection.
const bcrypt = require('bcryptjs') // This line imports bcrypt for password hashing.

const User = require('../models/User') // This line imports User model.
const Complaint = require('../models/Complaint') // This line imports Complaint model.
const FIR = require('../models/FIR') // This line imports FIR model.
const Case = require('../models/Case') // This line imports Case model.
const Suspect = require('../models/Suspect') // This line imports Suspect model.
const Evidence = require('../models/Evidence') // This line imports Evidence model.
const Notification = require('../models/Notification') // This line imports Notification model.

// This line loads environment variables from backend/.env.
dotenv.config({ path: path.join(__dirname, '..', '.env') })

// This helper returns a created record or an existing record based on a filter.
const findOrCreate = async (Model, filter, data) => {
    const existing = await Model.findOne(filter) // This line checks if record already exists.
    if (existing) {
        return existing // This line returns existing record when found.
    }
    return Model.create(data) // This line creates and returns a new record when missing.
}

// This helper makes sure demo users always have the latest demo password and role.
const ensureDemoUser = async ({ name, email, passwordHash, role }) => {
    let user = await User.findOne({ email }) // This line checks whether the demo user already exists.

    if (!user) {
        user = await User.create({
            name,
            email,
            password: passwordHash,
            role
        }) // This line creates the demo user when missing.
    } else {
        user.name = name // This line updates demo user name.
        user.password = passwordHash // This line resets demo user password every time.
        user.role = role // This line keeps demo user role correct.
        await user.save() // This line saves updated demo user data.
    }

    return user // This line returns the ensured demo user.
}

// This helper adds one MongoDB id to a list without creating duplicate ids.
const addMongoIdToList = (currentList, newId) => {
    const finalList = [] // This list will hold the clean MongoDB ids.
    const usedIds = {} // This object remembers which ids are already added.
    const sourceList = currentList || [] // This line keeps the code safe when list is empty.

    // First copy the ids that are already saved on the record.
    for (const item of sourceList) {
        const textId = String(item) // This line changes id to text for easy comparison.

        if (!usedIds[textId]) {
            usedIds[textId] = true // This line marks the id as already used.
            finalList.push(new mongoose.Types.ObjectId(textId)) // This line adds the id in MongoDB format.
        }
    }

    // Then add the new id when it is not already present.
    const newTextId = String(newId)

    if (!usedIds[newTextId]) {
        finalList.push(new mongoose.Types.ObjectId(newTextId)) // This line adds the new id in MongoDB format.
    }

    return finalList // This line returns the cleaned id list.
}

// This helper creates all demo records in proper order.
const seed = async () => {
    const mongoURI = process.env.MONGO_URI // This line reads MongoDB URL from env.

    // This check stops execution when database URL is missing.
    if (!mongoURI || mongoURI === 'your_mongodb_url') {
        throw new Error('Please set a valid MONGO_URI in backend/.env')
    }

    await mongoose.connect(mongoURI) // This line connects to MongoDB.
    console.log('Connected to MongoDB for demo seed') // This line prints seed connection success message.

    const demoPasswordPlain = 'Demo@12345' // This line sets demo password for all demo users.
    const demoPasswordHashed = await bcrypt.hash(demoPasswordPlain, 10) // This line hashes demo password.

    // This part creates or loads demo users.
    const adminUser = await ensureDemoUser({
        name: 'Demo Admin',
        email: 'admin@gmail.com',
        passwordHash: demoPasswordHashed,
        role: 'admin'
    })

    const policeUser = await ensureDemoUser({
        name: 'Demo Police',
        email: 'police@gmail.com',
        passwordHash: demoPasswordHashed,
        role: 'police'
    })

    const citizenUser = await ensureDemoUser({
        name: 'Demo User',
        email: 'user@gmail.com',
        passwordHash: demoPasswordHashed,
        role: 'user'
    })

    // This part creates or loads demo complaints.
    const complaintA = await findOrCreate(
        Complaint,
        { title: 'DEMO Complaint - Central Theft', createdBy: citizenUser._id },
        {
            title: 'DEMO Complaint - Central Theft',
            description: 'Demo complaint about mobile theft near Central Market.',
            location: 'Central Market',
            createdBy: citizenUser._id,
            assignedTo: policeUser._id,
            status: 'under review'
        }
    )

    const complaintB = await findOrCreate(
        Complaint,
        { title: 'DEMO Complaint - West Assault', createdBy: citizenUser._id },
        {
            title: 'DEMO Complaint - West Assault',
            description: 'Demo complaint about assault incident near West End.',
            location: 'West End',
            createdBy: citizenUser._id,
            assignedTo: policeUser._id,
            status: 'open'
        }
    )

    // This part creates or loads demo FIR records.
    const firA = await findOrCreate(
        FIR,
        { title: 'DEMO FIR - Central Theft', complaint: complaintA._id },
        {
            title: 'DEMO FIR - Central Theft',
            description: 'FIR created for demo complaint at Central Market.',
            location: 'Central Market',
            status: 'investigating',
            createdBy: policeUser._id,
            complaint: complaintA._id
        }
    )

    const firB = await findOrCreate(
        FIR,
        { title: 'DEMO FIR - West Assault', complaint: complaintB._id },
        {
            title: 'DEMO FIR - West Assault',
            description: 'FIR created for demo complaint at West End.',
            location: 'West End',
            status: 'pending',
            createdBy: policeUser._id,
            complaint: complaintB._id
        }
    )

    // This part links complaints back to their FIR IDs.
    complaintA.firCreated = firA._id // This line links complaint A to FIR A.
    complaintB.firCreated = firB._id // This line links complaint B to FIR B.
    await complaintA.save() // This line saves complaint A updates.
    await complaintB.save() // This line saves complaint B updates.

    // This part creates or loads demo case records.
    const caseA = await findOrCreate(
        Case,
        { title: 'DEMO Case - Central Theft Ring' },
        {
            title: 'DEMO Case - Central Theft Ring',
            description: 'Demo case tracking repeated theft reports in central zone.',
            location: 'Central District',
            status: 'under_review',
            priority: 'high',
            assignedTo: policeUser._id,
            filedBy: adminUser._id
        }
    )

    const caseB = await findOrCreate(
        Case,
        { title: 'DEMO Case - West Assault Followup' },
        {
            title: 'DEMO Case - West Assault Followup',
            description: 'Demo case for assault followup and witness verification.',
            location: 'West End',
            status: 'open',
            priority: 'medium',
            assignedTo: policeUser._id,
            filedBy: adminUser._id
        }
    )

    // This part creates or loads demo suspects.
    const suspectA = await findOrCreate(
        Suspect,
        { name: 'DEMO Suspect - Arjun Rao' },
        {
            name: 'DEMO Suspect - Arjun Rao',
            age: 29,
            gender: 'male',
            lastSeenLocation: 'Central District',
            status: 'wanted',
            relatedCases: [caseA._id],
            createdBy: policeUser._id
        }
    )

    const suspectB = await findOrCreate(
        Suspect,
        { name: 'DEMO Suspect - Rita Sen' },
        {
            name: 'DEMO Suspect - Rita Sen',
            age: 34,
            gender: 'female',
            lastSeenLocation: 'West End',
            status: 'unknown',
            relatedCases: [caseB._id],
            createdBy: policeUser._id
        }
    )

    // This part creates or loads demo evidence records.
    const evidenceA = await findOrCreate(
        Evidence,
        { title: 'DEMO Evidence - CCTV Clip', caseId: caseA._id },
        {
            title: 'DEMO Evidence - CCTV Clip',
            description: 'Demo CCTV record from market entry camera.',
            fileUrl: 'https://example.com/demo-cctv.mp4',
            caseId: caseA._id,
            suspectId: suspectA._id,
            uploadedBy: policeUser._id,
            status: 'verified'
        }
    )

    const evidenceB = await findOrCreate(
        Evidence,
        { title: 'DEMO Evidence - Witness Note', caseId: caseB._id },
        {
            title: 'DEMO Evidence - Witness Note',
            description: 'Demo witness statement document.',
            fileUrl: 'https://example.com/demo-witness-note.pdf',
            caseId: caseB._id,
            suspectId: suspectB._id,
            uploadedBy: policeUser._id,
            status: 'collected'
        }
    )

    // This part updates case links for suspects and evidence.
    caseA.suspects = addMongoIdToList(caseA.suspects, suspectA._id) // This line keeps suspect A linked to case A.
    caseA.evidence = addMongoIdToList(caseA.evidence, evidenceA._id) // This line keeps evidence A linked to case A.
    caseB.suspects = addMongoIdToList(caseB.suspects, suspectB._id) // This line keeps suspect B linked to case B.
    caseB.evidence = addMongoIdToList(caseB.evidence, evidenceB._id) // This line keeps evidence B linked to case B.
    await caseA.save() // This line saves case A links.
    await caseB.save() // This line saves case B links.

    // This part creates demo notifications.
    await findOrCreate(
        Notification,
        { title: 'DEMO Alert - FIR Updated', recipient: citizenUser._id },
        {
            recipient: citizenUser._id,
            title: 'DEMO Alert - FIR Updated',
            message: 'Your demo FIR status changed to investigating.',
            read: false,
            relatedCase: caseA._id,
            createdBy: policeUser._id
        }
    )

    await findOrCreate(
        Notification,
        { title: 'DEMO Alert - Evidence Added', recipient: adminUser._id },
        {
            recipient: adminUser._id,
            title: 'DEMO Alert - Evidence Added',
            message: 'New demo evidence was added to a case.',
            read: false,
            relatedCase: caseB._id,
            createdBy: policeUser._id
        }
    )

    console.log('Demo seed completed successfully') // This line prints seed success message.
    console.log('Demo user login credentials:') // This line prints login heading.
    console.log('Admin: admin@gmail.com / Demo@12345') // This line prints admin login.
    console.log('Police: police@gmail.com / Demo@12345') // This line prints police login.
    console.log('User: user@gmail.com / Demo@12345') // This line prints user login.
}

// This part runs the seed and closes database connection.
seed()
    .catch((error) => {
        console.error('Demo seed failed:', error.message) // This line prints the seed error.
        process.exitCode = 1 // This line sets failed exit code.
    })
    .finally(async () => {
        await mongoose.connection.close() // This line closes MongoDB connection.
        console.log('MongoDB connection closed') // This line prints close message.
    })
