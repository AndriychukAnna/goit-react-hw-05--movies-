import React, { useState, useEffect } from "react";
import RenderFilmCard from "../../components/renderFilmCard/RenderFilmCard";
import { fetchTrendingFilms } from "../../FetchFilms/FetchFilms";
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
        <RenderFilmCard searchResult={films}/>
      </ul>
    </div>
  );
}

export default HomeView;
