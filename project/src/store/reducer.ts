import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { FilmsType, FilmType } from '../types/film';
import { loadFilms, loadPromo, setActiveGenre, setFilmsDataLoadingStatus } from './action';

type InitialState = {
  film: FilmType|null;
  films: FilmsType;
  genre: string;
  loading: boolean;
};

const initialState: InitialState = {
  film: null,
  films: [],
  genre: DEFAULT_GENRE as string,
  loading: false
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
    });
});
