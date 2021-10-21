import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const AppBar = lazy(() =>
  import("../AppBar/AppBar.js" /* webpackChunkName: "AppBar" */)
);
const HomeView = lazy(() =>
  import("../views/HomeView/HomeView.js" /* webpackChunkName: "Home-view" */)
);
const FilmsView = lazy(() =>
  import(
    "../views/FilmsView/FilmsView.js" /* webpackChunkName: "Film-search" */
  )
);
const FilmDetailsView = lazy(() =>
  import(
    "../views/FilmDetailsView/FilmDetailsView.js" /* webpackChunkName: "Film-details-view" */
  )
);

const loader = (
  <Loader type="Circles" color="rgba(20, 20, 25, 0.7)" height={80} width={80} />
);

function App() {
  return (
    <>
      <Suspense fallback={loader}>
        <AppBar />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/movies" exact component={FilmsView} />
          <Route path="/movies/:movieId" component={FilmDetailsView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
