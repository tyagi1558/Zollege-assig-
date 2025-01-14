const earningsService = require('../services/earningsService');

const getEarnings = async (req, res) => {
  try {
    const { userId } = req.params;
    const earnings = await earningsService.updateEarningsService(userId);
    res.json(earnings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getEarnings };
