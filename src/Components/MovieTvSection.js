import React from 'react'
import Card from './Card';

export default function MovieTvSection(props) {
    console.log(props.movies)

    return (
        <div className="movie-section">
            {props.movies && props.movies.map(movie => {
                return (
                    <Card onClick={() => props.setModalData({id: movie.id, media_type: 'movie'})} title={movie.title} posterPath={movie.poster_path} key={movie.id} />
                )
            })}
            {props.shows && props.shows.map(show => {
                return (
                    <Card onClick={() => props.setModalData({id: show.id, media_type: 'tv'})} title={show.name} posterPath={show.poster_path} key={show.id} />
                )
            })}
        </div>
    )
}
