import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import FilmTabs from '../../components/film-tabs/film-tabs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RELETED_COUNT } from '../../const';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import { getFilmsByGenre } from '../../services/film';
import { store } from '../../store';
import { fetchFilmAction, fetchReviewsAction } from '../../store/api-action';
import { getFilms, getFilm, getFilmDataLoadingStatus, getReviews } from '../../store/film-data/selectors';
import Error from '../errors/error';
import Loading from '../loading/loading';

function FilmDetails(): JSX.Element {
  const params = useParams();

  useEffect(() => {
    let isFilmDetailMounted = true;

    if (isFilmDetailMounted) {
      store.dispatch(fetchFilmAction(Number(params.id)));
      store.dispatch(fetchReviewsAction(Number(params.id)));
    }

    return () => {
      isFilmDetailMounted = false;
    };
  }, [params.id]);

  const films = useAppSelector(getFilms);
  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getReviews);

  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);

  const relatedFilms = useMemo(() => {
    if (film && films) {
      return getFilmsByGenre(film.genre, films).slice(0, RELETED_COUNT);
    }
    return [];
  }, [film, films]);

  if (isFilmDataLoading) {
    return (
      <Loading />
    );
  }

  if (!film) {
    return <Error />;
  }

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

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <FilmCardButtons filmId={film.id} />
            </div>
          </div>

        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmTabs film={film} reviews = {reviews} />
            </div>
          </div>
        </div>

      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={relatedFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmDetails;
