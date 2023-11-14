import { API_KEY } from './constants.js';
import { API_URL_TOP } from './constants.js';
import getData from './get-data.js';
import createFilmsGalleryMarkup from './create-gallery-markup.js';
import GalleryPagination from './gallery-pagination.js';

export default async function insertDataToGallery() {
  const galleryRef = document.querySelector('.films');
  const isRequestForPage = true;
  const defaultElementsPerPage = 8;
  try {
    const respData = await getData(API_URL_TOP, API_KEY);

    const dataParam = {
      data: respData.items,
      fnCreateMarkup: createFilmsGalleryMarkup,

      totalPages: isRequestForPage
        ? respData.totalPages
        : Math.ceil(respData.items.length / defaultElementsPerPage),

      contentRef: galleryRef,
      elementsPerPage: isRequestForPage
        ? respData.items.length
        : defaultElementsPerPage,

      isNewRequestForPage: isRequestForPage,
    };
    const galleryPagination = new GalleryPagination(dataParam);

    // Without pagination for (page - 1)
    // galleryRef.innerHTML = '';
    // const filmsMarkup = createFilmsGalleryMarkup(respData.items);
    // galleryRef.insertAdjacentHTML('beforeend', filmsMarkup);
  } catch (error) {
    console.error('Error:', error);
  }
}
