const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    level: { type: Number, default: 1 },
    isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('User', userSchema);
