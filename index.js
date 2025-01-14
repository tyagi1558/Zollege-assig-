const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
const earningsRoutes = require('./routes/earningsRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const reportRoutes = require('./routes/reportRoutes');

const connectDB = require('./config/database');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
connectDB();

app.use('/api/referral', referralRoutes);
app.use('/api/earnings', earningsRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
