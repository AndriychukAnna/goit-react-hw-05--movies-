import { useState } from "react";

import styles from "./FilmSearch.module.css";

function FilmSearch({ onSubmit }) {
  const [filmName, setFilmName] = useState("");

  const handleChangeName = (e) => {
    setFilmName(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(filmName);
    setFilmName("");
  };
  return (
    <div>
      <header>
        <form className={styles.SearchHeader} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            value={filmName}
            onChange={handleChangeName}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    </div>
  );
}

export default FilmSearch;
