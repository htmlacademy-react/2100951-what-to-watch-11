import MainPage from '../../pages/main/main';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FilmsPage from '../../pages/films/films';
import SignPage from '../../pages/sign/sign';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyListPage from '../../pages/my-list/my-list';
import PlayerPage from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import Error from '../../pages/errors/error';
import PrivateRoute from '../private-route/private-route';

type PageProps = {
  title: string;
  genre: string;
  year: number;
}

export default function App(props: PageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage {...props} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Player}>
          <Route
            path={':id'}
            element={<PlayerPage />}
          />
        </Route>

        <Route path={AppRoute.Film}>
          <Route
            path={':id'}
            element={<FilmsPage />}
          >
          </Route>
          <Route
            path={':id/review'}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <AddReview />
              </PrivateRoute>
            }
          >
          </Route>
        </Route>

        <Route
          path={'*'}
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}
