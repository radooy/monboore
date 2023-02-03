import { ActionContext, createStore } from "vuex";

import {
  IState,
  IThemePayload,
  ILoginPayload,
} from "@/helpers/types/store.types";
import { Mutations, ThemeVariants } from "@/helpers/enums/store/store.enum";

export default createStore<IState>({
  state: {
    theme: ThemeVariants.light,
    loggedIn: false,
    email: "",
    isAdmin: false,
    uid: "",
  },
  getters: {},
  mutations: {
    setTheme(state: IState, payload: IThemePayload): void {
      state.theme = payload;
    },
    setLogIn(state: IState, payload: ILoginPayload): void {
      state.loggedIn = true;
      state.email = payload.email;
      state.isAdmin = payload.isAdmin;
      state.uid = payload.uid;
    },
    logOut(state: IState): void {
      state.loggedIn = false;
      state.email = "";
      state.isAdmin = false;
      state.uid = "";
    },
  },
  actions: {
    updateTheme(ctx: ActionContext<IState, IState>, payload: IThemePayload) {
      ctx.commit(Mutations.setTheme, payload);
    },
    logIn(ctx: ActionContext<IState, IState>, payload: ILoginPayload) {
      ctx.commit(Mutations.setLogIn, payload);
    },
    logOut(ctx: ActionContext<IState, IState>) {
      ctx.commit(Mutations.logOut);
    },
  },
  modules: {},
});
