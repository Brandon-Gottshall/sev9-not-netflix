import React, { useState, useEffect } from "react"
import axios from "axios"


function HeroImage() {
  const [movieTrailer, setMovieTrailer] = useState("")

  useEffect(() => {
    async function fetchTrailer() {
      // Fetch trending movies from TMBD API
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=62be9389e81a8c75366a852f32ce210a"
      )

      // Get the first movie id from the results
      const movieId = response.data.results[0].id;

      // Fetch videos for the movie
      const videoResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=YOUR_API_KEY&language=en-US`
      )

      // Find the trailer video key in the results
      const trailer = videoResponse.data.results.find(
        (result) => result.type === "Trailer"
      )

      // Set the trailer video key in the state
      setMovieTrailer(`https://www.youtube.com/watch?v=${trailer.key}`)
    }

    fetchTrailer()
  }, [])

//return()

}







