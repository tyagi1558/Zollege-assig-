const referralService = require('../services/referralService');

const registerUser = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const user = await referralService.registerUser(name, parentId);
    res.json({ message: 'User registered successfully', userId: user.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const message = await referralService.deleteUser(userId);
    res.json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, deleteUser };
