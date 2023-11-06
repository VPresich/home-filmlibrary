// For my modal window
import { KEY_CODE_ESC } from "./constants.js";
import Slider from "./slider.js";
import SliderInterface from "./slider-interface.js";

const refs = {
  gallery: document.querySelector(".films"),
  modalBackdrop: document.querySelector(".modal-backdrop"),
  buttonClose: document.querySelector(".close-button"),
  modalContent: document.querySelector(".modal-content"),  
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),  
  sliderDots: document.querySelector('.slider-dots'),
};

refs.gallery.addEventListener("click", onImageClick);
refs.buttonClose.addEventListener("click", onCloseModalWindow);
refs.modalBackdrop.addEventListener("click", onBackdropClick);

function onImageClick(event) {  
  const targetRef = event.target;
  const isImageRef = targetRef.classList.contains("film-cover") || targetRef.classList.contains("film-cover-darkened") ;
 
  if (!isImageRef) {
    return;
  }
  event.preventDefault(); 

  const closestLi = targetRef.closest(".film"); 
  const filmList = event.currentTarget.children;
  const indexList = Array.from(filmList).indexOf(closestLi);
  
  const sliderRef = new Slider(indexList, 1, filmList.length);
  const sliderInterface = new SliderInterface(sliderRef, filmList,
  refs.prevBtn, refs.nextBtn, refs.modalContent, refs.sliderDots
  );  

  openModalWindow(indexList);
}

function openModalWindow(indexList) { 
  
  refs.modalBackdrop.classList.add("is-open");
  window.addEventListener("keydown", onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener("keydown", onWindowKeydown);
  refs.modalBackdrop.classList.remove("is-open");
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
