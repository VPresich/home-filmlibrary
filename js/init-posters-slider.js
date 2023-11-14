import PostersSlider from './posters-slider.js';

const refs = {
  postersSliderContainer: document.querySelector('.posters-slider'),
  slidesList: document.querySelector('.posters-slider').querySelectorAll('li'),
};

const dataForPostersSlider = {
  indexElement: 0,
  elementsListLength: refs.slidesList.length,
  slidesPerPage: calculateSlidesPerPage(),
  prevBtnId: 'prev-poster-button',
  nextBtnId: 'next-poster-button',
  dotsContainerId: 'posterSliderDots',
  sliderContainerId: 'postersSlider',
  dotDefaultClass: 'poster-dot',
  dotActiveClass: 'active-dot',
  isDotContainText: false,
  elementsList: refs.slidesList,
};

const sliderInterface = new PostersSlider(dataForPostersSlider);

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
