// In userController.js or a separate file like emailUtils.js
require('dotenv').config();
const nodemailer = require('nodemailer');
require('dotenv').config();
const AsyncHandler = require('../handlers/Async.handler');


const sendEmail = AsyncHandler(async ({ to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
  console.log('Email sent successfully');
});

module.exports = sendEmail
