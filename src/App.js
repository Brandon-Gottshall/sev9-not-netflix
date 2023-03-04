import "./App.css";
import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import MovieSection from "./Components/MovieSection";
import SummaryModal from './Components/Modal';
import SearchBar from './Components/SearchBar';
import fetchCalls from "./Helpers/SectionList";

function App() {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  
  //when this is active the modal will be shown 
  const [cardModalData, setCardModalData] = useState();
  
  useEffect(() => {
    fetchCalls.fetchActionMovies().then((data) => setActionMovies(data));
    fetchCalls.fetchComedyMovies().then((data) => setComedyMovies(data));
    fetchCalls.fetchCrimeMovies().then((data) => setCrimeMovies(data));
    fetchCalls.fetchHorrorMovies().then((data) => setHorrorMovies(data));
  }, []);
  return (
    <div className="main-container">
      <div className="hero-image">
        <Hero setCardModalData={setCardModalData} />
        {cardModalData && <SummaryModal cardModalData={cardModalData} setCardModalData={setCardModalData}/>}
        <SearchBar/>
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
}

export default App;
