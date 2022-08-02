import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
@Module({
  name: 'mainStore',
  namespaced: true,
})


export default class MainStore extends VuexModule {
  private darkMode = false;
  @Mutation
  public SWITCH_TO_DARK_MODE(): void {
    this.darkMode = !this.darkMode;
  }

  @Action({ commit: 'SWITCH_TO_DARK_MODE' })
  public switchToDarkMode(): boolean {
    return this.darkMode;
  }

  public get isDarkMode(): boolean {
    return this.darkMode;
  }
}
