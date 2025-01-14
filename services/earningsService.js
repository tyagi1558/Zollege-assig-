const earningsDAO = require('../dao/earningsDAO');

const updateEarningsService = async (userId, profit, level) => {
  return await earningsDAO.updateEarnings(userId, profit, level);
};

module.exports = { updateEarningsService };
