class ModalSliderInterface {
  static touchThreshold = 75;
  #sliderRef;
  constructor(sliderRef, elementsList, fnUpdateMarkUp, sliderContent) {
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.sliderDots = document.querySelector('.slider-dots');
    this.#sliderRef = sliderRef;
    this.elementsList = elementsList;
    this.fnUpdateMarkUp = fnUpdateMarkUp;
    this.sliderContent = sliderContent;

    this.initBtnsFunction();
    this.initTouchFunction();
    this.createDots();
    this.update();
  }

  initBtnsFunction() {
    this.prevBtn.addEventListener('click', () => {
      this.#sliderRef.onPrevSlide();
      this.update();
    });

    this.nextBtn.addEventListener('click', () => {
      this.#sliderRef.onNextSlide();
      this.update();
    });
  }

  initTouchFunction() {
    let startX = 0;

    this.sliderContent.addEventListener('touchstart', event => {
      startX = event.touches[0].clientX;
    });

    this.sliderContent.addEventListener('touchmove', event => {
      const currentX = event.touches[0].clientX;
      const deltaX = startX - currentX;

      if (deltaX > this.touchThreshold) {
        this.#sliderRef.onNextSlide();
        startX = currentX;
        this.update();
      } else if (deltaX < -this.touchThreshold) {
        this.#sliderRef.onPrevSlide();
        startX = currentX;
        this.update();
      }
    });
  }

  createDots() {
    this.sliderDots.innerHTML = '';
    for (let ind = 0; ind < this.elementsList.length; ind += 1) {
      const dot = document.createElement('div');
      dot.className = 'slider-dot';
      dot.addEventListener('click', () => {
        this.#sliderRef.goToSlide(ind);
        this.update();
      });
      this.sliderDots.appendChild(dot);
    }
  }

  update() {
    this.updateContent();
    this.updateButtons();
    this.updateDisplayDots();
  }

  updateContent() {
    const slideNumber = this.#sliderRef.currentSlide;
    const itemId = this.elementsList[slideNumber].dataset.filmid;
    this.fnUpdateMarkUp(itemId);
  }

  updateButtons() {
    this.prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.nextBtn.disabled = this.#sliderRef.isExistNext();
  }

  updateDisplayDots() {
    const children = this.sliderDots.children;
    for (let i = 0; i < children.length; i += 1) {
      if (i === this.#sliderRef.currentSlide) {
        children[i].classList.add('active-dot');
      } else {
        children[i].classList.remove('active-dot');
      }
    }
  }
}

export default ModalSliderInterface;
