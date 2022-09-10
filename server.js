const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config();

const { PORT } = process.env;

const storesRoutes = require('./routes/stores');

app.use(express.json());
app.use(cors());

app.use('/stores', storesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server Running in port ${PORT}`);
});
