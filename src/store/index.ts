import { createStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import MainStore from './mainStore';


const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {MainStore},
});

export default store;

export const keySettingsStore = (): MainStore =>
  getModule(MainStore, store);

