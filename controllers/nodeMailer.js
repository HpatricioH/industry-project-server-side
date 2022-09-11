const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.getEmailBody = (req, res) => {
  console.log(req.body);
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

const sendEmail = (email) => {
  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent:' + info.response);
    }
  });
};
