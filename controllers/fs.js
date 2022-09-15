const fs = require("fs");
const uuidv4 = require("uuidv4");
const reviews = require("../data/reviews.json");
const products = require("../data/products.json");

exports.fileSaveInterface = async (userReview) => {
  fs.readFile("./data/products.json", (err, data) => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    parsedData[0].comments.push(userReview);

    fs.writeFileSync("./data/products.json", JSON.stringify(parsedData), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      return data;
    });
  });
  return;
};

exports.getReviewData = () => {
  return products;
};
