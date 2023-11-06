// Структура даних, що прийшли з сервера
// {
//       "kinopoiskId": 435,
//       "imdbId": "tt0120689",
//       "nameRu": "Зеленая миля",
//       "nameEn": null,
//       "nameOriginal": "The Green Mile",
//       "countries": [
//         {
//           "country": "США"
//         }
//       ],
//       "genres": [
//         {
//           "genre": "драма"
//         },
//         {
//           "genre": "криминал"
//         },
//         {
//           "genre": "фэнтези"
//         }
//       ],
//       "ratingKinopoisk": 9.1,
//       "ratingImdb": 8.6,
//       "year": 1999,
//       "type": "FILM",
//       "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg",
//       "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg"
//     },

// DOM elements:
// <li class="film">
//   <div class="film-cover-inner">
//     <img
//       class="film-cover"
//       src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/f56710bd-85c3-49b8-9260-2fa8a3d07c01/600x900"
//       alt="Description image"
//       data-source="qqq"
//     />
//     <div class="film-cover-darkened"></div>
//   </div>
//   <div class="film-info">
//     <h3 class="film-title">Title</h3>
//     <p class="film-category">Category</p>
//     <p class="film-average film-average-green">30</p>
//   </div>
// </li>;

export default function createFilmsGalleryMarkup(films) {
    
  return films
    .map(
      ({
        nameOriginal,
        genres,
        year,
        ratingImdb,
        posterUrlPreview,
        posterUrl,
      }) => {
        return `<li class="film">
            <div class="film-cover-inner">
                <img
                  class="film-cover"
                  src="${posterUrlPreview}"
                  alt="photo of ${nameOriginal}"
                  data-source = "${posterUrl}"
                  width = "240"
                  height = "360"                  
                />
                <div class="film-cover-darkened"></div>
            </div>
            <div class="film-info">
                <h3 class="film-title">${nameOriginal}</h3>
                <p class="film-category">${genres
                  .map(({ genre }) => genre)
                  .join(', ')}</p>
                <p class="film-average film-average-${getColor(
                  ratingImdb
                )}">${ratingImdb}</p>
                <p class="film-year">${year}</p>
              </div>
            </li>`;
      }
    )
    .join('');
}
function getColor(rating) {
  let color = 'red';
  if (rating > 7) {
    color = 'green';
  } else {
    if (rating > 5) {
      color = 'orange';
    }
  }
  return color;
}
