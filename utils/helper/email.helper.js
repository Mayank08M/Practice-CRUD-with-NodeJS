// In userController.js or a separate file like emailUtils.js
require('dotenv').config();
const nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const password = process.env.PASSWORD;


const sendEmail = async (to, subject, text) => {
    try {
      const transporter = nodemailer.createTransport({
        // Configure your email provider here
        service: 'gmail',
        auth: {
          user: email,
          pass: password,
        },
      });
  
      const mailOptions = {
        from: email,
        to,
        subject,
        text,
      };
      console.log(to)
  
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  module.exports = sendEmail
  