import cn from 'classnames';
import Logo from '../logo/logo';

type HeaderProps = {
  headerClass?: string;
  children?: React.ReactNode;
  filmCount?: number;
}

export default function Header({ children, headerClass, filmCount }: HeaderProps): JSX.Element {
  const isMyListPage = filmCount !== undefined;

  return (
    <header className={cn(
      'page-header',
      { 'film-card__head': !isMyListPage },
      { 'user-page__head': isMyListPage }
    )}
    >
      <Logo />

      {isMyListPage &&
        <h1 className="page-title user-page__title">
          My list {Number(filmCount) > 0 && <span className="user-page__film-count">{filmCount}</span>}
        </h1>}
      {children}
    </header >
  );
}
