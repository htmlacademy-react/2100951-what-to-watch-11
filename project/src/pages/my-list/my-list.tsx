import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import FilmsList from '../../films-list/films-list';
import { FilmsType } from '../../types/film';

type MyListProps = {
  films: FilmsType;
}

export default function MyList({ films }: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header headerClass="page-header user-page__head">
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock />
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
}
