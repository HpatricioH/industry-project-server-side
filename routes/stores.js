const router = require('express').Router();
const storeController = require('../controllers/storeController');
const nodeMailer = require('../controllers/nodeMailer');

router.get('/', storeController.getStores);
router.post('/email', nodeMailer.getEmailBody);
router.post('/item/:id', nodeMailer.getPurchaseInfo);
router.post('/discount', nodeMailer.getDiscount);

module.exports = router;
