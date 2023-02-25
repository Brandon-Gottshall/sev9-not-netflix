import React, { useState, useEffect } from "react"
import ReactPlayer from 'react-player'
import SummaryModal from './Modal.js';

const HeroImage = () => {
  const [id, getID] = useState();
  const [key, getKey] = useState();
  const [playing, setPlaying] = useState(false);
  const [mute, unMute] = useState(false);

  function startPlay() {
    setPlaying(true)
  }
  function stopPlay() {
    setPlaying(false)
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=62be9389e81a8c75366a852f32ce210a')
      .then(res => res.json())
      .then(res => {
        getID(res.results[0]);
        return res.results[0];
      })
      .then(trendingId =>

        fetch(`https://api.themoviedb.org/3/movie/${trendingId.id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`)
          .then(res => res.json())
          .then(res => {
            getKey(res.results[0])
          }))
  }, [])

  let videoURL = `https://www.youtube.com/watch?v=${key?.key}?modestbranding=1&showinfo=0&fs=0&rel=0`

  return (
    <div className="hero-row row">
      {/* <iframe width="560" height="315" src= {`https://www.youtube.com/embed/${key?.key}?modestbranding=1&showinfo=0`}frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <ReactPlayer muted={true} controls={true} playing={playing} onMouseOver={startPlay} onMouseLeave={stopPlay} url={videoURL} loop={true} height='100%' width='100%' />
      {id && <SummaryModal className='hero-modal' id={id?.id} />}
    </div>
  )
}

export default HeroImage




