// This file defines the chat message data saved in MongoDB.
// This line imports mongoose so we can define a schema and model.
const mongoose = require('mongoose')

// This part describes one chat message document.
const chatMessageSchema = new mongoose.Schema({
    // This field stores the sender user id.
    sender: {
        // This line sets the data type as MongoDB object id.
        type: mongoose.Schema.Types.ObjectId,
        // This line links the id to the User collection.
        ref: 'User',
        // This line makes sender required for every message.
        required: true
    },
    // This field stores the receiver user id.
    receiver: {
        // This line sets the data type as MongoDB object id.
        type: mongoose.Schema.Types.ObjectId,
        // This line links the id to the User collection.
        ref: 'User',
        // This line makes receiver required for every message.
        required: true
    },
    // This field stores plain message text.
    text: {
        // This line sets the data type as string text.
        type: String,
        // This line makes text required for every message.
        required: true,
        // This line limits message size to keep it simple and safe.
        maxlength: 1000
    }
// This line adds createdAt and updatedAt time fields automatically.
}, { timestamps: true })

// This line exports the chat message model.
module.exports = mongoose.model('ChatMessage', chatMessageSchema)
