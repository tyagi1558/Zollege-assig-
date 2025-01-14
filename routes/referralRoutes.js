const express = require('express');
const referralController = require('../controllers/referralController');
const router = express.Router();

router.post('/register', referralController.registerUser);
router.delete('/user/:userId', referralController.deleteUser);

module.exports = router;
