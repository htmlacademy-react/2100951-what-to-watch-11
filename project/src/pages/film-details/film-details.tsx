import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import FilmDetails from '../../components/details/film-details';
import Error from '../errors/error';
import Overview from '../../components/overview/overview';
import FilmReviews from '../../components/review/review';
import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';
import FilmsList from '../../films-list/films-list';
import { useAppSelector } from '../../hooks';
import { getFilmById, getFilmsByGenre } from '../../services/film';
import { Nav, RELETED_COUNT } from '../../const';
import { reviews } from '../../mocks/review';

export default function FilmDetailScreen(): JSX.Element {

  const [currentView, setCurrentView] = useState('overview');

  const params = useParams();
  const films = useAppSelector((state) => state.films);
  const film = getFilmById(Number(params.id), films);

  if (!film) {
    return <Error />;
  }
  const relatedFilms = getFilmsByGenre(film.genre, films).slice(0, RELETED_COUNT);

  const renderSwitchView = (): JSX.Element => {
    switch (currentView) {
      case Nav.Overview:
        return <Overview film={film} />;
      case Nav.Details:
        return <FilmDetails film={film} />;
      case Nav.Reviews:
        return <FilmReviews reviews={reviews} />;
      default:
        return <Overview film={film} />;
    }
  };

  return (
    <>
      <section className="film-card film-card--full">

        <Helmet>
          <title>{film.name}</title>
        </Helmet>

        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
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
                <Link to={`/films/${film.id}/review`} className="btn film-card__button" >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Navigation currentView={currentView}
                onTabClick={(view: string) => setCurrentView(view)}
              />

              {renderSwitchView()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={relatedFilms} />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
