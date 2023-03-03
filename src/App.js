import './App.css';
import SummaryModal from './Components/Modal';
import HeroImage from './Components/hero';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';

function App() {

  //when this is active the modal will be shown 
  const [cardModalData, setCardModalData] = useState();
  
  return (
    <div className="main-container">
      {cardModalData && <SummaryModal cardModalData={cardModalData} setCardModalData={setCardModalData}/>}
      <div className='hero-image'>
        <HeroImage setCardModalData={setCardModalData}/>
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
