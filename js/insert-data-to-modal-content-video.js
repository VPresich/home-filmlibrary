import { API_KEY } from './constants.js';
import { API_URL_SERCHBYID } from './constants.js';
import { API_URL_VIDEO } from './constants.js';
import getData from './getData.js';
import createModalContentMarkup from './create-modal-content-markup.js';
import createModalContentVideoMarkup from './create-modal-content-video-markup.js';

export default async function insertDataToGallery(idItem) {
  const modalContentRef = document.querySelector('.modal-content');
  const apiUrlById = API_URL_SERCHBYID + idItem;
  const apiUrlByIdVideo = API_URL_VIDEO + idItem + '/videos';

  try {
    const respData = await getData(apiUrlById, API_KEY);
    const respDataVideo = await getData(apiUrlByIdVideo, API_KEY);

    console.log('get video result:', respDataVideo.items[0]);

    modalContentRef.innerHTML = '';
    const modalMarkup = createModalContentVideoMarkup(
      respData,
      respDataVideo.items[0]
    );
    console.log(modalMarkup); // До этого момента все ОК
    modalContentRef.insertAdjacentHTML('beforeend', modalMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
