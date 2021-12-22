import { Options, Vue } from 'vue-class-component';

/** Utils */


@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: {
  },
})
export default class Home extends Vue {
  public created(): void {
    console.log('home load');
  }
}
