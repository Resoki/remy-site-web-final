// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

/** Components */

/** Models */



@Options({
  name: 'Header',
  template: require('./Header.html'),
  components: {},
})
export class IconButton extends Vue {
  protected didClickOnButton(): void {
    console.log('click');
  }
}
