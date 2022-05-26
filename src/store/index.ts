import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      usrInfo: {
        nickname: "",
        token: "",
      },
    };
  },
  mutations: {
    // 同步userInfo
    updateUserInfo(state, payload) {
      this.state.userInfo = payload;
    },
  },
  actions: {
    // 同步userInfo act
    updateUserInfoAct(context, payload) {
      context.commit("updateUserInfo", payload);
    },
  },
});

export default store;
