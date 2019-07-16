const admin = require('firebase-admin');
const _ = require('lodash');

class BreakSignal { }

module.exports = {
  list() {
    return admin.auth().listUsers().then((userRecords) => {
      return userRecords.users;
    });
  },
  tryRegisterFirstAdmin(user) {
    return admin.database().ref('metadata').once('value').then((snapshot) => {
      if (!_.isEmpty(snapshot.val())) {
        throw new BreakSignal();
      }

      // Set custom user claims on this newly created user.
      return admin.auth().setCustomUserClaims(user.uid, { admin: true });
    })
    .then(() => admin.database().ref(`metadata/${user.uid}`).set({ refreshTime: Date.now() }))
    .catch((err) => {
      if (!err instanceof BreakSignal) {
        throw err;
      }
    });
  },
  unRegisterAdmin(user) {
    return admin.database().ref(`metadata/${user.uid}`).remove();
  }
}
