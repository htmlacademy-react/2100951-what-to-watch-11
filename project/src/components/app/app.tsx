import Main from '../../pages/main/main';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Sign from '../../pages/sign/sign';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import Error from '../../pages/errors/error';
import PrivateRoute from '../private-route/private-route';
import FilmDetailScreen from '../../pages/film-details/film-details';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';

export default function App(): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const loading = useAppSelector((state) => state.loading);

  if (authorizationStatus === AuthorizationStatus.Unknown || loading) {
    return (
      <Loading />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main />
            }
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path={AppRoute.Film}
            element={<FilmDetailScreen />}
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
