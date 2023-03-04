import React, { useState, useEffect } from "react";
import MovieTvSection from "./MovieTvSection";
import fetchCalls from "../Helpers/SectionListTv";

function TvSectionContainer({ setModalData }) {
  const [actionShows, setActionShows] = useState([]);
  const [comedyShows, setComedyShows] = useState([]);
  const [crimeShows, setCrimeShows] = useState([]);
  const [sciFiShows, setSciFiShows] = useState([]);

  useEffect(() => {
    fetchCalls.fetchActionTvShows().then((data) => setActionShows(data));
    fetchCalls.fetchComedyTvShows().then((data) => setComedyShows(data));
    fetchCalls.fetchCrimeTvShows().then((data) => setCrimeShows(data));
    fetchCalls.fetchSciFiTvShows().then((data) => setSciFiShows(data));
  }, []);

  return (
    <div className="movie-sections">
      <h1>Sci-Fi</h1>
      <MovieTvSection
        setModalData={setModalData}
        shows={sciFiShows}
        genre={"Sci-Fi"}
      />
      <h1>Action</h1>
      <MovieTvSection
        setModalData={setModalData}
        shows={actionShows}
        genre={"Action"}
      />

      <h1>Crime</h1>
      <MovieTvSection
        setModalData={setModalData}
        shows={crimeShows}
        genre={"Crime"}
      />

      <h1>Comedy</h1>
      <MovieTvSection
        setModalData={setModalData}
        shows={comedyShows}
        genre={"Comedy"}
      />
    </div>
  );
}

export default TvSectionContainer;
