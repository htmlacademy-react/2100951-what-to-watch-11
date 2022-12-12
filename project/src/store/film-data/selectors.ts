import { NameSpace } from '../../const';
import { FilmsType, FilmType } from '../../types/film';
import { ReviewsType } from '../../types/review';
import { State } from '../../types/state';

export const getActiveGenre = (state: State): string => state[NameSpace.Data].activeGenre;

export const getPromo = (state: State): FilmType | undefined => state[NameSpace.Data].promo;

export const getFilm = (state: State): FilmType | undefined => state[NameSpace.Data].film;
export const getFilmDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmDataLoading;

export const getFilms = (state: State): FilmsType => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;

export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].hasError;

export const getReviews = (state: State): ReviewsType => state[NameSpace.Data].reviews;

export const getFavorites = (state: State): FilmsType => state[NameSpace.Data].favorites;
export const getFavoriteDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteDataLoading;
