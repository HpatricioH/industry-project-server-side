const router = require("express").Router();

const productController = require("../controllers/productController");
const multer = require("multer");

// multer config --------------------------------
const multerErrorHandler = (err, res) => {
  res.status(500).contentType("text/plain").end("Error: File upload failed!");
};

const storage = multer.diskStorage({
  filename: function (req, file, cb) {

    cb(null, file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, "./public/ReviewPictures");
  },
});

const upload = multer({ storage: storage });

// -----------------------

router.get("/", productController.getProducts);
router.post("/:id", upload.single("reviewImage"), productController.postReview);

module.exports = router;
