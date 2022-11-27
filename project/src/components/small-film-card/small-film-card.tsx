import { Link } from 'react-router-dom';
import { FilmType } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: FilmType;
  isPlaying: boolean;
  onFilmMouseEnter: () => void;
  onFilmMouseOut: () => void;
}

export default function SmallFilmCard({ film, isPlaying, onFilmMouseEnter, onFilmMouseOut }: SmallFilmCardProps): JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onFilmMouseEnter}
      onMouseOut={onFilmMouseOut}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={film.previewVideoLink}
          img={film.posterImage}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
