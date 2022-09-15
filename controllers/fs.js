const fs = require("fs");
const uuidv4 = require("uuidv4");
const reviews = require("../data/reviews.json");

exports.fileSaveInterface =async(userReview) => {
  fs.readFile("./data/reviews.json", (err, data) => {
    const parsedData = JSON.parse(data);
    parsedData.push(userReview);

    fs.writeFileSync("./data/reviews.json", JSON.stringify(parsedData), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      return data;
    });
  });
  return
};



exports.getReviewData = () => {
  return reviews;
}
