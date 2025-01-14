const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Earnings = require('../models/Earnings');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const getUserById = async (userId) => {
    return await User.findOne({ _id: userId });
  };
  

const countReferrals = async (parentId) => {
  return await User.countDocuments({ parentId });
};

const deleteUserById = async (userId) => {
  await Transaction.deleteMany({ userId });
  await Earnings.deleteMany({ userId });
  return await User.findByIdAndDelete({ _id: userId });
};

module.exports = { createUser, getUserById, countReferrals, deleteUserById };
