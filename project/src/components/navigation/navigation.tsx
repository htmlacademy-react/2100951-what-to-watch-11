import { Link } from 'react-router-dom';
import { Nav } from '../../const';

type NavigationProps = {
  currentView: string;
  onTabClick: (view: string) => void;
}

export default function Navigation({ currentView, onTabClick }: NavigationProps): JSX.Element {

  const tabs = Object.values(Nav);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">

        {tabs.map((item: string) => (
          <li key={item} className={`film-nav__item ${currentView === item ? 'film-nav__item--active' : ''}`}>
            <Link
              to="/"
              className="film-nav__link"
              onClick={(evt: React.MouseEvent) => {
                evt.preventDefault();
                onTabClick(item);
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
