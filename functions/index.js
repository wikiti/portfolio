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
      users.list().then((users) => {
        // TODO: Update subject and body!
        const emails = users.map(user => user.email).join(', ');
        const subject = 'New message from portafolio';
        const body = `
          Yo mate! Look at <strong>this</strong>!
        `;

        return mail.send(emails, subject, body);
      })
      .then((result) => {
        response.status(200).send({ data: { status: 'ok' } });
      })
      .catch((error) => {
        response.status(400).send({ data: { status: 'error', error: error } });
      });
    });
  }),

  userCreated: functions.auth.user().onCreate((user) => users.tryRegisterFirstAdmin(user)),

  userRemoved: functions.auth.user().onDelete((user) => users.unRegisterAdmin(user))
};
