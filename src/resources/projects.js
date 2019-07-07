import firebase from '@/utils/firebase';

const projects = {
  get() {
    return firebase.database().ref('/projects').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  },
  upsert(id, properties) {
    return firebase.database().ref(`/projects/${id}`).set(properties);
  },
  delete(id) {
    return firebase.database().ref(`/projects/${id}`).remove();
  }
};

export default projects;
