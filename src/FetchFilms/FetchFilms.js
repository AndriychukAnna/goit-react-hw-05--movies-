const API_KEY = "29be72e1593e059d8c4358ef426fadf9";

function fetchTrendingFilms() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then((res) => res.json());
}

function fetchFilmById(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}

function fetchFilmCast(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}

function fetchFilmReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}

function fetchSearchFilms(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then((response) => response.json());
}

export {
  fetchTrendingFilms,
  fetchFilmById,
  fetchFilmCast,
  fetchFilmReviews,
  fetchSearchFilms,
};
