import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SignInForm from '../../components/sign-in-form/sign-in-form';

export default function SignPage(): JSX.Element {
  return (
    <div className="user-page">
      <Header headerClass="page-header user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <SignInForm />
      </div>

      <Footer />
    </div>
  );
}
