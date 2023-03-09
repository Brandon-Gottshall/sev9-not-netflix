import React, {useState, useEffect} from "react"
import MovieSection from "./MovieSection"

let searchDebouncer;
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

const handleSearchChange = (e) => {
  console.log(e.target.value);
  setQuery(e.target.value);
  searchQuery(e);
}

const resetInputField = () => {
  setQuery("")
}

const debounce = (fn) =>{
  // if a search debouncer exists, cancel that request
  if(searchDebouncer){
    clearTimeout(searchDebouncer);
    console.log(searchDebouncer, 'cancelled');
  }
  //call the function provided in 175 milliseconds
  searchDebouncer = setTimeout(fn , 175);
  console.log(searchDebouncer);
}
const searchQuery = (e) => {
  e.preventDefault();
  //debounce if request is already happening, cancel and then after delay, fire off the request
  debounce( () => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(res => {
            setSearchResults(res.results);
          // after request is finished, searchDebouncer should not exist
           searchDebouncer = null
            return res.results;
            })
        })
  // resetInputField()
}

  

  return(
    <div className="search-bar-container">
      <form className="search-bar">
        <input className="search-field"
          value={query}
          onChange={handleSearchChange}
          type="text"
          placeholder="Search for a Movie, TV Show, Person..." required
        /> 
        <button className ="search-bar-button" onClick={searchQuery} type="submit">Search</button>
      </form>
        <MovieSection className ="search-movie-section" movies={searchResults} genre={query}/>
    </div>
  )
}

export default SearchBar