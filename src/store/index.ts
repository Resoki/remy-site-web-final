import { createStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import MainStore from './mainStore';


const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {mainStore: MainStore},
});

export default store;

export const mainStore = (): MainStore =>
  getModule(MainStore, store);

