import React from "react";

 export default function Card(props) {
    const {title, posterPath} = props
    
    return (
        <div className ='Overlay'>
        <div className="Card">
        {/* <h1>{title}</h1> */}
        <img src={'https://image.tmdb.org/t/p/w500' + posterPath} alt="movieCard" />
        
      </div>
      </div>


    );
  }
  