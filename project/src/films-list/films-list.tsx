import { FilmsType, FilmType } from '../types/film';
import FilmCard from '../components/film-card/film-card';

export type MovieListPropsType = {
    films: FilmsType;
}

export default function FilmsList({ films }: MovieListPropsType): JSX.Element {
  return (
    < div className="catalog__films-list" >
      {films.map((film: FilmType) => <FilmCard film={film} key={film.id} />)}
    </div >
  );
}
