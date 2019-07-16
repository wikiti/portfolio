export default {
  currentUser(state) {
    return state.currentUser;
  },
  currentUserIsAdmin(state) {
    return state.currentUser && state.currentUser.admin;
  }
};
