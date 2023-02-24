import React, {useState, useEffect} from "react"
// import ReactPlayer from 'react-player'

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
return(
    <div>
    <h1>{id?.id}</h1>
    </div>
)
}

export default HeroImage
