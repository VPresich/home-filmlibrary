const films = [
  {
    kinopoiskId: 435,
    imdbId: 'tt0120689',
    nameRu: 'Зеленая миля',
    nameEn: null,
    nameOriginal: 'The Green Mile',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'драма',
      },
      {
        genre: 'криминал',
      },
      {
        genre: 'фэнтези',
      },
    ],
    ratingKinopoisk: 9.1,
    ratingImdb: 8.6,
    year: 1999,
    type: 'FILM',
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg',
  },
  {
    kinopoiskId: 326,
    imdbId: 'tt0111161',
    nameRu: 'Побег из Шоушенка',
    nameEn: null,
    nameOriginal: 'The Shawshank Redemption',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'драма',
      },
    ],
    ratingKinopoisk: 9.1,
    ratingImdb: 9.3,
    year: 1994,
    type: 'FILM',
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/326.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/326.jpg',
  },
  {
    kinopoiskId: 448,
    imdbId: 'tt0109830',
    nameRu: 'Форрест Гамп',
    nameEn: null,
    nameOriginal: 'Forrest Gump',
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'драма',
      },
      {
        genre: 'мелодрама',
      },
      {
        genre: 'комедия',
      },
      {
        genre: 'военный',
      },
      {
        genre: 'история',
      },
    ],
    ratingKinopoisk: 8.9,
    ratingImdb: 8.8,
    year: 1994,
    type: 'FILM',
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/448.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/448.jpg',
  },
  {
    kinopoiskId: 535341,
    imdbId: 'tt1675434',
    nameRu: '1+1',
    nameEn: null,
    nameOriginal: 'Intouchables',
    countries: [
      {
        country: 'Франция',
      },
    ],
    genres: [
      {
        genre: 'драма',
      },
      {
        genre: 'биография',
      },
      {
        genre: 'комедия',
      },
    ],
    ratingKinopoisk: 8.8,
    ratingImdb: 8.5,
    year: 2011,
    type: 'FILM',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/535341.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/535341.jpg',
  },
  {
    kinopoiskId: 329,
    imdbId: 'tt0108052',
    nameRu: 'Список Шиндлера',
    nameEn: null,
    nameOriginal: "Schindler's List",
    countries: [
      {
        country: 'США',
      },
    ],
    genres: [
      {
        genre: 'драма',
      },
      {
        genre: 'биография',
      },
      {
        genre: 'военный',
      },
      {
        genre: 'история',
      },
    ],
    ratingKinopoisk: 8.8,
    ratingImdb: 9,
    year: 1993,
    type: 'FILM',
    posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/329.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/329.jpg',
  },
  {
    kinopoiskId: 258687,
    imdbId: 'tt0816692',
    nameRu: 'Интерстеллар',
    nameEn: null,
    nameOriginal: 'Interstellar',
    countries: [
      {
        country: 'США',
      },
      {
        country: 'Великобритания',
      },
      {
        country: 'Канада',
      },
    ],
    genres: [
      {
        genre: 'драма',
      },
      {
        genre: 'фантастика',
      },
      {
        genre: 'приключения',
      },
    ],
    ratingKinopoisk: 8.6,
    ratingImdb: 8.7,
    year: 2014,
    type: 'FILM',
    posterUrl:
      'https://kinopoiskapiunofficial.tech/images/posters/kp/258687.jpg',
    posterUrlPreview:
      'https://kinopoiskapiunofficial.tech/images/posters/kp_small/258687.jpg',
  },
];

const filmIMDb = {
  Title: 'Guardians of the Galaxy Vol. 2',
  Year: '2017',
  Rated: 'PG-13',
  Released: '05 May 2017',
  Runtime: '136 min',
  Genre: 'Action, Adventure, Comedy',
  Director: 'James Gunn',
  Writer: 'James Gunn, Dan Abnett, Andy Lanning',
  Actors: 'Chris Pratt, Zoe Saldana, Dave Bautista',
  Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
  Language: 'English',
  Country: 'United States',
  Awards: 'Nominated for 1 Oscar. 15 wins & 60 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.6/10' },
    { Source: 'Rotten Tomatoes', Value: '85%' },
    { Source: 'Metacritic', Value: '67/100' },
  ],
  Metascore: '67',
  imdbRating: '7.6',
  imdbVotes: '738,822',
  imdbID: 'tt3896198',
  Type: 'movie',
  DVD: '10 Jul 2017',
  BoxOffice: '$389,813,101',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};
