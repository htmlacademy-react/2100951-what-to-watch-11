import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {loadFilm, loadFilms, loadPromo, loadReviews, loadUser, redirectToRoute, requireAuthorization, setFilmDataLoadingStatus, setFilmsDataLoadingStatus} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {FilmType, FilmsType} from '../types/film.js';
import { UserData } from '../types/user-data.js';
import { AuthData } from '../types/auth-data.js';
import { dropToken, saveToken } from '../services/token';
import { ReviewsType, ReviewType } from '../types/review.js';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<FilmsType>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmDataLoadingStatus(true));
      const {data} = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
      dispatch(setFilmDataLoadingStatus(false));
      dispatch(loadFilm(data));
    } catch {
      dispatch(setFilmDataLoadingStatus(false));
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (filmId, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmDataLoadingStatus(true));
      const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${filmId}`);
      dispatch(setFilmDataLoadingStatus(false));
      dispatch(loadReviews(data));
    } catch {
      dispatch(setFilmDataLoadingStatus(false));
    }
  },
);

export const commentAction = createAsyncThunk<void, [number, ReviewType], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comment',
  async ([filmId, {comment, rating}], {dispatch, extra: api}) => {
    await api.post<ReviewType>(`${APIRoute.Reviews}/${filmId}`, {comment, rating});
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmsDataLoadingStatus(true));
      const {data} = await api.get<FilmType>(APIRoute.Promo);
      dispatch(setFilmsDataLoadingStatus(false));
      dispatch(loadPromo(data));
    } catch {
      dispatch(setFilmsDataLoadingStatus(false));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(loadUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(loadUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
