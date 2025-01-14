const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

router.get('/report/earnings/:userId', reportController.getEarningsReport);
router.get('/report/distribution/:userId', reportController.getDistributionReport);

module.exports = router;
