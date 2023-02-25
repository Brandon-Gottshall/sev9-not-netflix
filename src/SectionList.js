
    const [actionMovies, setActionMovies] = useState();
    const [comedyMovies, setComedyMovies] = useState();
    const [crimeMovies, setCrimeMovies] = useState();
    const [horrorMovies, setHorrorMovies] = useState();
  
    useEffect(() => {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const apiUrl = "https://api.themoviedb.org/3";
  
      fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=28&page=1`)
        .then(response => response.json())
        .then(data => setActionMovies(data.results.slice(0, 10)))
        .catch(error => console.error(error));
  
      fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=35&page=1`)
        .then(response => response.json())
        .then(data => setComedyMovies(data.results.slice(0, 10)))
        .catch(error => console.error(error));
  
      fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=80&page=1`)
        .then(response => response.json())
        .then(data => setCrimeMovies(data.results.slice(0, 10)))
        .catch(error => console.error(error));
  
      fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&with_genres=27&page=1`)
        .then(response => response.json())
        .then(data => setHorrorMovies(data.results.slice(0, 10)))
        .catch(error => console.error(error));
    }, []);
  