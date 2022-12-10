import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddReviewComponent from '../../components/add-review/add-review';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFilmAction } from '../../store/api-action';
import { getFilm, getFilmDataLoadingStatus } from '../../store/film-data/selectors';
import Error from '../errors/error';
import Loading from '../loading/loading';

export default function AddReview(): JSX.Element {

  const params = useParams();

  useEffect(() => {
    let isFilmDetailMounted = true;

    if (isFilmDetailMounted) {
      store.dispatch(fetchFilmAction(Number(params.id)));
    }

    return () => {
      isFilmDetailMounted = false;
    };
  }, [params.id]);

  const film = useAppSelector(getFilm);
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);

  if (isFilmDataLoading) {
    return (
      <Loading />
    );
  }

  if (!film) {
    return <Error />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={'/films/$(film.id)'} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <AddReviewComponent />

    </section>
  );
}
