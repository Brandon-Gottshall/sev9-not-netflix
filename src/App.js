import "./App.css";
import HeroImage from "./Components/hero";
import MovieSection from "./components/MovieSection";
import React, { useState, useEffect } from "react";
import fetchCalls from "./Helpers/SectionList";

function App() {
  const [actionMovies, setActionMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [crimeMovies, setCrimeMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  
  
  useEffect(() => {
    setActionMovies(fetchCalls.fetchActionMovies());
    setComedyMovies(fetchCalls.fetchComedyMovies());
    setCrimeMovies(fetchCalls.fetchCrimeMovies());
    setHorrorMovies(fetchCalls.fetchHorrorMovies());
  }, []);
  return (
    <div className="main-container">
      <div className="hero-image">
        <HeroImage />
        <div className="movie-sections">
          <h1>Horror</h1>
          <MovieSection movies={horrorMovies} genre={"Horror"} />
          <h1>Action</h1>
          <MovieSection movies={actionMovies} genre={"Action"} />
          <h1>Crime</h1>
          <MovieSection movies={crimeMovies} genre={"Crime"} />
          <h1>Comedy</h1>
          <MovieSection movies={comedyMovies} genre={"Comedy"} />
        </div>
      </div>
    </div>
  );
}

export default App;
