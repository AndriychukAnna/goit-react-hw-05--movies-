import { useState, useEffect, lazy, Suspense } from "react";
import { Link, Route } from "react-router-dom";
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router";
import { fetchFilmById } from "../../../FetchFilms/FetchFilms";
import styles from "./FilmDetailsView.module.css";

const SubFilmDetailsCastView = lazy(() =>
  import(
    "../SubFilmDetailsCastView/SubFilmDetailsCastView.js" /* webpackChunkName: "Film-cast-view" */
  )
);
const SubFilmDetailsReviewsView = lazy(() =>
  import(
    "../SubFilmDetailsReviewsView/SubFilmDetailsReviewsView.js" /* webpackChunkName: "Film-reviews-view" */
  )
);

function FilmDetailsView() {
  const history = useHistory();
  const location = useLocation();

  const [film, setFilm] = useState(null);

  const { url } = useRouteMatch();
  const { movieId } = useParams();

  useEffect(() => {
    fetchFilmById(movieId).then(setFilm);
  }, [movieId]);

  const goToBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.buttonBack}
        onClick={goToBack}
        aria-label="Go back"
      >
        <span>Back</span>
      </button>

      <>
        {film && (
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
              <h3>Additional information</h3>
              <ul>
                <li>
                  <Link
                    to={{
                      pathname: `${url}/cast`,
                      state: {
                        from: location.state ? location.state.from : "/",
                      },
                    }}
                  >
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: `${url}/reviews`,
                      state: {
                        from: location.state ? location.state.from : "/",
                      },
                    }}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/movies/:moviesId/cast">
            <SubFilmDetailsCastView />
          </Route>

          <Route path="/movies/:moviesId/reviews">
            <SubFilmDetailsReviewsView />
          </Route>
        </Suspense>
      </>
    </div>
  );
}

export default FilmDetailsView;
