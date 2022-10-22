const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config();

const { PORT } = process.env;

const storesRoutes = require('./routes/stores');
const productRoutes = require('./routes/products');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

app.use(express.static(__dirname + 'public'));
app.use('/public', express.static('public'));

app.use('/stores', storesRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server Running in port ${PORT}`);
});
