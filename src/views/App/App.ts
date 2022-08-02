import { Vue, Options } from 'vue-class-component';
import { ContainerHome } from '@/components/ContainerHome/ContainerHome';
import { Network } from '@/components/Network/Network';
import Home from '../../views/Home/Home';

// Models
@Options({
  name: 'App',
  template: require('./App.html'),
  components: {ContainerHome,Network, Home

  },
})
export class App extends Vue {}
