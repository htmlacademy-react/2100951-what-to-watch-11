import Main from '../../pages/main/main';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Sign from '../../pages/sign/sign';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import Error from '../../pages/errors/error';
import PrivateRoute from '../private-route/private-route';
import { FilmsType } from '../../types/film';
import FilmDetailScreen from '../../pages/film-details/film-details';
import { HelmetProvider } from 'react-helmet-async';

type PageProps = {
  films: FilmsType;
}

export default function App({ films }: PageProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main films={films} />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyList films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReview />}
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path={AppRoute.Film}
            element={<FilmDetailScreen films={films.slice(0, 4)} />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<Sign />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
