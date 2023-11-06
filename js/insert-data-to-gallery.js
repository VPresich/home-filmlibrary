import { API_KEY } from './constants.js';
import { API_URL_TOP } from './constants.js';
import getData from './getData.js';
import createFilmsGalleryMarkup from './create-gallery-markup.js';
import PaginationInterface from './pagination-interface.js';

export default async function insertDataToGallery() {
  const galleryRef = document.querySelector('.films');
  try {
    const respData = await getData(API_URL_TOP, API_KEY);   
    const sliderInterface = new PaginationInterface(
      respData.items,
      createFilmsGalleryMarkup,
      galleryRef,
      respData.totalPages
    );
    // galleryRef.innerHTML = '';
    // const filmsMarkup = createFilmsGalleryMarkup(respData.items);

    // galleryRef.insertAdjacentHTML('beforeend', filmsMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
