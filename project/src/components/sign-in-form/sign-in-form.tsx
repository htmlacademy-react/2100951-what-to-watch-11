import { useState, FormEvent, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action';
import { AuthData } from '../../types/auth-data';

export default function SignInForm(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginValue && passwordValue) {
      onSubmit({
        login: loginValue,
        password: passwordValue,
      });
    }
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  }, [authorizationStatus, navigate]);

  return (
    <form
      action="#"
      className="sign-in__form"
      onSubmit={handleFormSubmit}
    >
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            onChange={({ target }: ChangeEvent<HTMLInputElement>): void => setLoginValue(target.value)}
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            onChange={({ target }: ChangeEvent<HTMLInputElement>): void => setPasswordValue(target.value)}
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}
