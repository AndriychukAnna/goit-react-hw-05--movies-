import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingFilms } from "../../../FetchFilms/FetchFilms";
import styles from "./HomeView.module.css";

function HomeView() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrendingFilms().then((response) => setFilms(response.results));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending films today</h1>
      <ul>
        {films.length > 0 &&
          films.map((film) => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
                {film.original_name ?? film.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomeView;
