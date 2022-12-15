import Main from '../../pages/main/main';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/login/login';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import Error from '../../pages/errors/error';
import PrivateRoute from '../private-route/private-route';
import FilmDetails from '../../pages/film-details/film-details';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFilmsDataLoadingStatus, getErrorStatus } from '../../store/film-data/selectors';

export default function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (!isAuthChecked || isFilmsDataLoading) {
    return (
      <Loading />
    );
  }

  if (hasError) {
    return (
      <Error />);
  }


  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
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
            element={<FilmDetails />}
          />
          <Route
            path={AppRoute.SignIn}
            element={
              authorizationStatus === AuthorizationStatus.Auth ?
                <Navigate to={AppRoute.Main} /> :
                <Login />
            }
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
