const router = require('express').Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.getStores);

module.exports = router;
