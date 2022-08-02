import { Module, VuexModule } from 'vuex-module-decorators';
@Module({
  name: 'mainStore',
  namespaced: true,
})


export default class mainStore extends VuexModule {}
