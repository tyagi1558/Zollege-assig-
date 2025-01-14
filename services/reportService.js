const reportDao = require('../dao/reportDao');

const generateEarningsReport = async (userId) => {
    const user = await reportDao.getUserById(userId);
    if (!user) throw new Error('User not found');

    const earnings = await reportDao.getEarningsByUserId(userId);
    const directReferrals = await reportDao.getDirectReferrals(userId);

    const report = {
        userId,
        name: user.name,
        totalDirectEarnings: earnings?.totalDirectEarnings || 0,
        totalIndirectEarnings: earnings?.totalIndirectEarnings || 0,
        directReferrals: directReferrals.map(ref => ({ id: ref.id, name: ref.name })),
    };

    return report;
};

const generateDistributionReport = async (userId) => {
    const transactions = await reportDao.getTransactionsByParentId(userId);

    const distribution = transactions.reduce((acc, transaction) => {
        acc.totalEarnings += transaction.profitEarned;
        acc.sources.push({
            userId: transaction.userId,
            amount: transaction.amount,
            profitEarned: transaction.profitEarned,
        });
        return acc;
    }, { totalEarnings: 0, sources: [] });

    return distribution;
};

module.exports = { generateEarningsReport, generateDistributionReport };
