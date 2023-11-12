import Slider from './slider.js';
import insertPageDataToGallery from './insert-page-data-to-gallery.js';
class PaginationInterface {
  #sliderRef;
  #elementsPerPage = 8;
  #isNewRequestForPage = 0;

  constructor(data, fnUpdateMarkUp, pageContent, pagesNum = 1) {
    this.prevBtn = document.getElementById('prevPageBtn');
    this.nextBtn = document.getElementById('nextPageBtn');
    this.paginationDots = document.querySelector('.pagination-dots');
    this.data = data;
    this.fnUpdateMarkUp = fnUpdateMarkUp;
    this.pageContent = pageContent;

    if (pagesNum) {
      // By pages from server
      this.#isNewRequestForPage = 1;
      this.pagesNum = pagesNum;
      this.#elementsPerPage = data.length;
    } else {
      // By pages from data
      this.pagesNum = Math.ceil(this.data.length / this.#elementsPerPage);
    }

    this.#sliderRef = new Slider(0, 1, this.pagesNum);

    this.initBtnsFunction();
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

  createDots() {
    this.paginationDots.innerHTML = '';
    for (let ind = 0; ind < this.pagesNum; ind++) {
      const dot = document.createElement('div');
      dot.className = 'pagination-dot';
      dot.textContent = `${ind + 1}`;
      dot.dataset.index = ind;
      this.paginationDots.appendChild(dot);
    }

    this.paginationDots.addEventListener('click', event => {
      const dot = event.target;
      if (dot.classList.contains('pagination-dot')) {
        const index = parseInt(dot.dataset.index, 10);
        this.#sliderRef.goToSlide(index);
        this.update();
      }
    });
  }

  update() {
    this.updateContent();
    this.updateButtons();
    this.updateDisplayDots();
  }

  updateContent() {
    if (this.#isNewRequestForPage) {
      insertPageDataToGallery(this.#sliderRef.currentSlide + 1);
    } else {
      const startElement = this.#sliderRef.currentSlide * this.#elementsPerPage;
      const elements = this.data.slice(
        startElement,
        startElement + this.#elementsPerPage
      );

      this.pageContent.innerHTML = '';
      const elementsMarkup = this.fnUpdateMarkUp(elements);
      this.pageContent.insertAdjacentHTML('beforeend', elementsMarkup);
    }
  }

  updateButtons() {
    this.prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.nextBtn.disabled = this.#sliderRef.isExistNext();
  }

  updateDisplayDots() {
    const children = this.paginationDots.children;
    for (let i = 0; i < children.length; i += 1) {
      if (i === this.#sliderRef.currentSlide) {
        children[i].classList.add('active-pagination-dot');
      } else {
        children[i].classList.remove('active-pagination-dot');
      }
    }
  }
}

export default PaginationInterface;
