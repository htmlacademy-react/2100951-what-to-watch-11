import { FilmsType } from '../types/film';
import { useState } from 'react';
import SmallFilmCard from '../components/small-film-card/small-film-card';

const TIMEOUT = 1000;

export type MovieListPropsType = {
  films: FilmsType;
}

export default function FilmsList({ films }: MovieListPropsType): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState(0);

  let timeoutId: NodeJS.Timeout | null = null;

  function handleFilmMouseEnter(id: number): void {
    timeoutId = setTimeout(() => {
      setActiveFilmId(id);
    }, TIMEOUT);
  }

  function handleFilmMouseOut(): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveFilmId(-1);
  }

  return (
    <div className="catalog__films-list" >
      {films.map((film) => (
        <SmallFilmCard key={`${film.id}`}
          isPlaying={activeFilmId === film.id}
          film={film}
          handleFilmMouseEnter={() => handleFilmMouseEnter(film.id)}
          handleFilmMouseOut={handleFilmMouseOut}
        />
      ))}
    </div>
  );
}
