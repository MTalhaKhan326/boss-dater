const nodemailer = require("nodemailer");
const pug = require("pug");
const { convert } = require("html-to-text");
const smtpTransport = require("nodemailer-smtp-transport");
const {
  prepareForgotPasswordTemplate,
} = require("./../email_templates/forgot_password");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.from = process.env.MAIL_FROM;
  }

  //Create Transport
  newTransport() {
    // if(process.env.NODE_ENV === 'production')
    // {
    //   return 1;
    // }

    return nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async send(template, subject) {
    // 1) Render HTML based on pug template
    const html = pug.renderFile(
      `${__dirname}/../email_templates/${template}.pug`,
      {
        url: this.url,
        subject,
      }
    );

    // 2) Define mail options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html: html,
      text: convert(html),
    };

    // 3) Actually send the email
    await this.newTransport().sendMail(mailOptions);
  }

  //send welcome Email
  async sendWelcome() {
    await this.send("welcome", "Welcome to the natours Family");
  }

  async sendPasswordReset() {
    await this.send(
      "resetPassword",
      "Your password reset token (valid for only 10 minutes)"
    );
  }

  // async sendForgotPasswordEmail(email, subject, code) {
  //   //Create a transporter
  //   let transporter = await nodemailer.createTransport(
  //     smtpTransport({
  //       host: process.env.MAIL_HOST,
  //       port: process.env.MAIL_PORT,
  //       auth: {
  //         user: process.env.MAIL_USER,
  //         pass: process.env.MAIL_PASS,
  //       },
  //     })
  //   );
  
  //   //Define email options
  //   let mailOptions = {
  //     from: process.env.MAIL_USER,
  //     to: email,
  //     subject: subject,
  //     html: prepareForgotPasswordTemplate(code),
  //   };
  
  //   //Send an email
  //   await transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) console.log(error);
  //     console.log(info);
  //   });
  // }
  
};

// 




// exports.sendForgotPasswordEmail = (email, subject, code) => {
//   let transporter = nodemailer.createTransport(
//     smtpTransport({
//       host: process.env.MAIL_HOST,
//       port: process.env.MAIL_PORT,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     })
//   );
//   let mailOptions = {
//     from: process.env.MAIL_USER,
//     to: email,
//     subject: subject,
//     html: prepareForgotPasswordTemplate(code),
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) console.log(error);
//     console.log(info);
//   });
// };
