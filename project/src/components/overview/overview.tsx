import { RatingLevel } from '../../const';
import { FilmType } from '../../types/film';

type OverviewProps = {
  film: FilmType;
}

export default function Overview({ film }: OverviewProps): JSX.Element {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring,
  } = film;

  const Rating = {
    Bad: 3,
    Normal: 5,
    Good: 8,
    VeryGood: 10,
    Awesome: 10
  };

  const actorList = starring.join(', ');

  const getRatingLevel = () => {
    if (rating < Rating.Bad) {
      return RatingLevel.Bad;
    }
    if (rating < Rating.Normal) {
      return RatingLevel.Normal;
    }
    if (rating < Rating.Good) {
      return RatingLevel.Good;
    }
    if (rating < Rating.VeryGood) {
      return RatingLevel.VeryGood;
    }
    if (rating === Rating.Awesome) {
      return RatingLevel.Awesome;
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel()}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {actorList}</strong></p>
      </div>
    </>
  );
}
