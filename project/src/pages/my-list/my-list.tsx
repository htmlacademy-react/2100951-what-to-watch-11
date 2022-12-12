import Header from '../../components/header/header';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import FilmsList from '../../films-list/films-list';
import { useAppSelector } from '../../hooks';
import { getFavoriteDataLoadingStatus, getFavorites } from '../../store/film-data/selectors';
import Loading from '../loading/loading';

export default function MyList(): JSX.Element {

  const films = useAppSelector(getFavorites);
  const isFavoriteDataLoading = useAppSelector(getFavoriteDataLoadingStatus);

  if (isFavoriteDataLoading) {
    return (
      <Loading />
    );
  }

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
