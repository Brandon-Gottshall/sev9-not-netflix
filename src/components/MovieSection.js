import React from 'react'

export default function MovieSection(props) {
console.log(props.movies)
    return (
        <div>
            <h1>Movie Title</h1>
            {props.movies.map(movie =>{
                return (
                    <div>{movie.original_title}</div>
                )
            })}
        </div>
    )
}

