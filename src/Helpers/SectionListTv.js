const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

// Action and Adventure 
function fetchActionTvShows() {
  fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=10759&page=1`)
    .then(response => response.json())
    .then(data => data.results.slice(0, 10))
    .catch(error => console.error(error));
}

// Comedy
function fetchComedyTvShows(){
  fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=35&page=1`)
  .then(response => response.json())
  .then(data =>data.results.slice(0, 10))
  .catch(error => console.error(error));
}
 
// Crime
function fetchCrimeTvShows(){
  fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=80&page=1`)
  .then(response => response.json())
  .then(data =>data.results.slice(0, 10))
  .catch(error => console.error(error));
}

// Sci-Fi and Fantasy
function fetchSciFiTvShows(){
  fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=10765&page=1`)
  .then(response => response.json())
  .then(data =>data.results.slice(0, 10))
  .catch(error => console.error(error));
}

export { fetchActionTvShows, fetchComedyTvShows, fetchCrimeTvShows, fetchSciFiTvShows }