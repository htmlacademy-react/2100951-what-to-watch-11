import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute | string>('film/redirectToRoute');

export const changeFilter = createAction('main/changeFilter', (filter: string) => ({
  payload: filter,
}));
export const resetFilmsCount = createAction('resetFilmsCount');
export const incFilmsCount = createAction('incFilmsCount');
