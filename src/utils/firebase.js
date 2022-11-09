import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions';

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_URL
});

if (process.VUE_APP_FIREBASE_FUNCTIONS_EMULATOR !== '') {
  firebase.functions().useEmulator(...process.env.VUE_APP_FIREBASE_FUNCTIONS_EMULATOR.split(':'));
}

export default firebase;
