import {ReviewsType} from '../../types/review';
import ReviewCard from '../review-card/review-card';

type ReviewsProps = {
  reviews: ReviewsType;
}

export default function Reviews({reviews}: ReviewsProps): JSX.Element {

  const halfSize: number = Math.ceil(reviews.length / 2);
  const leftColumnReviews: ReviewsType = reviews.slice(0, halfSize);
  const rightColumnReviews: ReviewsType = reviews.slice(halfSize);

  return (
    <div className="film-card__reviews film-card__row">

      <div className="film-card__reviews-col">
        {leftColumnReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="film-card__reviews-col">
        {rightColumnReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

    </div>
  );
}
