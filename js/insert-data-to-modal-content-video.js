import { API_KEY } from './constants.js';
import { API_KEY_IMDB } from './constants.js';
import { API_URL_SERCHBYID } from './constants.js';
import { API_URL_VIDEO } from './constants.js';

import getData from './get-data.js';
import getImdbApi from './get-omdb-api.js';

import createModalContentMarkup from './create-modal-content-markup.js';
import createModalContentVideoMarkup from './create-modal-content-video-markup.js';

export default async function insertDataToGallery(idItem) {
  const modalContentRef = document.querySelector('.modal-content');
  const apiUrlById = API_URL_SERCHBYID + idItem;
  const apiUrlByIdVideo = API_URL_VIDEO + idItem + '/videos';

  try {
    const respData = await getData(apiUrlById, API_KEY);
    const respDataVideo = await getData(apiUrlByIdVideo, API_KEY);
    // const respDataImDb = await getData(
    //   getImdbApi('tt0133093', API_KEY_IMDB),
    //   API_KEY_IMDB
    // );

    // console.log('respDataImDb =', respDataImDb);

    modalContentRef.innerHTML = '';
    const modalMarkup = createModalContentVideoMarkup(
      respData,
      respDataVideo.items
    );

    modalContentRef.insertAdjacentHTML('beforeend', modalMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
