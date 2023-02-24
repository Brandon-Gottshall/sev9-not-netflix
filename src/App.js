import './App.css';
import HeroImage from './Components/hero';
import MovieSection from './components/MovieSection';
import React, { useState, useEffect } from 'react';




function App() {
  const [movies, setMovies] = useState();
  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=114d88d72a1471cf241d7a43bb60a917&language=en-US&page=1`)
      .then(res => res.json())
      .then (res => {
        setMovies(res.results)
      })
  },[])
  return (
    <div className="main-container">
      <div className='hero-image'>
        <HeroImage/>
        <MovieSection movies={movies}  />
      </div>
    </div>
  );
}

export default App