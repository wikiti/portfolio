const admin = require('firebase-admin');

module.exports = {
  list() {
    return admin.auth().listUsers().then((userRecords) => {
      return userRecords.users;
    });
  }
}
