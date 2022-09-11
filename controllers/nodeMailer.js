const nodemailer = require('nodemailer');
const ejs = require('ejs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.getEmailBody = (req, res) => {
  const { points, text, email } = req.body;

  const emailBody = {
    from: process.env.email,
    to: email,
    subject: 'Bay discount coupon',
    html: `<p>${text}</p>
  <p>${points}</p>`,
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

const sendEmail = (email) => {
  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:' + info.response);
    }
  });
};
