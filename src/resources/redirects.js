import _ from 'lodash';
import firebase from '@/utils/firebase';

const redirects = {
  get() {
    return firebase.database().ref('/redirects').once('value')
      .then(snapshot => _.map(snapshot.val() || {}, (url, key) => ({ key, url })));
  },
  upsert(id, properties) {
    return firebase.database().ref(`/redirects/${id}`).set(properties.url);
  },
  delete(id) {
    return firebase.database().ref(`/redirects/${id}`).remove();
  }
};

export default redirects;
