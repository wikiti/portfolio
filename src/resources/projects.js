import firebase from '@/firebase';

const projects = {
  get() {
    return firebase.database().ref('/projects').once('value')
      .then(snapshot => Object.values(snapshot.val() || {}));
  }
};

export default projects;
