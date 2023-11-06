// For my modal window
import { KEY_CODE_ESC } from './constants.js';
import Slider from './slider.js';
import ModalSliderInterface from './modal-slider-interface.js';
import createModalContentMarkup from './create-modal-content-markup.js';
import film from './data/filmById.js';
import insertDataToModalContent from './insert-data-to-modal-content.js';

const refs = {
  gallery: document.querySelector('.films'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  buttonClose: document.querySelector('.close-button'),
  modalContent: document.querySelector('.modal-content'),
};

refs.gallery.addEventListener('click', onImageClick);
refs.buttonClose.addEventListener('click', onCloseModalWindow);
refs.modalBackdrop.addEventListener('click', onBackdropClick);

function onImageClick(event) {
  const targetRef = event.target;
  const isImageRef =
    targetRef.classList.contains('film-cover') ||
    targetRef.classList.contains('film-cover-darkened');

  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const closestLi = targetRef.closest('.film');

  const filmKinopoiskId = closestLi.dataset.filmid;

  console.log('filmKinopoiskId:', filmKinopoiskId);
  const filmList = event.currentTarget.children;
  const indexList = Array.from(filmList).indexOf(closestLi);

  const sliderRef = new Slider(indexList, 1, filmList.length);
  const sliderInterface = new ModalSliderInterface(
    sliderRef,
    filmList,
    insertDataToModalContent,
    refs.modalContent
  );

  openModalWindow(filmKinopoiskId, createModalContentMarkup);
}

function openModalWindow(filmId, createFilmMarkup) {
  // insertDataToModalContent(filmId);
  refs.modalBackdrop.classList.add('is-open');
  document.body.classList.add('stop-scrolling');
  window.addEventListener('keydown', onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener('keydown', onWindowKeydown);
  document.body.classList.remove('stop-scrolling');
  refs.modalBackdrop.classList.remove('is-open');
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseModalWindow(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow(event);
  }
}
