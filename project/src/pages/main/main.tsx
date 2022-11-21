import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../films-list/films-list';
import { useAppSelector } from '../../hooks';
import { getGenresList, promoFilm } from '../../mocks/films';
import { GenresList } from '../../components/genre-list/genre-list';
import { useEffect, useState } from 'react';
import { FilmsType } from '../../types/film';
import { MAX_COUNT } from '../../const';
import ShowMore from '../../components/show-more/show-more';

export default function Main(): JSX.Element {

  const films = useAppSelector((state) => state.films);
  const genresList = getGenresList();
  const activeGenre = useAppSelector((state) => state.genre);
  const [filmCards, setFilmCards] = useState<FilmsType>([]);

  useEffect(() => {
    let isFilmsMounted = true;

    if (isFilmsMounted) {
      setFilmCards(films.slice(0, MAX_COUNT));
    }

    return () => {
      isFilmsMounted = false;
    };
  }, [films]);

  function handleMoreButtonClick() {
    setFilmCards((prevState) => [
      ...prevState,
      ...films.slice(filmCards.length, filmCards.length + MAX_COUNT)
    ]);
  }

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <FilmCard film={promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList currentGenre={activeGenre} genres={genresList} />

          <FilmsList films={filmCards} />

          {films.length > filmCards.length && <ShowMore onMore={handleMoreButtonClick} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

