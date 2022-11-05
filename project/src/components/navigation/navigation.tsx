import {Nav} from '../../const';

type NavigationProps = {
  currentView: string;
  handleTabClick: (view: string) => void;
}

export default function Navigation({currentView, handleTabClick}: NavigationProps): JSX.Element {

  const tabs = Object.values(Nav);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">

        {tabs.map((item: string) => (
          <li key={item} className={`film-nav__item ${currentView === item ? 'film-nav__item--active' : ''}`}>
            <a
              href="#todo"
              onClick={(evt: React.MouseEvent) => {
                evt.preventDefault();
                handleTabClick(item);
              }}
              className="film-nav__link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
