export default function ButtonPlay (): JSX.Element {
  return (
    <>
      <button type="button" className="player__play">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <div className="player__name">Transpotting</div>

      <button type="button" className="player__full-screen">
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"></use>
        </svg>
        <span>Full screen</span>
      </button>
    </>
  );
}
