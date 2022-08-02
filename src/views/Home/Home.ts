import { Options, Vue } from 'vue-class-component';

import { ContainerHome } from '@/components/ContainerHome/ContainerHome';
import { Network } from '@/components/Network/Network';
import { Test } from '@/components/Test/Test';
import { Buttons } from '@/components/Buttons';
/** Utils */

@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: { ContainerHome, Network, Test, Buttons },
})
export default class Home extends Vue {}
