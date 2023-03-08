import React from 'react';
import '../Header.css';

function Header({setTvToggle}) {
    return (
      <div className="header">
        <h1>Not Netflix</h1>
        <div className="header__switch">
          <button onClick={() => {setTvToggle(false)}} className="header__switch-button">Movies</button>
          <button onClick={() => {setTvToggle(true)}} className="header__switch-button">TV</button>
        </div>
      </div>
    );
  }
  
  export default Header;
  