// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

/** Components */

/** Models */



@Options({
  name: 'ProjetButton',
  template: require('./ProjetButton.html'),
  components: {},
})
export class ProjetButton extends Vue {
  protected isOpenProjet = false;
  protected openProjet(): void {
    console.log('c');
    this.isOpenProjet = !this.isOpenProjet;
  }
}
