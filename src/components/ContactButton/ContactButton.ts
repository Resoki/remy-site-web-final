// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

/** Components */

/** Models */

@Options({
  name: 'ContactButton',
  template: require('./ContactButton.html'),
  components: {},
})
export class ContactButton extends Vue {
  protected isOpenContactForm = false;
  protected openContactForm(): void {
    console.log('c');
    this.isOpenContactForm = !this.isOpenContactForm;
  }
}
