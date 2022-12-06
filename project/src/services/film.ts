import { DEFAULT_GENRE } from '../const';
import { FilmsType } from '../types/film';

export function getGenresList(films: FilmsType): string[] {
  const genres = new Set(films.map((film) => film.genre));
  return [DEFAULT_GENRE as string, ...genres];
}

export function getFilmsByGenre(genre: string, films: FilmsType): FilmsType {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}
