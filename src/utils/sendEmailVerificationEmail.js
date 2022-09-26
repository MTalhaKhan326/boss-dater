const nodemailer = require("nodemailer");
const pug = require("pug");
const { convert } = require("html-to-text");
const smtpTransport = require("nodemailer-smtp-transport");
const { prepareEmailVerificationTemplate } = require("../email_templates/email_verification");

exports.sendVerificationEmail = function (email, subject, code) {
    //Create a transporter
    let transporter = nodemailer.createTransport(
      smtpTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      })
    );
  
    //Define email options
    let mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: subject,
      html: prepareEmailVerificationTemplate(code),
    };
  
    //Send an email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      console.log(info);
    });
  };