import React from 'react';
import '../Header.css';

function Header() {
    return (
      <div className="header">
        <h1>Not Netflix</h1>
        <div className="header__switch">
          <button className="header__switch-button">Movies</button>
          <button className="header__switch-button">TV</button>
        </div>
      </div>
    );
  }
  
  export default Header;
  