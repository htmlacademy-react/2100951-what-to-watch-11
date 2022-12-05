import {createReducer} from '@reduxjs/toolkit';
import {setActiveGenre, loadFilms, setFilmsDataLoadingStatus, setFilmDataLoadingStatus, loadPromo, requireAuthorization, loadUser, loadFilm, loadReviews} from './action';
import {AuthorizationStatus, DEFAULT_GENRE} from '../const';
import {FilmType, FilmsType} from '../types/film';
import { UserData } from '../types/user-data';
import { ReviewsType } from '../types/review';

type InitalState = {
  promo?: FilmType;
  film?: FilmType;
  films: FilmsType;
  reviews: ReviewsType;
  activeGenre: string;
  isFilmDataLoading: boolean;
  isFilmsDataLoading: boolean;
  user?: UserData;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  films: [],
  reviews: [],
  activeGenre: DEFAULT_GENRE as string,
  isFilmDataLoading: false,
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const {genre} = action.payload;
      state.activeGenre = genre;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
