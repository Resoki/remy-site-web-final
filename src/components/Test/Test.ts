// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { Buttons } from '@/components/Buttons/Buttons';
import { ContactButton } from '../ContactButton/ContactButton';
import { ProjetButton } from '../ProjetButton/ProjetButton';
import { DarkMode } from '../DarkMode/DarkMode';
import { mainStore } from '@/store';
/** Components */

/** Models */

@Options({
  name: 'Test',
  template: require('./Test.html'),
  components: { Buttons, ContactButton, ProjetButton, DarkMode },
})
export class Test extends Vue {
  protected darkMode(): void {
    mainStore().switchToDarkMode();
  }

  protected get isDarkMode(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return mainStore().isDarkMode;
  }
}
