import * as types from './mutation_types';

export default {
  [types.LOGIN](state, user) {
    state.currentUser = {
      id: user.uid
    };
  },
  [types.LOGIN_AS_ADMIN](state, user) {
    state.currentUser = {
      id: user.uid,
      admin: true
    };
  },
  [types.LOGOUT](state) {
    state.currentUser = null;
  },
  [types.MODULE_LOADED](state, module) {
    state.loadedModules.push(module);
  }
};
