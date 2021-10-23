import { useState, useEffect, lazy, Suspense } from "react";
import { Link, Route } from "react-router-dom";
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router";
import { fetchFilmById } from "../../FetchFilms/FetchFilms";
import styles from "./FilmDetailsView.module.css";
import FilmDetailsViewCard from "../../components/renderFilmCard/FilmDetailsViewCard";

const SubFilmDetailsCastView = lazy(() =>
  import(
    "../../components/SubFilmDetailsCastView/SubFilmDetailsCastView.js" /* webpackChunkName: "Film-cast-view" */
  )
);
const SubFilmDetailsReviewsView = lazy(() =>
  import(
    "../../components/SubFilmDetailsReviewsView/SubFilmDetailsReviewsView.js" /* webpackChunkName: "Film-reviews-view" */
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
            <FilmDetailsViewCard styles={styles}
              film={ film}/>
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
