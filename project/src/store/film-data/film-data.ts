import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_GENRE, NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { fetchFilmsAction, fetchPromoAction, fetchFilmAction, fetchReviewsAction } from '../api-action';

const initialState: FilmData = {
  films: [],
  reviews: [],
  activeGenre: DEFAULT_GENRE as string,
  isFilmDataLoading: false,
  isFilmsDataLoading: false,
  hasError: false,
};


export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setActiveGenre: (state, action: PayloadAction<{ genre: string }>) => {
      const { genre } = action.payload;
      state.activeGenre = genre;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isFilmsDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isFilmDataLoading = false;
        state.hasError = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.hasError = true;
      });
  }
});

export const { setActiveGenre } = filmData.actions;
