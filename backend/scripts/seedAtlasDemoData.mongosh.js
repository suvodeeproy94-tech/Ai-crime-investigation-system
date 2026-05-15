// This file adds demo data directly with mongosh.
// Use this when Node.js has trouble reading MongoDB Atlas SRV links.

// This line keeps one password hash for all demo users.
const demoPasswordHash = '$2b$10$6Z1z2c.mKvjiT0lxkM/z7uD3rARI5hVKPy50jEpYVWg5ODg32spI6'

// This line keeps the current date for created and updated time.
const now = new Date()

// This function creates or updates one document and returns the saved document.
function saveRecord(collectionName, searchData, recordData) {
    // This line adds update time to every saved record.
    recordData.updatedAt = now

    // This line creates the record if missing, or updates it if found.
    db[collectionName].updateOne(
        searchData,
        {
            $set: recordData,
            $setOnInsert: {
                createdAt: now
            }
        },
        {
            upsert: true
        }
    )

    // This line returns the saved record for using its id in other records.
    return db[collectionName].findOne(searchData)
}

// This function creates or updates one demo user.
function saveUser(name, email, role) {
    // This line saves one user with demo password and selected role.
    return saveRecord(
        'users',
        { email: email },
        {
            name: name,
            email: email,
            password: demoPasswordHash,
            role: role,
            twoFactorEnabled: false
        }
    )
}

// This part creates demo users.
const adminUser = saveUser('Demo Admin', 'admin@gmail.com', 'admin')
const policeUser = saveUser('Demo Police', 'police@gmail.com', 'police')
const normalUser = saveUser('Demo User', 'user@gmail.com', 'user')

// This part creates demo complaints.
const complaintA = saveRecord(
    'complaints',
    { title: 'DEMO Complaint - Central Theft' },
    {
        title: 'DEMO Complaint - Central Theft',
        description: 'Demo complaint about mobile theft near Central Market.',
        location: 'Central Market',
        createdBy: normalUser._id,
        assignedTo: policeUser._id,
        status: 'under review'
    }
)

const complaintB = saveRecord(
    'complaints',
    { title: 'DEMO Complaint - West Assault' },
    {
        title: 'DEMO Complaint - West Assault',
        description: 'Demo complaint about assault incident near West End.',
        location: 'West End',
        createdBy: normalUser._id,
        assignedTo: policeUser._id,
        status: 'open'
    }
)

const complaintC = saveRecord(
    'complaints',
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

// This part creates demo FIR records.
const firA = saveRecord(
    'firs',
    { title: 'DEMO FIR - Central Theft' },
    {
        title: 'DEMO FIR - Central Theft',
        description: 'FIR created for demo complaint at Central Market.',
        location: 'Central Market',
        status: 'investigating',
        statusHistory: [
            {
                status: 'investigating',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        createdBy: policeUser._id,
        complaint: complaintA._id
    }
)

const firB = saveRecord(
    'firs',
    { title: 'DEMO FIR - West Assault' },
    {
        title: 'DEMO FIR - West Assault',
        description: 'FIR created for demo complaint at West End.',
        location: 'West End',
        status: 'pending',
        statusHistory: [
            {
                status: 'pending',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        createdBy: policeUser._id,
        complaint: complaintB._id
    }
)

const firC = saveRecord(
    'firs',
    { title: 'DEMO ADVANCED FIR - Market Chain Snatching' },
    {
        title: 'DEMO ADVANCED FIR - Market Chain Snatching',
        description: 'Demo FIR created by police for the advanced feature test.',
        location: 'New Market, Kolkata',
        status: 'investigating',
        statusHistory: [
            {
                status: 'investigating',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        createdBy: policeUser._id,
        complaint: complaintC._id
    }
)

// This part links complaints with FIR records.
db.complaints.updateOne({ _id: complaintA._id }, { $set: { firCreated: firA._id, updatedAt: now } })
db.complaints.updateOne({ _id: complaintB._id }, { $set: { firCreated: firB._id, updatedAt: now } })
db.complaints.updateOne({ _id: complaintC._id }, { $set: { firCreated: firC._id, updatedAt: now } })

// This part creates demo cases.
const caseA = saveRecord(
    'cases',
    { title: 'DEMO Case - Central Theft Ring' },
    {
        title: 'DEMO Case - Central Theft Ring',
        description: 'Demo case tracking repeated theft reports in central zone.',
        location: 'Central District',
        latitude: 22.5726,
        longitude: 88.3639,
        status: 'under_review',
        statusHistory: [
            {
                status: 'under_review',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        priority: 'high',
        assignedTo: policeUser._id,
        filedBy: adminUser._id
    }
)

const caseB = saveRecord(
    'cases',
    { title: 'DEMO Case - West Assault Followup' },
    {
        title: 'DEMO Case - West Assault Followup',
        description: 'Demo case for assault followup and witness verification.',
        location: 'West End',
        latitude: 22.5744,
        longitude: 88.3629,
        status: 'open',
        statusHistory: [
            {
                status: 'open',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        priority: 'medium',
        assignedTo: policeUser._id,
        filedBy: adminUser._id
    }
)

const caseC = saveRecord(
    'cases',
    { title: 'DEMO ADVANCED Case - Kolkata Crime Map Test' },
    {
        title: 'DEMO ADVANCED Case - Kolkata Crime Map Test',
        description: 'Demo mapped case for checking Google Maps markers and live case refresh.',
        location: 'New Market, Kolkata',
        latitude: 22.5605,
        longitude: 88.3525,
        status: 'under_review',
        statusHistory: [
            {
                status: 'under_review',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        priority: 'high',
        assignedTo: policeUser._id,
        filedBy: normalUser._id
    }
)

const caseD = saveRecord(
    'cases',
    { title: 'DEMO ADVANCED Case - Howrah Map Test' },
    {
        title: 'DEMO ADVANCED Case - Howrah Map Test',
        description: 'Second demo mapped case for checking multiple crime map points.',
        location: 'Howrah Station Area',
        latitude: 22.5839,
        longitude: 88.3423,
        status: 'open',
        statusHistory: [
            {
                status: 'open',
                changedBy: policeUser._id,
                changedAt: now
            }
        ],
        priority: 'medium',
        assignedTo: policeUser._id,
        filedBy: normalUser._id
    }
)

// This part creates demo suspects.
const suspectA = saveRecord(
    'suspects',
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

const suspectB = saveRecord(
    'suspects',
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

const suspectC = saveRecord(
    'suspects',
    { name: 'DEMO ADVANCED Suspect - Rohan Das' },
    {
        name: 'DEMO ADVANCED Suspect - Rohan Das',
        age: 28,
        gender: 'male',
        lastSeenLocation: 'New Market, Kolkata',
        status: 'wanted',
        relatedCases: [caseC._id],
        createdBy: policeUser._id
    }
)

// This part creates demo evidence.
const evidenceA = saveRecord(
    'evidences',
    { title: 'DEMO Evidence - CCTV Clip' },
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

const evidenceB = saveRecord(
    'evidences',
    { title: 'DEMO Evidence - Witness Note' },
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

const evidenceC = saveRecord(
    'evidences',
    { title: 'DEMO ADVANCED Evidence - CCTV Snapshot' },
    {
        title: 'DEMO ADVANCED Evidence - CCTV Snapshot',
        description: 'Demo evidence record for checking evidence list and audit logs.',
        fileUrl: 'https://example.com/demo-advanced-cctv.jpg',
        caseId: caseC._id,
        suspectId: suspectC._id,
        uploadedBy: policeUser._id,
        status: 'verified'
    }
)

// This part links suspects and evidence with cases.
db.cases.updateOne({ _id: caseA._id }, { $set: { suspects: [suspectA._id], evidence: [evidenceA._id], updatedAt: now } })
db.cases.updateOne({ _id: caseB._id }, { $set: { suspects: [suspectB._id], evidence: [evidenceB._id], updatedAt: now } })
db.cases.updateOne({ _id: caseC._id }, { $set: { suspects: [suspectC._id], evidence: [evidenceC._id], updatedAt: now } })

// This part creates demo reports.
const reportA = saveRecord(
    'reports',
    { title: 'DEMO Report - Central Theft Summary' },
    {
        title: 'DEMO Report - Central Theft Summary',
        content: 'This is a demo report for checking report page and linked case details.',
        status: 'draft',
        caseId: caseA._id,
        firId: firA._id,
        createdBy: policeUser._id
    }
)

const reportB = saveRecord(
    'reports',
    { title: 'DEMO ADVANCED Report - Market Chain Snatching' },
    {
        title: 'DEMO ADVANCED Report - Market Chain Snatching',
        content: 'This is a demo report to verify report listing, linking, and activity logs.',
        status: 'draft',
        caseId: caseC._id,
        firId: firC._id,
        createdBy: policeUser._id
    }
)

// This part creates notifications.
const notificationA = saveRecord(
    'notifications',
    { title: 'DEMO Alert - FIR Updated', recipient: normalUser._id },
    {
        recipient: normalUser._id,
        title: 'DEMO Alert - FIR Updated',
        message: 'Your demo FIR status changed to investigating.',
        read: false,
        relatedCase: caseA._id,
        createdBy: policeUser._id
    }
)

const notificationB = saveRecord(
    'notifications',
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

const notificationC = saveRecord(
    'notifications',
    { title: 'DEMO ADVANCED Alert - FIR Created', recipient: normalUser._id },
    {
        recipient: normalUser._id,
        title: 'DEMO ADVANCED Alert - FIR Created',
        message: 'A demo FIR and mapped case were created for checking real-time notifications.',
        read: false,
        relatedCase: caseC._id,
        createdBy: policeUser._id
    }
)

// This part creates demo chat messages.
const chatA = saveRecord(
    'chatmessages',
    {
        sender: policeUser._id,
        receiver: normalUser._id,
        text: 'DEMO: Please check your FIR update.'
    },
    {
        sender: policeUser._id,
        receiver: normalUser._id,
        text: 'DEMO: Please check your FIR update.'
    }
)

const chatB = saveRecord(
    'chatmessages',
    {
        sender: normalUser._id,
        receiver: policeUser._id,
        text: 'DEMO: Thank you officer. I will check the update.'
    },
    {
        sender: normalUser._id,
        receiver: policeUser._id,
        text: 'DEMO: Thank you officer. I will check the update.'
    }
)

const chatC = saveRecord(
    'chatmessages',
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

// This part creates demo live meeting.
const meetingA = saveRecord(
    'meetings',
    { roomCode: 'demo-advanced-case-review' },
    {
        title: 'DEMO ADVANCED Meeting - Case Review',
        roomCode: 'demo-advanced-case-review',
        createdBy: adminUser._id,
        isActive: true
    }
)

// This part creates demo AI logs.
saveRecord(
    'ailogs',
    { inputText: 'DEMO AI input for theft investigation summary' },
    {
        requestedBy: policeUser._id,
        requestedByRole: 'police',
        inputText: 'DEMO AI input for theft investigation summary',
        outputText: 'Demo AI output: review CCTV footage, interview witnesses, and compare suspect movement.',
        status: 'success'
    }
)

saveRecord(
    'ailogs',
    { inputText: 'DEMO AI failed request example' },
    {
        requestedBy: adminUser._id,
        requestedByRole: 'admin',
        inputText: 'DEMO AI failed request example',
        outputText: '',
        status: 'failed',
        errorMessage: 'Demo failed AI log for testing error display.'
    }
)

// This function creates one activity log.
function saveActivity(user, action, moduleName, description, targetId) {
    return saveRecord(
        'activitylogs',
        { action: action, moduleName: moduleName, description: description },
        {
            user: user._id,
            userRole: user.role,
            action: action,
            moduleName: moduleName,
            description: description,
            targetId: String(targetId)
        }
    )
}

// This part creates demo activity logs.
saveActivity(normalUser, 'create', 'complaint', 'Created complaint "DEMO Complaint - Central Theft"', complaintA._id)
saveActivity(policeUser, 'create', 'fir', 'Created FIR "DEMO FIR - Central Theft"', firA._id)
saveActivity(policeUser, 'create', 'case', 'Created case "DEMO Case - Central Theft Ring"', caseA._id)
saveActivity(policeUser, 'create', 'evidence', 'Uploaded evidence "DEMO Evidence - CCTV Clip"', evidenceA._id)
saveActivity(policeUser, 'create', 'suspect', 'Created suspect "DEMO Suspect - Arjun Rao"', suspectA._id)
saveActivity(policeUser, 'create', 'report', 'Created report "DEMO Report - Central Theft Summary"', reportA._id)
saveActivity(adminUser, 'create', 'meeting', 'Created meeting "DEMO ADVANCED Meeting - Case Review"', meetingA._id)
saveActivity(policeUser, 'send', 'chat', 'Sent demo chat message', chatA._id)
saveActivity(policeUser, 'create', 'notification', 'Created notification "DEMO Alert - FIR Updated"', notificationA._id)
saveActivity(policeUser, 'create', 'notification', 'Created notification "DEMO Alert - Evidence Added"', notificationB._id)
saveActivity(policeUser, 'create', 'notification', 'Created notification "DEMO ADVANCED Alert - FIR Created"', notificationC._id)
saveActivity(policeUser, 'send', 'chat', 'Sent advanced demo chat message', chatC._id)
saveActivity(policeUser, 'create', 'case', 'Created mapped case "DEMO ADVANCED Case - Kolkata Crime Map Test"', caseC._id)
saveActivity(policeUser, 'create', 'case', 'Created mapped case "DEMO ADVANCED Case - Howrah Map Test"', caseD._id)
saveActivity(policeUser, 'create', 'report', 'Created report "DEMO ADVANCED Report - Market Chain Snatching"', reportB._id)

// This part prints final counts for checking in Atlas.
print('Atlas demo data seed completed')
print('users=' + db.users.countDocuments())
print('complaints=' + db.complaints.countDocuments())
print('firs=' + db.firs.countDocuments())
print('cases=' + db.cases.countDocuments())
print('suspects=' + db.suspects.countDocuments())
print('evidences=' + db.evidences.countDocuments())
print('reports=' + db.reports.countDocuments())
print('notifications=' + db.notifications.countDocuments())
print('chatmessages=' + db.chatmessages.countDocuments())
print('meetings=' + db.meetings.countDocuments())
print('ailogs=' + db.ailogs.countDocuments())
print('activitylogs=' + db.activitylogs.countDocuments())
