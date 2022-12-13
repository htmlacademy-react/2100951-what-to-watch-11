import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_GENRE, MAX_COUNT, NameSpace } from '../../const';
import { AppProcess } from '../../types/state';
import { changeFilter, incFilmsCount, resetFilmsCount } from '../action';

const initialState: AppProcess = {
  genreFilter: DEFAULT_GENRE,
  shownFilmsCount: MAX_COUNT,
};

const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeFilter, (state, action) => {
        state.genreFilter = action.payload;
      })
      .addCase(incFilmsCount, (state) => {
        state.shownFilmsCount += MAX_COUNT;
      })
      .addCase(resetFilmsCount, (state) => {
        state.shownFilmsCount = MAX_COUNT;
      });
  }
});

export { appProcess, initialState };
