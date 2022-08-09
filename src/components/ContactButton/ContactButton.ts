// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
import { QuickDB } from 'quick.db';
const db = new QuickDB();

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
       void this.postData(this.dataForm.name, this.dataForm.email, this.dataForm.message);
    }
  }

  protected postData = async (name: string, email: string, message: string) =>{
     await db.push('ContactList', {
      userName: name,
      userEmail: email,
      userMessage: message,
     });
   //  await saveContact(name, email, message);
  };
}
