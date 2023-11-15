import { API_KEY } from './constants.js';
import { API_URL_TOP_PAGE } from './constants.js';
import getData from './get-data.js';
import createFilmsGalleryMarkup from './create-gallery-markup.js';

export default async function insertPageDataToGallery(pageNumber) {
  const galleryRef = document.querySelector('.films');
  try {
    const respData = await getData(API_URL_TOP_PAGE + pageNumber, API_KEY);
    galleryRef.innerHTML = '';
    const filmsMarkup = createFilmsGalleryMarkup(respData.items);
    galleryRef.insertAdjacentHTML('beforeend', filmsMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
