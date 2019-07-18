import firebase from '@/utils/firebase';

const social = {
  get() {
    return firebase.database().ref('/social').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  },
  upsert(id, properties) {
    return firebase.database().ref(`/social/${id}`).set(properties);
  },
  delete(id) {
    return firebase.database().ref(`/social/${id}`).remove();
  }
};

export default social;
