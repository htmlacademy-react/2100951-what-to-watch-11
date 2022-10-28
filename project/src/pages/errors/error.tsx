import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';

export default function Error(): JSX.Element {
  return (
    <div className="user-page">
      <Header headerClass='user-page__head' />
      <Logo />

      <div className="user-page__content" style={{margin: '0 auto', maxWidth: '480px', textAlign: 'center'}}>
        <h1>404<br/><br/>Page not found :(</h1>
        <Link to="/" className='user-block__link'>Go to main page</Link>
      </div>

      <Footer />
    </div>
  );
}
