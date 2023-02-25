import React from 'react'

export default function MovieSection(props) {
console.log(props.movies)
    return(
        <div className="movie-section">

            {props.movies?props.movies.map(movie =>{
                return (
                    <div className="single-movie">{movie.original_title}</div>
                )
            }): ''}
        </div>
    )
}
