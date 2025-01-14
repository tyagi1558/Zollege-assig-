const User = require('../models/User');
const Earnings = require('../models/Earnings');
const Transaction = require('../models/Transaction');

const getUserById = async (userId) => {
    return await User.findOne({ _id: userId });
};

const getEarningsByUserId = async (userId) => {
    return await Earnings.findOne({ userId });
};

const getDirectReferrals = async (userId) => {
    return await User.find({ parentId: userId }); 
};

const getTransactionsByParentId = async (parentId) => {
    return await Transaction.find({ parentId }); 
};

module.exports = { getUserById, getEarningsByUserId, getDirectReferrals, getTransactionsByParentId };
