import firebase from '@/utils/firebase';

const experience = {
  get() {
    return firebase.database().ref('/experience').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  },
  upsert(id, properties) {
    return firebase.database().ref(`/experience/${id}`).set(properties);
  },
  delete(id) {
    return firebase.database().ref(`/experience/${id}`).remove();
  }
};

export default experience;
