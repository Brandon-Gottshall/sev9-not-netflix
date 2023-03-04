import React from 'react'
import Card from './Card';

export default function MovieSection(props) {
    console.log(props.movies)

    return (
        <div className="movie-section">
            {props.movies ? props.movies.map(movie => {
                return (
                    <Card onClick={() => props.setModalData({id: movie.id, media_type: 'movie'})} title={movie.title} posterPath={movie.poster_path} key={movie.id} />
                )
            }) : ''}
        </div>
    )
}
