import React from 'react'
import './App.css'
import HeroImage from './components/HeroImage'

function App() {
  return (
    <div className="App">
      <h1>{process.env.REACT_APP_TMDB_API_KEY}</h1>
      <HeroImage />
    </div>
  );
}

export default App