import { InjectionKey } from "vue";
import { createStore, type Store } from "vuex";

interface State {
  username: string;
}

export const storeKey: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    username: "Tony",
  },
  mutations: {},
  actions: {},
  modules: {},
});
