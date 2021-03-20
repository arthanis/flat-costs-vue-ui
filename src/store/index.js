import { createStore } from 'vuex';

export default createStore({
  state: {
    config: {},
  },
  getters: {
    config: (state) => state.config,
  },
  mutations: {
    setConfig(state, config) {
      state.config = config;
    },
  },
});
