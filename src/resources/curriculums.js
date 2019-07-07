import firebase from '@/utils/firebase';

const curriculums = {
  get() {
    return firebase.database().ref('/curriculums').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  },
  upsert(id, properties) {
    return firebase.database().ref(`/curriculums/${id}`).set(properties);
  },
  delete(id) {
    return firebase.database().ref(`/curriculums/${id}`).remove();
  }
};

export default curriculums;
