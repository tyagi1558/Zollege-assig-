const reportService = require('../services/reportService');

const getEarningsReport = async (req, res) => {
    try {
        const { userId } = req.params;
        const report = await reportService.generateEarningsReport(userId);
        res.json(report);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDistributionReport = async (req, res) => {
    try {
        const { userId } = req.params;
        const distribution = await reportService.generateDistributionReport(userId);
        res.json(distribution);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getEarningsReport, getDistributionReport };
