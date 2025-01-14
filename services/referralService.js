const userDAO = require('../dao/userDAO');

const registerUser = async (name, parentId) => {
  let level = 1;

  if (parentId) {
    const parent = await userDAO.getUserById(parentId);
    if (!parent) throw new Error('Parent user not found');

    const referrals = await userDAO.countReferrals(parentId);
    if (referrals >= 8) throw new Error('Referral limit exceeded');

    level = parent.level + 1;
  }
  console.log("data", name, parentId, level)

  const user = await userDAO.createUser({ name, parentId, level });
  return user;
};

const deleteUser = async (userId) => {
    console.log("user id service", userId)

  const user = await userDAO.getUserById(userId);
  if (!user) throw new Error('User not found');
console.log(user)
  await userDAO.deleteUserById(userId);
  
  return { message: `User with ID ${userId} deleted successfully` };
};

module.exports = { registerUser, deleteUser };
