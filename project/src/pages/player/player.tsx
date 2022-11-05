import ButtonPlay from '../../components/button/button-play';
import Error from '../errors/error';
import {useNavigate, useParams} from 'react-router-dom';
import {getFilmById} from '../../mocks/films';

export default function Player(): JSX.Element {
  const navigate = useNavigate();

  const params = useParams();
  const film = getFilmById(Number(params.id));

  if (!film) {
    return <Error />;
  }

  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(-1)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <ButtonPlay />
        </div>
      </div>
    </div>
  );
}
