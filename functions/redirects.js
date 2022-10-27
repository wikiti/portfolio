const admin = require('firebase-admin');

module.exports = {
  find(id) {
    return admin.database().ref(`redirects/${id}`).once('value').then((records) => {
      return records.val();
    });
  }
};
