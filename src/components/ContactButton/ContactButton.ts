// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { postContact } from '@/request/userRoutes';
/** Components */

/** Models */

@Options({
  name: 'ContactButton',
  template: require('./ContactButton.html'),
  components: {},
})
export class ContactButton extends Vue {
  protected isOpenContactForm = false;

  protected dataForm = {
    name: '',
    email: '',
    message: '',
    errors: [''],
  };

  protected openContactForm(): void {
    this.isOpenContactForm = !this.isOpenContactForm;
  }

  protected onSubmitForm(): void {
    this.dataForm.errors = [];
    if (!this.dataForm.email) {
      this.dataForm.errors.push('-Email requise');
    }
    if (!this.dataForm.name) {
      this.dataForm.errors.push('-Name requis');
    }
    if (!this.dataForm.message) {
      this.dataForm.errors.push('-Message requis');
    }
    if(this.dataForm.name && this.dataForm.email && this.dataForm.message) {
      // this.postData(this.dataForm.name, this.dataForm.email, this.dataForm.message);
    }
  }

  protected postData(name: string, email: string, message: string): void {
     postContact(name,email,message);
  }
}
