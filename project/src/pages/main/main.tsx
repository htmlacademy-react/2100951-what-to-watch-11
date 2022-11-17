import Footer from '../../components/footer/footer';
import FilmCard from '../../components/film-card/film-card';
import FilmsList from '../../films-list/films-list';
import { useAppSelector } from '../../hooks';
import { getGenresList, promoFilm } from '../../mocks/films';
import { GenresList } from '../../components/genre-list/genre-list';

export default function Main(): JSX.Element {

  const films = useAppSelector((state) => state.films);
  const genresList = getGenresList();
  const activeGenre = useAppSelector((state) => state.genre);

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <FilmCard film={promoFilm} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList currentGenre={activeGenre} genres={genresList}/>

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

