import firebase from '@/utils/firebase';

const descriptions = {
  get() {
    return firebase.database().ref('/descriptions').once('value')
      .then(snapshot => snapshot.val());
  },
  upsert(properties) {
    return firebase.database().ref('/descriptions').set(properties);
  }
};

export default descriptions;
