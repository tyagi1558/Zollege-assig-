const calculateProfit = (transactionAmount, level) => {
    if (transactionAmount <= 1000) return 0;
    return transactionAmount * (level === 1 ? 0.05 : 0.01);
  };
  
  module.exports = { calculateProfit };
  