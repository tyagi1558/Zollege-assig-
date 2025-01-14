const mongoose = require('mongoose');

const earningsSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalDirectEarnings: { type: Number, default: 0 },
    totalIndirectEarnings: { type: Number, default: 0 },
});

module.exports = mongoose.model('Earnings', earningsSchema);
