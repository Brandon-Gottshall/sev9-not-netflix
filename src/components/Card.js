import React from "react";

export default function Card(props) {
    const { posterPath, onClick } = props

    return (
         <div onClick={onClick} className='Overlay Card'>
            <img src={'https://image.tmdb.org/t/p/w500' + posterPath} alt="movieCard" />
        </div>
    );
}
