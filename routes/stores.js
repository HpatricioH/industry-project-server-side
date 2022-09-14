const router = require("express").Router();
const storeController = require("../controllers/storeController");
const nodeMailer = require("../controllers/nodeMailer");

router.get("/", storeController.getStores);
router.post("/item/:id", nodeMailer.getPurchaseInfo);
router.post("/discount", storeController.postReview);

module.exports = router;
