import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FilmsType, FilmType } from '../types/film';
import { ReviewsType } from '../types/review';
import { UserData } from '../types/user-data';

export const setActiveGenre = createAction<{genre: string}>('film/setActiveGenre');

export const loadPromo = createAction<FilmType>('data/loadPromo');

export const loadFilms = createAction<FilmsType>('data/loadFilms');

export const loadFilm = createAction<FilmType>('data/loadFilm');

export const loadReviews = createAction<ReviewsType>('data/loadReviews');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadUser = createAction<UserData>('user/loadUser');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');
