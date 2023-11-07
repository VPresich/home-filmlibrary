// Структура данних з бекенду

// const film = {
//   "kinopoiskId": 301,
//   "kinopoiskHDId": "4824a95e60a7db7e86f14137516ba590",
//   "imdbId": "tt0133093",
//   "nameRu": "Матрица",
//   "nameEn": "The Matrix",
//   "nameOriginal": "The Matrix",
//   "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg",
//   "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg",
//   "coverUrl": "https://avatars.mds.yandex.net/get-ott/1672343/2a0000016cc7177239d4025185c488b1bf43/orig",
//   "logoUrl": "https://avatars.mds.yandex.net/get-ott/1648503/2a00000170a5418408119bc802b53a03007b/orig",
//   "reviewsCount": 293,
//   "ratingGoodReview": 88.9,
//   "ratingGoodReviewVoteCount": 257,
//   "ratingKinopoisk": 8.5,
//   "ratingKinopoiskVoteCount": 524108,
//   "ratingImdb": 8.7,
//   "ratingImdbVoteCount": 1729087,
//   "ratingFilmCritics": 7.8,
//   "ratingFilmCriticsVoteCount": 155,
//   "ratingAwait": 7.8,
//   "ratingAwaitCount": 2,
//   "ratingRfCritics": 7.8,
//   "ratingRfCriticsVoteCount": 31,
//   "webUrl": "https://www.kinopoisk.ru/film/301/",
//   "year": 1999,
//   "filmLength": 136,
//   "slogan": "Добро пожаловать в реальный мир",
//   "description": "Жизнь Томаса Андерсона разделена на две части:",
//   "shortDescription": "Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным",
//   "editorAnnotation": "Фильм доступен только на языке оригинала с русскими субтитрами",
//   "isTicketsAvailable": false,
//   "productionStatus": "POST_PRODUCTION",
//   "type": "FILM",
//   "ratingMpaa": "r",
//   "ratingAgeLimits": "age16",
//   "hasImax": false,
//   "has3D": false,
//   "lastSync": "2021-07-29T20:07:49.109817",
//   "countries": [
//     {
//       "country": "США"
//     }
//   ],
//   "genres": [
//     {
//       "genre": "фантастика"
//     }
//   ],
//   "startYear": 1996,
//   "endYear": 1996,
//   "serial": false,
//   "shortFilm": false,
//   "completed": false
// };

const video = {
  url: 'https://widgets.kinopoisk.ru/discovery/trailer/12799?onlyPlayer=1&autoplay=1&cover=1',
  name: 'Трейлер (русский язык)',
  site: 'KINOPOISK_WIDGET',
};

export default function createModalContentVideoMarkup(film, video) {
  const { nameOriginal, description, genres, countries, year } = film;

  return `<iframe
        class="modal-video"
        src="${video.url}"
        width="900"
        height="500">
      </iframe>
      <div class="modal-info">
        <p class="modal-title">${nameOriginal}</p>
        <p class="modal-description">${description}</p>
        <p class="modal-genres">Genres: ${genres
          .map(({ genre }) => genre)
          .join(', ')}
        </p>
        <p class="modal-country">Countries: ${countries
          .map(({ country }) => country)
          .join(', ')}
        </p>
        <p class="modal-date">Year: ${year}</p>
      </div>`;
}
