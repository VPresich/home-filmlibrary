import SliderInterface from './slider-interface.js';

class ModalWindowSlider extends SliderInterface {
  #elementsList;
  #fnUpdateMarkUp;
  #modalContentRef;
  constructor(params) {
    const { elementsList, fnUpdateMarkUp, modalContentRef } = params;
    super(params);
    this.#elementsList = elementsList;
    this.#fnUpdateMarkUp = fnUpdateMarkUp;
    this.#modalContentRef = modalContentRef;
    super.update();
  }

  destroy() {
    this.destroyContent();
    super.destroy();
  }

  destroyContent() {
    this.#modalContentRef.innerHTML = '';
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();
    const itemId = this.#elementsList[slideNumber].dataset.filmid;
    this.#fnUpdateMarkUp(itemId);
  }
}

export default ModalWindowSlider;
