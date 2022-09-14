const nodeMailer = require("./nodeMailer");
const saveFile = require("./fs");
const pointsEvaluator = require("../controllers/pointEvaluator");

exports.getStores = async (req, res) => {
  res.status(200).json({ message: "success" });
};

exports.postReview = async (req, res) => {
  // console.log(pointsEvaluator.evaluateDiscount(req.body.points));
 await nodeMailer.getDiscountEmail(req.body.email, pointsEvaluator.evaluateDiscount(req.body.points))

  setTimeout(() => {
    saveFile.fileSaveInterface(req.body)
  },2000)

  
 

  res.json("review saved").status(200);
};
