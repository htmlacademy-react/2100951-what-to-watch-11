import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../const';
import { films } from '../mocks/films';
import { setActiveGenre, setFilmsByGenre } from './action';

const initialState = {
  films: films,
  genre: DEFAULT_GENRE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(setFilmsByGenre, (state, action) => {
      const { filmsByGenre } = action.payload;
      state.films = filmsByGenre;
    });
});
