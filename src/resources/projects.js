import firebase from '@/utils/firebase';

const projects = {
  get() {
    return firebase.database().ref('/projects').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  },
  upsert(id, properties) {
    if (properties.date && properties.date instanceof Date) {
      properties.date = properties.date.toDateString();
    }

    return firebase.database().ref(`/projects/${id}`).set(properties);
  },
  delete(id) {
    return firebase.database().ref(`/projects/${id}`).remove();
  }
};

export default projects;
