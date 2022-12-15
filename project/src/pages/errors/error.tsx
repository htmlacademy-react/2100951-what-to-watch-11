import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './error.css';

export default function Error(): JSX.Element {
  return (
    <div className="user-page">
      <Header />

      <div className="user-page__content">
        <h1>404<br/><br/>Page not found :(</h1>
        <Link to="/" className='user-block__link'>Go to main page</Link>
      </div>

      <Footer />
    </div>
  );
}
