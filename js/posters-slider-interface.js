import Slider from './slider.js';

class PostersSliderInterface {
  static touchThreshold = 75;
  #sliderRef;
  constructor(indexElement, slidesPerPage, elementsList, sliderContainer) {
    this.touchStartX = 0;
    this.#sliderRef = new Slider(
      indexElement,
      slidesPerPage,
      elementsList.length
    );
    this.elementsList = elementsList;
    this.slidesPerPage = slidesPerPage;
    this.prevBtn = document.getElementById('prev-poster-button');
    this.nextBtn = document.getElementById('next-poster-button');
    this.sliderContainer = sliderContainer;
    this.sliderDots = document.querySelector('.poster-slider-dots');
    this.gapSliderContainer = parseInt(
      getComputedStyle(sliderContainer).columnGap
    );

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

  setSlidesPerPage(newSlidesPerPage) {
    this.#sliderRef.slidesPerPage = newSlidesPerPage;
    this.#sliderRef.setSlidesProperty();
    this.update();
  }

  initTouchFunction() {
    this.sliderContainer.addEventListener('touchstart', event => {
      this.touchStartX = event.touches[0].clientX;
    });

    this.sliderContainer.addEventListener('touchmove', event => {
      const currentX = event.touches[0].clientX;
      const deltaX = this.touchStartX - currentX;

      if (deltaX > PostersSliderInterface.touchThreshold) {
        this.#sliderRef.onNextSlide();
        this.touchStartX = currentX;
        this.update();
      } else if (deltaX < -PostersSliderInterface.touchThreshold) {
        this.#sliderRef.onPrevSlide();
        this.touchStartX = currentX;
        this.update();
      }
    });
  }

  createDots() {
    this.sliderDots.innerHTML = '';
    for (let ind = 0; ind < this.elementsList.length; ind += 1) {
      const dot = document.createElement('div');
      dot.className = 'poster-dot';
      dot.dataset.index = ind;
      this.sliderDots.appendChild(dot);
    }

    this.sliderDots.addEventListener('click', event => {
      const dot = event.target;
      if (dot.classList.contains('poster-dot')) {
        const index = parseInt(dot.dataset.index, 10);
        this.#sliderRef.goToSlide(index);
        this.update();
      }
    });
  }

  update() {
    this.updateOffsetList();
    this.updateButtons();
    this.updateDisplayDots();
  }

  updateOffsetList() {
    for (let i = 0; i < this.elementsList.length; i += 1) {
      const offset =
        this.#sliderRef.getOffsetSlide(i) *
        (this.elementsList[i].offsetWidth + this.gapSliderContainer);
      this.elementsList[i].style.transform = `translateX(${offset}px)`;
    }
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

export default PostersSliderInterface;
