import { API_KEY } from './constants.js';
import { API_URL_SEARCH } from './constants.js';
import getData from './getData.js';
import createFilmsGalleryMarkup from './create-gallery-markup.js';

const formRef = document.querySelector('.film-search-form');
const inputRef = document.querySelector('.film-search-input');
const galleryRef = document.querySelector('.films');
formRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  if (inputRef.value) {
    console.log('inputRef.value', inputRef.value);
    const apiSearchURL = `${API_URL_SEARCH}${inputRef.value}&page1`;
    console.log('submit', apiSearchURL);

    try {
      const respData = await getData(apiSearchURL, API_KEY);

      //await waitForDataToLoad(respData);

      const filmsMarkup = createFilmsGalleryMarkup(respData.items);
      galleryRef.innerHTML = '';
      galleryRef.insertAdjacentHTML('beforeend', filmsMarkup);
    } catch (error) {
      console.error('get data Error:', error);
    }
  }
}

async function waitForDataToLoad(data) {
  return new Promise(resolve => {
    if (data.items) {
      resolve();
    } else {
      setTimeout(() => waitForDataToLoad(data), 200);
    }
  });
}
