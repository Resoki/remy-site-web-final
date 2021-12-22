import { Vue, Options } from 'vue-class-component';
import Home from '@/views/Home/Home';
// Models
@Options({
  name: 'App',
  template: require('./App.html'),
  components: {Home

  },
})
export class App extends Vue {}
