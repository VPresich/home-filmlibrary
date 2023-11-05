// const API_KEY = 'a54dca9b-8df4-499d-af64-4695dca99d8b';
// const API_URL =
//   'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1';

import { API_KEY } from './constatnts.js';
import { API_URL } from './constatnts.js';
import getData from './getData.js';
import createFilmsGalleryMarkup from './create-gallery-markup.js';

const galleryRef = document.querySelector('.films');

(async () => {
  try {
    const respData = await getData(API_URL, API_KEY);
    const filmsMarkup = createFilmsGalleryMarkup(respData.items);

    galleryRef.insertAdjacentHTML('beforeend', filmsMarkup);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
  }
})();
