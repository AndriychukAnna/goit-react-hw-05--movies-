import React from 'react'
const FilmDetailsViewCard = ({styles, film}) => {
    return (
        <>
         
        <div className={styles.filmContainer}>
              <div className={styles.filmImage}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.original_title ?? film.original_name}
                />
              </div>
              <div>
                <h2>{film.original_title ?? film.original_name}</h2>
                <p>User score: {film.popularity}%</p>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {film?.genres?.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
            
            </div>
            </>
    );
}

export default FilmDetailsViewCard;