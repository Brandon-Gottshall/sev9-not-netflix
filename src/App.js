import './App.css';
import SummaryModal from './Components/Modal';
import HeroImage from './Components/hero';
import { useState, useEffect } from 'react';


function App() {

  //when this is active the modal will be shown 
  const [cardModal, setCardModal] = useState();
  
  return (
    <div className="main-container">
      {cardModal && <SummaryModal cardData={cardModal} setCardModal={setCardModal}/>}
      <div className='hero-image'>
        <HeroImage setCardModal={setCardModal}/>
      </div>
    </div>
  );
}

export default App