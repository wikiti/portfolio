import firebase from '@/utils/firebase';
import store from '@/store';

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    store.dispatch('logout');
    return;
  }

  // NOTE: Perhaps using `getIdTokenResult(true)` adds some overhead (i.e. refreshing the JWT
  //   token). However, since this is much easier than using realtime database, this solution suits
  //   this simple application perfectly.
  user.getIdTokenResult(true)
    .then(token => store.dispatch(token.claims.admin ? 'loginAsAdmin' : 'login', user))
    .catch(() => store.dispatch('logout'));
});


export default {
  checkUser() {
    return new Promise(resolve => firebase.auth().onAuthStateChanged(resolve));
  },
  checkAdminUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          resolve(null);
          return;
        }

        user.getIdTokenResult(true)
          .then(token => resolve(token.claims.admin ? user : null))
          .catch(reject);
      });
    });
  },
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  }
};
