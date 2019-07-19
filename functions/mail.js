const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.user,
    pass: functions.config().gmail.password
  }
});

module.exports = {
  send(to, subject, body) {
    const mailOptions = {
      from: `Portfolio Web <${functions.config().gmail.user}>`,
      to: to,
      subject: subject,
      html: body
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(info);
        }
      });
    });
  }
};
