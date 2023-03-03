import React, { useState, useEffect } from 'react';
import { TVSection } from './Components/TVSection';

function App() {
  const [actionShows, setActionShows] = useState([]);
  const [comedyShows, setComedyShows] = useState([]);
  const [crimeShows, setCrimeShows] = useState([]);
  const [horrorShows, setHorrorShows] = useState([]);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const apiUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=28&page=1`)
      .then(response => response.json())
      .then(data => setActionShows(data.results.slice(0, 10)))
      .catch(error => console.error(error));
    fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=35&page=1`)
      .then(response => response.json())
      .then(data => setComedyShows(data.results.slice(0, 10)))
      .catch(error => console.error(error));
    fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=80&page=1`)
      .then(response => response.json())
      .then(data => setCrimeShows(data.results.slice(0, 10)))
      .catch(error => console.error(error));
    fetch(`${apiUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=27&page=1`)
      .then(response => response.json())
      .then(data => setHorrorShows(data.results.slice(0, 10)))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <div className="tv-sections">
        <div>
          <h1>Horror</h1>
        <TVSection shows={horrorShows} genre="Horror" />
        </div>
        <div>
          <h1>Action</h1>
        <TVSection shows={actionShows} genre="Action" />
        </div>
        <div>
          <h1>Crime</h1>
        <TVSection shows={crimeShows} genre="Crime" />
        </div>
        <div>
          <h1>Comedy</h1>
        <TVSection shows={comedyShows} genre="Comedy" />
        </div>
      </div>
    </div>
  );
}

export default App;