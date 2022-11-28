import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../const';
import { FilmsType, FilmType } from '../types/film';
import { UserData } from '../types/user-data';
import { loadFilms, loadPromo, loadUser, requireAuthorization, setActiveGenre, setFilmsDataLoadingStatus } from './action';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  film?: FilmType;
  films: FilmsType;
  genre: string;
  loading: boolean;
  user?: UserData;
};

const initialState: InitialState = {
  films: [],
  genre: DEFAULT_GENRE as string,
  loading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(loadPromo, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
