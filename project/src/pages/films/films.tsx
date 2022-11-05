import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import { Link, useParams } from 'react-router-dom';
import { getFilmById } from '../../mocks/films';
import Error from '../errors/error';
import { useState } from 'react';
import { FilmsType } from '../../types/film';
import Navigation from '../../components/navigation/navigation';
import FilmsList from '../../films-list/films-list';

type FilmsProps = {
  films: FilmsType;
}

export default function FilmsPage({ films }: FilmsProps): JSX.Element {

  const { filmId } = useParams();
  const film = getFilmById(Number(filmId));
  const [currentView, setCurrentView] = useState('overview');

  if (!film) {
    return <Error />;
  }
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImg} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header headerClass="page-header film-card__head">
            <UserBlock />
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to="review" className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImg} alt={film.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Navigation currentView={currentView} handleTabClick={(view: string) => setCurrentView(view)} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={films} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
