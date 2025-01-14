const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    profitPercentage: { type: Number, required: true },
    profitEarned: { type: Number, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
