const Transaction = require('../models/Transaction');

const createTransaction = async (transactionData) => {
  const transaction = new Transaction(transactionData);
  await transaction.save();
  return transaction; 
};

const deleteTransaction = async (id) => {
  const transaction = await Transaction.findByIdAndDelete({ _id: id });
  if (!transaction) {
    throw new Error(`Transaction with ID ${id} not found`);
  }
  return transaction;
};

module.exports = { createTransaction, deleteTransaction };
