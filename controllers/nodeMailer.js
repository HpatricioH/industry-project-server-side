const nodemailer = require("nodemailer");
const ejs = require("ejs");
const voucher_code = require("voucher-code-generator");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.getPurchaseInfo = async (req, res, next) => {
  const { email } = req.body;

  ejs.renderFile("ejs/purchaseEmail.ejs", (err, data, next) => {
    if (err) {
      console.log(err);
    } else {
      const emailBody = {
        from: process.env.email,
        to: email,
        subject: "Purchase confirmation",
        html: data,
      };
      sendEmail(emailBody);

    }
  });

  res.send("hello");
};

exports.getDiscountEmail = async (email,points) => {

  
  // console.log(points);
  const discount = voucher_code.generate({
    length: 8,
    count: 1,
  });
  

  console.log(1);
  ejs.renderFile(
      "ejs/discountEmail.ejs",
      { discVoucher: discount, discAmount: "10%" },
      (err, data) => {
        const emailBody = {
          from: process.env.email,
          to: email,
          subject: "Bay Discount",
          html: data,
        };
        sendEmail(emailBody);
         return;

      }
   );
  console.log(2);


  return
  

  

  
};



const sendEmail = (email) => {
  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent:" + info.response);
    }
  });
};
