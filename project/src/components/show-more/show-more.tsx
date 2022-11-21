type ShowMoreProps = {
    onMore: () => void;
}

export default function ShowMore({ onMore }: ShowMoreProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        onClick={onMore}
        type="button"
      >
                Show more
      </button>
    </div>
  );
}
