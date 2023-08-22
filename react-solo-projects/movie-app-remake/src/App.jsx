import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([{}]);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(true);
  const [search, setSearch] = useState([{}]);

  const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

  const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    setData(respData.results);
  }
  async function searchMovies(url) {
    const resp = await fetch(SEARCHAPI + value);
    const respData = await resp.json();
    setSearch(respData.results);
  }

  getMovies(APIURL);
  useEffect(() => {
    if (data) {
      setShow(true);
    }
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    searchMovies();
  };

  const listMovies = data.map((movie) => (
    <div className="movie" key={movie.id} id={movie.id}>
      <img src={IMGPATH + movie.poster_path} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
        <div className="overview">
          <h3 className="overview">Overview:</h3>
          {movie.overview}
        </div>
      </div>
    </div>
  ));
  const searchMoviesEl = search.map((movie) => (
    <div className="movie" key={movie.id} id={movie.id}>
      <img src={IMGPATH + movie.poster_path} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
        <div className="overview">
          <h3 className="overview">Overview:</h3>
          {movie.overview}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <header>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            placeholder="Search movies"
            className="search"
            onChange={handleChange}
            value={value}
          />
        </form>
      </header>
      <main id="main">{show ? listMovies : searchMoviesEl}</main>
    </>
  );
}

export default App;
