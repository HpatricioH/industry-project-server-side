const router = require('express').Router();
const storeController = require('../controllers/storeController');
const nodeMailer = require('../controllers/nodeMailer');

router.get('/', storeController.getStores);
router.post('/email', nodeMailer.getEmailBody);

module.exports = router;
