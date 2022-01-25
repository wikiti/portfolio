import { includes } from 'lodash';

export default {
  currentUser(state) {
    return state.currentUser;
  },
  currentUserIsAdmin(state) {
    return state.currentUser && state.currentUser.admin;
  },
  allModulesLoaded(state) {
    return includes(state.loadedModules, 'descriptions')
      && includes(state.loadedModules, 'social')
      && includes(state.loadedModules, 'projects')
      && includes(state.loadedModules, 'curriculums')
      && includes(state.loadedModules, 'experience');
  }
};
