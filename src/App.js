import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import SummaryModal from './Components/Modal';
import SearchBar from './Components/SearchBar';
import MovieContainer from './Components/MovieContainer';
import TvContainer from './Components/TvContainer';

function App() {

  
  //when this is active the modal will be shown 
  const [modalData, setModalData] = useState(false);
  
  const [tvToggle, setTvToggle] = useState(false);


  return (
    <div className="main-container">
      <Header setTvToggle={setTvToggle} />
      <div className="hero-image">
        <Hero setCardModalData={setModalData} />
        {modalData && <SummaryModal cardModalData={modalData} setCardModalData={setModalData} />}
        <SearchBar/>
      </div>

      { !tvToggle && <MovieContainer setModalData={setModalData} />}
      { tvToggle && <TvContainer setModalData={setModalData} />}
      
    </div>
  );
}

export default App;
