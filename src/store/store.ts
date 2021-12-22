import { Module, VuexModule  } from 'vuex-module-decorators';
@Module({
  name: 'store',
  namespaced: true,
})


export default class LayoutDetailStore extends VuexModule {}
