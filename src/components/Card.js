import React from "react";

export default function Card(props) {
    const { posterPath } = props

    return (
        <div className='Overlay'>
            <div className="Scrollbar">
            <div className="Card">
                <img src={'https://image.tmdb.org/t/p/w500' + posterPath} alt="movieCard" />
            </div>
        </div>
        </div>
    );
}
