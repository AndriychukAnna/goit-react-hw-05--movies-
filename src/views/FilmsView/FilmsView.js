import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSearchFilms } from "../../FetchFilms/FetchFilms";
import FilmSearch from "../FilmSearch";
import RenderFilmCard from "../../components/renderFilmCard/RenderFilmCard";

function FilmsView() {
  const history = useHistory();
  const location = useLocation();

  const [filmName, setFilmName] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const filmQuery = new URLSearchParams(location.search).get("movie");
    setFilmName(filmQuery);
  }, [location.search]);

  useEffect(() => {
    if (filmName === "") {
      return;
    }

    fetchSearchFilms(filmName).then((response) =>
      setSearchResult(response.results)
    );
  }, [filmName]);

  const handleSearchSubmit = (searchQuery) => {
    setFilmName(searchQuery);
    if (searchQuery.trim() === "") {
      alert("Enter correct film name");
      return;
    }
    reset();

    history.push({ ...location, search: `movie=${searchQuery}` });
  };

  const reset = () => {
    setSearchResult(null);
  };

  return (
    <div>
      <FilmSearch onSubmit={handleSearchSubmit} />

      <ul>
        <RenderFilmCard searchResult={searchResult}/>
      </ul>
    </div>
  );
}

export default FilmsView;
