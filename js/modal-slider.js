import SliderInterface from './slider-interface.js';

class ModalSlider extends SliderInterface {
  constructor(params) {
    super(params);
    this.elementsList = params.elementsList;
    this.fnUpdateMarkUp = params.fnUpdateMarkUp;
    super.update();
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();   
    const itemId = this.elementsList[slideNumber].dataset.filmid;
    this.fnUpdateMarkUp(itemId);
  }
}

export default ModalSlider;
