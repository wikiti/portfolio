const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: functions.config().mail?.host,
  port: functions.config().mail?.port || 587,
  secure: false,
  auth: {
    user: functions.config().mail?.user,
    pass: functions.config().mail?.password
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = {
  send(subject, body) {
    const mailOptions = {
      from: `Portfolio Web <${functions.config().mail?.user}>`,
      to: functions.config().mail?.to,
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
