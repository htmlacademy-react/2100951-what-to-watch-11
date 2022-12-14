import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useMemo } from 'react';
import { MAX_GENRE_COUNT } from '../../const';
import ShowMore from '../../components/show-more/show-more';
import { getGenresList } from '../../services/film';
import GenresList from '../../components/genre-list/genre-list';
import { Helmet } from 'react-helmet-async';
import { getFilms, getFilteredFilms } from '../../store/film-data/selectors';
import { getGenreFilter, getShownFilmsCount } from '../../store/app-process/selectors';
import { incFilmsCount } from '../../store/action';

export default function Main(): JSX.Element {

  const films = useAppSelector(getFilms);
  const activeGenre = useAppSelector(getGenreFilter);
  const genresList = useMemo(() => getGenresList(films).slice(0, MAX_GENRE_COUNT), [films]);
  const filteredFilms = useAppSelector(getFilteredFilms);
  const filmsCount = useAppSelector(getShownFilmsCount);
  const dispatch = useAppDispatch();

  const handleMoreButtonClick = () => {
    dispatch(incFilmsCount());
  };

  return (
    <>
      <Helmet>
        <title>WTW main page</title>
      </Helmet>
      <FilmCard />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList currentGenre={activeGenre} genres={genresList} />

          <FilmsList films={filteredFilms.slice(0, filmsCount)} />

          {((filteredFilms.length - filmsCount) > 0) && <ShowMore onMore={handleMoreButtonClick} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

