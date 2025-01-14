const transactionService = require('../services/transactionService');

const createTransaction = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    await transactionService.createTransaction(userId, amount);
    res.json({ message: 'Transaction recorded successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTransaction };
