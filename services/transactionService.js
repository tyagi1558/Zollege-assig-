const User = require('../models/User');
const EarningsService = require('./earningsService');
const { calculateProfit } = require('../utils/profitCalculator');
const transactionDAO = require('../dao/transactionDAO');


const createTransaction = async (userId, amount) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  const parentId = user.parentId;
  let transaction;
  if (!parentId) {
    return { message: 'That parent id is null' }; 
  }
  if (parentId) {
    const directProfit = calculateProfit(amount, 1);
    if (directProfit > 0) {
      const transactionData = {
        userId,
        amount,
        parentId,
        profitPercentage: 5,
        profitEarned: directProfit,
      };
      transaction = await transactionDAO.createTransaction(transactionData);
      await EarningsService.updateEarningsService(parentId, directProfit, 1);
    }

    const grandParent = await User.findById(parentId);
    if (grandParent?.parentId) {
      const indirectProfit = calculateProfit(amount, 2);
      if (indirectProfit > 0) {
        const transactionData = {
          userId,
          amount,
          parentId: grandParent.parentId,
          profitPercentage: 1,
          profitEarned: indirectProfit,
        };
        transaction = await transactionDAO.createTransaction(transactionData);
        await EarningsService.updateEarningsService(grandParent.parentId, indirectProfit, 2);
      }
    }
  }

  return transaction;
};

module.exports = { createTransaction };

