import React, {useState, useEffect} from "react"

const SearchBar = () => {
const [query, setQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);

const handleSearchChange = (e) => {
  setQuery(e.target.value);
}

const resetInputField = () => {
  setQuery("")
}

const SearchQuery = (e) => {
  e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=62be9389e81a8c75366a852f32ce210a&language=en-US&query=${query}&page=1&include_adult=false`)
       .then(res => res.json())
       .then(res => {
           setSearchResults(res.results);
          console.log(res.results)
           return res.results;
          })
  resetInputField()
}

  

  return(
    <div>
      <form className="search-bar">
        <input
          value={query}
          onChange={handleSearchChange}
          type="text"
        />
        <input onClick={SearchQuery} type="submit" value="SEARCH" />
        {/*turn list of movies into a list of movie cards*/ 
        searchResults.map(result => {})}
      </form>
      
    </div>
  )
}

export default SearchBar