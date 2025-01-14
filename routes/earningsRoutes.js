const express = require('express');
const earningsController = require('../controllers/earningsController');
const router = express.Router();

router.get('/earnings/:userId', earningsController.getEarnings);

module.exports = router;
