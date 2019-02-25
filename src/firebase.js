import firebase from 'firebase';

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.VUE_APP_FIREBASE_AUTH}`,
  databaseURL: `${process.env.VUE_APP_FIREBASE_BATABASE_URL}`,
  storageBucket: `${process.env.VUE_APP_FIREBASE_STORAGE_URL}`
});

window.firebase = firebase; // TODO: Remove

export default firebase;
