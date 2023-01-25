const nodemailer = require("nodemailer");
const pug = require("pug");
const { convert } = require("html-to-text");
const smtpTransport = require("nodemailer-smtp-transport");
const { prepareEmailVerificationTemplate } = require("../email_templates/email_verification");

exports.sendVerificationEmail = function (email, subject, code) {
    //Create a transporter
      try{
      let transporter = nodemailer.createTransport(
        smtpTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
          authMethod:'PLAIN'
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
     return  transporter.sendMail(mailOptions, (error, info) => {
        if (error) { 
          console.log("EMAIL ERROR", error);
          return error
        }else{
          console.log("EMAIL SENT INTO",info);
          return info
        }

      });
    }catch(error) {
       console.log("Errors in sendig emails- May be missing configs", error)
       return error
    }
  };