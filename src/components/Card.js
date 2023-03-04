import React from "react";

export default function Card(props) {
    const { posterPath } = props

    return (
         <div className='Overlay'>
            <img src={'https://image.tmdb.org/t/p/w500' + posterPath} alt="movieCard" />
        </div>
    );
}
