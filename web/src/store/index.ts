import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, type Store } from "vuex";

interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {},
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
