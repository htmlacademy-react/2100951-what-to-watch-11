import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SignInForm from '../../components/sign-in-form/sign-in-form';

export default function Sign(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <SignInForm />
      </div>

      <Footer />
    </div>
  );
}
