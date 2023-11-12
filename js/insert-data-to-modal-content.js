import { API_KEY } from './constants.js';
import { API_URL_SERCHBYID } from './constants.js';
import getData from './get-data.js';
import createModalContentMarkup from './create-modal-content-markup.js';

export default async function insertDataToGallery(idItem) {
  const modalContentRef = document.querySelector('.modal-content');
  const apiUrlById = API_URL_SERCHBYID + idItem;

  try {
    const respData = await getData(apiUrlById, API_KEY);
  
    modalContentRef.innerHTML = '';
    const modalMarkup = createModalContentMarkup(respData);

    modalContentRef.insertAdjacentHTML('beforeend', modalMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
