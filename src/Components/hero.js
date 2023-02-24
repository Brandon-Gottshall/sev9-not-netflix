import React, {useState, useEffect} from "react"
import HoverVideoPlayer from 'react-hover-video-player';
import ReactPlayer from 'react-player'
import SummaryModal from './Modal.js';

const HeroImage = () => {
    const [id, getID] = useState();

        useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=62be9389e81a8c75366a852f32ce210a')
            .then(res => res.json())
            .then(res => {
            getID(res.results[0])
            })
        }, [])

    const [key, getKey] = useState();
        useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id?.id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US`)
            .then(res => res.json())
            .then(res => {
            getKey(res.results[2])
            })
        }, [])
    let videoURL = `https://www.youtube.com/watch?v=${key?.key}`

return(
    <div>
   <ReactPlayer url={videoURL}/>
   <SummaryModal id={id?.id}/>
    </div>
)
}

export default HeroImage
