import React from 'react'


export function TVSection({ shows, genre }) {
  return (
    <div>
      <h2>{genre}</h2>
      <div className="tvShow-container">
        {shows.map(show => (
          <TvShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
}
