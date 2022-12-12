import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './action';
import { FilmsType, FilmType } from '../types/film';
import { ReviewsType, ReviewType } from '../types/review';


export const fetchPromoAction = createAsyncThunk<FilmType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmsAction = createAsyncThunk<FilmsType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmsType>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<FilmType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(

  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const setFavoriteAction = createAsyncThunk<void, [number, boolean], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFavorite',
  async ([filmId, status], { dispatch, extra: api }) => {
    await api.post<FilmType>(`${APIRoute.Favorite}/${filmId}/${Number(status)}`);
    dispatch(fetchFavoritesAction());
  },
);

export const fetchFavoritesAction = createAsyncThunk<FilmsType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<FilmsType>(APIRoute.Favorite);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<ReviewsType, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (filmId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewsType>(`${APIRoute.Reviews}/${filmId}`);
    return data;
  },
);

export const commentAction = createAsyncThunk<void, [number, ReviewType], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comment',
  async ([filmId, { comment, rating }], { dispatch, extra: api }) => {
    await api.post<ReviewType>(`${APIRoute.Reviews}/${filmId}`, { comment, rating });
    dispatch(redirectToRoute(`${APIRoute.Films}/${filmId}`));
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.MyList));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
