import Main from '../../pages/main/main';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import FilmsPage from '../../pages/films/films';
import Sign from '../../pages/sign/sign';
import { AppRoute, AuthorizationStatus } from '../../const';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import Error from '../../pages/errors/error';
import PrivateRoute from '../private-route/private-route';
import { FilmsType } from '../../types/film';

type PageProps = {
 films: FilmsType;
}

export default function App({films}: PageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<Sign />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films}/>
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Player}>
          <Route
            path={':id'}
            element={<Player />}
          />
        </Route>

        <Route path={AppRoute.Film}>
          <Route
            path={':id'}
            element={<FilmsPage films={films.slice(0, 4)}/>}
          >
          </Route>

          <Route
            path={`:id${AppRoute.AddReview}`}
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
