
const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

// Action
function fetchActionMovies() {
  
  let actionMovies = fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=28&page=1`)
    .then(response => response.json())
    .then(data => data.results.slice(0, 10))
    .catch(error => console.error(error));
  return actionMovies.then(data => data);
}

// Comedy
function fetchComedyMovies(){
  return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=35&page=1`)
  .then(response => response.json())
  .then(data => data.results.slice(0, 10))
  .catch(error => console.error(error));
}
 
// Crime
function fetchCrimeMovies(){
  return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=80&page=1`)
  .then(response => response.json())
  .then(data =>data.results.slice(0, 10))
  .catch(error => console.error(error));
}

// Horror
function fetchHorrorMovies(){
  return fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=27&page=1`)
  .then(response => response.json())
  .then(data =>data.results.slice(0, 10))
  .catch(error => console.error(error));
}

const exports = { fetchActionMovies, fetchComedyMovies, fetchCrimeMovies, fetchHorrorMovies };

export default exports