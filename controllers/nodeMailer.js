const nodemailer = require('nodemailer');
const ejs = require('ejs');
const voucher_code = require('voucher-code-generator');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.getEmailBody = (req, res) => {
  const { points, text, email } = req.body;
  if (req.body.points) {
    emailBody.points = req.body.points;
  }

  const emailBody = {
    from: process.env.email,
    to: email,
    points: '',
  };
  sendEmail(emailBody);
  res.send('hello');
};

exports.getPurchaseInfo = async (req, res) => {
  const { email } = req.body;

  await ejs.renderFile('ejs/purchaseEmail.ejs', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const emailBody = {
        from: process.env.email,
        to: email,
        subject: 'Purchase confirmation',
        html: data,
      };
      sendEmail(emailBody);
      res.send('hello');
    }
  });
};

exports.getDiscount = async (req, res) => {
  const { points, email } = req.body;
  const discount = voucher_code.generate({
    length: 8,
    count: 1,
  });
  await ejs.renderFile(
    'ejs/discountEmail.ejs',
    { discVoucher: discount, discAmount: '20%' },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const emailBody = {
          from: process.env.email,
          to: email,
          subject: 'Bay Discount',
          html: data,
        };
        sendEmail(emailBody);
        res.send('hello');
      }
    }
  );
};

const sendEmail = (email) => {
  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:' + info.response);
    }
  });
};
