// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { mainStore } from '../../store';

/** Components */

/** Models */

@Options({
  name: 'DarkMode',
  template: require('./DarkMode.html'),
  components: {},
})
export class DarkMode extends Vue {
  protected darkMode(): void {
    mainStore().switchToDarkMode();
    console.log(mainStore().isDarkMode);
  }

  protected get isDarkMode(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return mainStore().isDarkMode;
  }
}
