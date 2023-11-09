// For my modal window
import { KEY_CODE_ESC } from './constants.js';
import Slider from './slider.js';
import ModalSliderInterface from './modal-slider-interface.js';
import insertDataToModalContent from './insert-data-to-modal-content.js';
import insertDataToModalVideoContent from './insert-data-to-modal-content-video.js';

const refs = {
  gallery: document.querySelector('.films'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  iconCloseBtn: document.querySelector('.close-button'),
  modalContent: document.querySelector('.modal-content'),
  modalExitBtn: document.getElementById('modal-exit-button'),
  modalSaveBtn: document.getElementById('modal-save-button'),
  modalPlayBtn: document.getElementById('modal-play-button'),
  modalPauseBtn: document.getElementById('modal-pause-button'),
  modalVideo: document.querySelector('.modal-video'),
};

refs.gallery.addEventListener('click', onImageClick);
refs.iconCloseBtn.addEventListener('click', onCloseModalWindow);
refs.modalExitBtn.addEventListener('click', onCloseModalWindow);
refs.modalBackdrop.addEventListener('click', onBackdropClick);
refs.modalSaveBtn.addEventListener('click', onSaveBtnClick);
refs.modalPlayBtn.addEventListener('click', onPlayBtnClick);
refs.modalPauseBtn.addEventListener('click', onPauseBtnClick);

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

  const filmId = closestLi.dataset.filmid;
  const filmList = event.currentTarget.children;
  const indexList = Array.from(filmList).indexOf(closestLi);

  const sliderRef = new Slider(indexList, 1, filmList.length);
  const sliderInterface = new ModalSliderInterface(
    sliderRef,
    filmList,
    insertDataToModalContent, // Poster OK!
    //insertDataToModalVideoContent, // Trailer TODO
    refs.modalContent
  );

  openModalWindow(filmId);
}

function openModalWindow(filmId) {
  // insertDataToModalContent(filmId); // Poster without slider
  // insertDataToModalVideoContent(filmId); // Trailer without slider
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

function onSaveBtnClick(event) {}

function onPlayBtnClick(event) {}

function onPauseBtnClick(event) {}
