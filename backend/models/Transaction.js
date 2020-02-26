const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: [true, 'Please add a some description']
    },

    amount: {
        type: Number,
        required: [true, 'Please add some negative and positive number']
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);