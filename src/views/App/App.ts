import { Vue, Options } from 'vue-class-component';
import {Header} from '@/components/Header/Header';
// Models
@Options({
  name: 'App',
  template: require('./App.html'),
  components: {Header

  },
})
export class App extends Vue {}
