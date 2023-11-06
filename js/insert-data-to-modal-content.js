import { API_KEY } from './constants.js';
import { API_URL_SERCHBYID } from './constants.js';
import getData from './getData.js';
import createModalContentMarkup from './create-modal-content-markup.js';

export default async function insertDataToGallery(idItem) {
  const modalContentRef = document.querySelector('.modal-content');
  const apiUrlById = API_URL_SERCHBYID + idItem;

  console.log(' API_UR', apiUrlById);
  try {
    const respData = await getData(apiUrlById, API_KEY);
    console.log(respData);
    modalContentRef.innerHTML = '';
    const modalMarkup = createModalContentMarkup(respData);

    modalContentRef.insertAdjacentHTML('beforeend', modalMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
