import * as types from './mutation_types';

export default {
  login({ commit }, user) {
    commit(types.LOGIN, user);
  },
  loginAsAdmin({ commit }, user) {
    commit(types.LOGIN_AS_ADMIN, user);
  },
  logout({ commit }) {
    commit(types.LOGOUT);
  },
  moduleLoaded({ commit }, module) {
    commit(types.MODULE_LOADED, module);
  }
};
