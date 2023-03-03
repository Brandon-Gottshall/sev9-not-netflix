// import React, {useState, useEffect} from "react"

// const SearchBar = () => {
//   const [id, getID] = useState();
//   useEffect( () => {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=${query}&page=1&include_adult=false`)
//        .then(res => res.json())
//        .then(res => {
//            getID(res.results[0]);
//            return res.results[0];
//           })
//         }, [])

//   return(
//     <div>
      
//     </div>
//   )
// }