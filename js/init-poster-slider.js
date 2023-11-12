import PostersSliderInterface from './posters-slider-interface.js';

const refs = {
  postersSliderContainer: document.querySelector('.posters-slider'),
  slidesList: document.querySelector('.posters-slider').querySelectorAll('li'),
};

const sliderInterface = new PostersSliderInterface(
  0,
  calculateSlidesPerPage(),
  refs.slidesList,
  refs.postersSliderContainer
);

window.addEventListener('resize', () => {
  const slidesPerPage = calculateSlidesPerPage();
  sliderInterface.setSlidesPerPage(slidesPerPage);
});

function calculateSlidesPerPage() {
  let res = 1;
  if (window.innerWidth >= 768) {
    res = 2;
  }
  if (window.innerWidth >= 1280) {
    res = 4;
  }
  return res;
}
