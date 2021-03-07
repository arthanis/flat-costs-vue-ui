import { createStore } from 'vuex';

export default createStore({
  state: {
    config: {},
    categories: [],
  },
  getters: {
    config: (state) => state.config,
    categories: (state) => state.categories,
  },
  mutations: {
    setConfig(state, config) {
      state.columns = config;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
});
