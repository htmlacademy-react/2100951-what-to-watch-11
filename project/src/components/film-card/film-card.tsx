import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import { getPromo } from '../../store/film-data/selectors';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import Header from '../header/header';
import UserBlock from '../user-block/user-block';

function FilmCard(): JSX.Element {
  const film = useAppSelector(getPromo);

  if (!film) {
    return (
      <section className="film-card">
        <Loading />
      </section>
    );
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header headerClass="page-header film-card__head" >
        <UserBlock />
      </Header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={film.name} width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <FilmCardButtons filmId={film.id} isPromo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FilmCard);
