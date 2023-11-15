import SliderInterface from './slider-interface.js';

class PostersSlider extends SliderInterface {
  constructor(param) {
    super(param);
    this.elementsList = param.elementsList;
    this.sliderContainer = document.getElementById(param.sliderContainerId);
    this.gapSliderContainer = parseInt(
      getComputedStyle(this.sliderContainer).columnGap
    );
    super.update();
  }

  destroy() {
    super.destroy();
  }

  updateContent() {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      const offset =
        super.getOffsetSlide(i) *
        (this.elementsList[i].offsetWidth + this.gapSliderContainer);
      this.elementsList[i].style.transform = `translateX(${offset}px)`;
    }
  }
}

export default PostersSlider;
