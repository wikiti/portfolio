const admin = require('firebase-admin');
const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const mail = require('./mail');
const users = require('./users');

admin.initializeApp();

// Contact form
module.exports = {
  contactForm: functions.https.onRequest((request, response) => {
    return cors(request, response, () => {
      const subject = 'New message from portfolio';
      const body = `
        <p><strong>Name:</strong> ${request.body.data.name}</p>
        <p><strong>Contact:</strong> ${request.body.data.contact}</p>
        <p><strong>Message:</strong></p>
        <pre>${request.body.data.message}</pre>
      `;

      mail.send(subject, body)
        .then(() => {
          response.status(200).send({ data: { status: 'ok' } });
        })
        .catch((error) => {
          response.status(400).send({ data: { status: 'error', error: error } });
        });
    });
  }),

  userCreated: functions.auth.user().onCreate(user => users.tryRegisterFirstAdmin(user)),

  userRemoved: functions.auth.user().onDelete(user => users.unRegisterAdmin(user))
};
