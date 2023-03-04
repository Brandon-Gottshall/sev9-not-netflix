import React, { useState, useEffect } from "react";
import MovieTvSection from "./MovieTvSection";
import fetchCalls from "../Helpers/SectionList";

function MovieContainer({ setModalData }) {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);

  useEffect(() => {
    fetchCalls.fetchActionMovies().then((data) => setActionMovies(data));
    fetchCalls.fetchComedyMovies().then((data) => setComedyMovies(data));
    fetchCalls.fetchCrimeMovies().then((data) => setCrimeMovies(data));
    fetchCalls.fetchHorrorMovies().then((data) => setHorrorMovies(data));
  }, []);

  return (
    <div className="movie-sections">
      <h1>Horror</h1>
      <MovieTvSection
        setModalData={setModalData}
        movies={horrorMovies}
        genre={"Horror"}
      />
      <h1>Action</h1>
      <MovieTvSection
        setModalData={setModalData}
        movies={actionMovies}
        genre={"Action"}
      />
      <h1>Comedy</h1>
      <MovieTvSection
        setModalData={setModalData}
        movies={comedyMovies}
        genre={"Comedy"}
      />
      <h1>Crime</h1>
      <MovieTvSection
        setModalData={setModalData}
        movies={crimeMovies}
        genre={"Crime"}
      />
    </div>
  );
}

export default MovieContainer;
