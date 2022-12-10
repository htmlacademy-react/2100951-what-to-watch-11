import { FilmsType } from '../types/film';
import { memo, useState } from 'react';
import SmallFilmCard from '../components/small-film-card/small-film-card';

const TIMEOUT = 1000;

export type FilmsListProps = {
  films: FilmsType;
}

function FilmsList({ films }: FilmsListProps): JSX.Element {
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
          onFilmMouseEnter={() => handleFilmMouseEnter(film.id)}
          onFilmMouseOut={handleFilmMouseOut}
        />
      ))}
    </div>
  );
}

export default memo(FilmsList, (prevProps, nextProps) => {
  const isEqual = JSON.stringify(prevProps.films) === JSON.stringify(nextProps.films);
  return isEqual;
});
