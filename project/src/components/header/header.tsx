import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderProps = {
  headerClass?: string;
  children?: React.ReactNode;
  light?: boolean;
}

export default function Header({ children, headerClass, light = false}: HeaderProps): JSX.Element {
  const linkClass = `logo__link ${light ? 'logo__link--light' : ''}`;

  return (
    <header className={`page-header ${headerClass ? ` ${headerClass}` : ''}`}>
      <div className="logo">
        <Link className={linkClass} to={AppRoute.Main}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {children}
    </header>
  );
}
