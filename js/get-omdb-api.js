export default function getOmdbApi(imdbId, apiKey) {
  return `http://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
  //   http://www.omdbapi.com/?i=tt3896198&apikey=e0758985
}
