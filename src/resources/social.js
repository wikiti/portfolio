import firebase from '@/firebase';

const social = {
  get() {
    return firebase.database().ref('/social').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  }
};

export default social;
