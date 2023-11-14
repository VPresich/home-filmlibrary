import SliderInterface from './slider-interface.js';
import insertPageDataToGallery from './insert-page-data-to-gallery.js';

class GalleryPagination extends SliderInterface {
  #elementsPerPage = 8;
  #isRequestNeed;
  #data;
  #fnUpdateMarkUp;
  #ContentRef;
  constructor({
    data,
    totalPages,
    elementsPerPage,
    contentRef,
    isRequestRequire,
    fnCreateMarkup,
  }) {
    const dataForSliderInterface = {
      indexElement: 0,
      slidesPerPage: 1,
      elementsListLength: totalPages,
      prevBtnId: 'prevPageBtn',
      nextBtnId: 'nextPageBtn',
      dotsContainerId: 'paginationDots',
      dotDefaultClass: 'pagination-dot',
      dotActiveClass: 'active-pagination-dot',
      isDotContainText: true,
      sliderContainerId: '',
    };
    super(dataForSliderInterface);

    this.#data = data;
    this.#fnUpdateMarkUp = fnCreateMarkup;
    this.#ContentRef = contentRef;
    this.#isRequestNeed = isRequestRequire;
    this.#elementsPerPage = elementsPerPage;

    super.update();
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();
    if (this.#isRequestNeed) {
      insertPageDataToGallery(slideNumber + 1);
    } else {
      const startElement = slideNumber * this.#elementsPerPage;
      const elements = this.#data.slice(
        startElement,
        startElement + this.#elementsPerPage
      );
      console.log();
      this.#ContentRef.innerHTML = '';
      const elementsMarkup = this.#fnUpdateMarkUp(elements);
      this.#ContentRef.insertAdjacentHTML('beforeend', elementsMarkup);
    }
  }
}

export default GalleryPagination;
