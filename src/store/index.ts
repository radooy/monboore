import { ActionContext, createStore } from "vuex";

interface IState {
  theme: string;
}

export default createStore<IState>({
  state: {
    theme: "light",
  },
  getters: {},
  mutations: {
    setTheme(state: IState, payload: string): void {
      state.theme = payload;
    },
  },
  actions: {
    updateTheme(ctx: ActionContext<IState, IState>, payload: string) {
      ctx.commit("setTheme", payload);
    },
  },
  modules: {},
});
