import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header"
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
  const [modalData, setModalData] = useState(false);
  
  useEffect(() => {
    fetchCalls.fetchActionMovies().then((data) => setActionMovies(data));
    fetchCalls.fetchComedyMovies().then((data) => setComedyMovies(data));
    fetchCalls.fetchCrimeMovies().then((data) => setCrimeMovies(data));
    fetchCalls.fetchHorrorMovies().then((data) => setHorrorMovies(data));
  }, []);


  return (
    <div className="main-container">
      <Header />
      <div className="hero-image">
        <Hero setCardModalData={setModalData} />
        {modalData && <SummaryModal cardModalData={modalData} setCardModalData={setModalData} />}
        <SearchBar/>
      </div>

      <div className="movie-sections">
        <h1>Horror</h1>
        <MovieSection setModalData={setModalData} movies={horrorMovies} genre={"Horror"} />
        <h1>Action</h1>
        <MovieSection setModalData={setModalData} movies={actionMovies} genre={"Action"} />
        <h1>Comedy</h1>
        <MovieSection setModalData={setModalData} movies={comedyMovies} genre={"Comedy"} />
        <h1>Crime</h1>
        <MovieSection setModalData={setModalData} movies={crimeMovies} genre={"Crime"} />
      </div>
    </div>
  );
}

export default App;
