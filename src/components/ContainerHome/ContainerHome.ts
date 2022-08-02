// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

/** Components */

/** Models */

@Options({
  name: 'ContainerHome',
  template: require('./ContainerHome.html'),
  components: {},
})
export class ContainerHome extends Vue {
  protected currentSlide = 0;

  protected nextSlide(): void {
    if (this.currentSlide === 2) {
      this.currentSlide = 0;
      return;
    }
    this.currentSlide += 1;
  }

  protected previousSlide(): void {
    if (this.currentSlide === 0) {
      this.currentSlide = 2;
      return;
    }
    this.currentSlide -= 1;
  }
}
