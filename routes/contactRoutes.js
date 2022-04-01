const express = require('express')
const nodemailer = require('nodemailer');
const app = express.Router();
require('dotenv').config();

app.get('/',(req, res) => res.send({ msg: 'send contact using POST' }));

app.post('/',(req, res) => {
  const { name, email, message, subject } = req.body;
  var transporter = nodemailer.createTransport({

    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  var mailOptions = {
    from: email,
    to: 'emanuelfente97@gmail.com',
    subject: `${subject}`,
    text: `${name} has messaged you saying: ${message}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).send({ msg: 'Email could not be sent' + error });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ msg: 'Message sent succesfully' });
    }
  });
})

module.exports = app;
