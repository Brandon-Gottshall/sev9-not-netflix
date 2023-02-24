import React, {useState, useEffect} from "react"

//(useEffect) only when component loads for first time, run this: 
    //grab trending video from tmdb 
    // axios.get(https://api.themoviedb.org/3/trending/all/day?api_key=62be9389e81a8c75366a852f32ce210a)
    //grab id from first object from results
    // axios.get(https://api.themoviedb.org/3/movie/${id}/videos?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US)
    //loop through results and grab youtube video key from object with type: 'Trailer'
    // update state with new movie url


