import './App.css';
import MovieSection from './components/MovieSection';
import React, { useState, useEffect } from 'react';
import SummaryModal from './Components/Modal';
import HeroImage from './Components/hero';


function App() {
  const [actionMovies, setActionMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [crimeMovies, setCrimeMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const apiUrl = "https://api.themoviedb.org/3";
    fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=28&page=1`)
      .then(response => response.json())
      .then(data => setActionMovies(data.results.slice(0, 10)))
      .catch(error => console.error(error));
    fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=35&page=1`)
      .then(response => response.json())
      .then(data => setComedyMovies(data.results.slice(0, 10)))
      .catch(error => console.error(error));
    fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=80&page=1`)
      .then(response => response.json())
      .then(data => setCrimeMovies(data.results.slice(0, 10)))
      .catch(error => console.error(error));
    fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=27&page=1`)
      .then(response => response.json())
      .then(data => {
        let arr = data.results.slice(0, 10)
        setHorrorMovies(arr)
      })
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="main-container">
      <div className="hero-image">
        <HeroImage />
      </div>

      <div className="movie-sections">
        <h1>Horror</h1>
        <MovieSection movies={horrorMovies} genre={"Horror"} />
        <h1>Action</h1>
        <MovieSection movies={actionMovies} genre={"Action"} />
        <h1>Comedy</h1>
        <MovieSection movies={comedyMovies} genre={"Comedy"} />
        <h1>Crime</h1>
        <MovieSection movies={crimeMovies} genre={"Crime"} />
      </div>
    </div>
  );
  );
}

export default App;
