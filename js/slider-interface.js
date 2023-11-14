import Slider from './slider.js';

class SliderInterface {
  static touchThreshold = 75;
  #touchStartX;
  #sliderRef;
  #prevBtn;
  #nextBtn;
  #sliderDots;
  #sliderContainer;
  #dotDefaultClass;
  #dotActiveClass;
  #isDotContainText;

  constructor({
    indexElement,
    elementsListLength,
    slidesPerPage,
    prevBtnId,
    nextBtnId,
    dotsContainerId = '',
    sliderContainerId = '',
    dotDefaultClass = '',
    dotActiveClass = '',
    isDotContainText = false,
  }) {
    this.#sliderRef = new Slider(
      indexElement,
      slidesPerPage,
      elementsListLength
    );

    if (prevBtnId) this.#prevBtn = document.getElementById(prevBtnId);
    if (nextBtnId) this.#nextBtn = document.getElementById(nextBtnId);

    if (dotsContainerId) {
      this.#dotActiveClass = dotActiveClass;
      this.#dotDefaultClass = dotDefaultClass;
      this.#isDotContainText = isDotContainText;
      this.#sliderDots = document.getElementById(dotsContainerId);
    }

    if (sliderContainerId) {
      this.#sliderContainer = document.getElementById(sliderContainerId);
    }

    this.#prevBtn && this.#nextBtn && this.initBtnsFunction();
    this.#sliderContainer && this.initTouchFunction();
    this.#sliderDots && this.createDots();
  }

  initBtnsFunction() {
    this.#prevBtn.addEventListener('click', () => {
      this.#sliderRef.onPrevSlide();
      this.update();
    });

    this.#nextBtn.addEventListener('click', () => {
      this.#sliderRef.onNextSlide();
      this.update();
    });
  }

  initTouchFunction() {
    this.#sliderContainer.addEventListener('touchstart', event => {
      this.#touchStartX = event.touches[0].clientX;
    });

    this.#sliderContainer.addEventListener('touchmove', event => {
      const currentX = event.touches[0].clientX;
      const deltaX = this.#touchStartX - currentX;

      if (deltaX > SliderInterface.touchThreshold) {
        this.#sliderRef.onNextSlide();
        this.#touchStartX = currentX;
        this.update();
      } else if (deltaX < -SliderInterface.touchThreshold) {
        this.#sliderRef.onPrevSlide();
        this.#touchStartX = currentX;
        this.update();
      }
    });
  }

  createDots() {
    this.#sliderDots.innerHTML = '';
    for (let ind = 0; ind < this.#sliderRef.slidesNumber; ind++) {
      const dot = document.createElement('div');
      dot.className = this.#dotDefaultClass;
      if (this.#isDotContainText) dot.textContent = `${ind + 1}`;
      dot.dataset.index = ind;
      this.#sliderDots.appendChild(dot);
    }

    this.#sliderDots.addEventListener('click', event => {
      const dot = event.target;
      if (dot.classList.contains(this.#dotDefaultClass)) {
        const index = parseInt(dot.dataset.index, 10);
        this.#sliderRef.goToSlide(index);
        this.update();
      }
    });
  }

  setSlidesPerPage(newSlidesPerPage) {
    this.#sliderRef.slidesPerPage = newSlidesPerPage;
    this.#sliderRef.setSlidesProperty();
    this.update();
  }

  getOffsetSlide(ind) {
    return this.#sliderRef.getOffsetSlide(ind);
  }

  getCurrentSlide() {
    return this.#sliderRef.currentSlide;
  }

  update() {
    this.updateContent();
    this.#prevBtn && this.#nextBtn && this.updateButtons();
    this.#sliderDots && this.updateDots();
  }

  updateContent() {
    console.log('Must be drfined in children');
  }

  updateButtons() {
    this.#prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.#nextBtn.disabled = this.#sliderRef.isExistNext();
  }

  updateDots() {
    const children = this.#sliderDots.children;
    for (let i = 0; i < children.length; i += 1) {
      if (i === this.#sliderRef.currentSlide) {
        children[i].classList.add(this.#dotActiveClass);
      } else {
        children[i].classList.remove(this.#dotActiveClass);
      }
    }
  }
}

export default SliderInterface;
