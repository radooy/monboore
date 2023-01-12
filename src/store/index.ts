import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
  },
  getters: {},
  mutations: {
    setTheme(state, payload) {
      state.theme = payload;
    },
  },
  actions: {
    updateTheme(ctx, payload) {
      ctx.commit("setTheme", payload);
    },
  },
  modules: {},
});
