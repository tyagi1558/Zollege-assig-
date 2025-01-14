const Earnings = require('../models/Earnings');

const getEarningsByUserId = async (userId) => {
  return await Earnings.findOne({ userId });
};

const createEarnings = async (earningsData) => {
  const earnings = new Earnings(earningsData);
  return await earnings.save();
};

const updateEarnings = async (userId, profit, level) => {
  let earnings = await Earnings.findOne({ userId });
  
  if (!earnings) {
    earnings = new Earnings({
      userId,
      totalDirectEarnings: level === 1 ? profit : 0,
      totalIndirectEarnings: level === 2 ? profit : 0,
    });
  } else {
    if (level === 1) {
      earnings.totalDirectEarnings += profit;
    } else if (level === 2) {
      earnings.totalIndirectEarnings += profit;
    }
  }
  
  await earnings.save();
  return earnings;
};

module.exports = { getEarningsByUserId, createEarnings, updateEarnings };
