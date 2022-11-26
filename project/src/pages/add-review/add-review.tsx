import { Link, useParams } from 'react-router-dom';
import AddReviewComponent from '../../components/add-review/add-review';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../services/film';
import Error from '../errors/error';

export default function AddReview(): JSX.Element {

  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const film = getFilmById(Number(params.id), films);

  if (!film) {
    return <Error />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.posterImage} alt={film.name} />
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
