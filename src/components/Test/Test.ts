// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { Buttons } from '@/components/Buttons/Buttons';
import { ContactButton } from '../ContactButton/ContactButton';
import { ProjetButton } from '../ProjetButton/ProjetButton';
/** Components */

/** Models */



@Options({
  name: 'Test',
  template: require('./Test.html'),
  components: {Buttons, ContactButton, ProjetButton},
})
export class Test extends Vue {
}
