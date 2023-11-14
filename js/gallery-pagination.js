import SliderInterface from './slider-interface.js';
import insertPageDataToGallery from './insert-page-data-to-gallery.js';

class GalleryPagination extends SliderInterface {
  #elementsPerPage = 8;
  #isNewRequestForPage = 0;
  #data = [];
  #fnUpdateMarkUp;
  #ContentRef;
  constructor(dataParam) {
    const dataForSliderInterface = {
      indexElement: 0,
      slidesPerPage: 1,
      elementsListLength: dataParam.totalPages,
      prevBtnId: 'prevPageBtn',
      nextBtnId: 'nextPageBtn',
      dotsContainerId: 'paginationDots',
      dotDefaultClass: 'pagination-dot',
      dotActiveClass: 'active-pagination-dot',
      isDotContainText: true,
      sliderContainerId: '',
    };
    super(dataForSliderInterface);

    this.#data = dataParam.data;
    this.#fnUpdateMarkUp = dataParam.fnCreateMarkup;
    this.#ContentRef = dataParam.contentRef;
    this.#isNewRequestForPage = dataParam.isNewRequestForPage;
    this.#elementsPerPage = dataParam.elementsPerPage;

    super.update();
  }

  updateContent() {
    const slideNumber = super.getCurrentSlide();
    if (this.#isNewRequestForPage) {
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
