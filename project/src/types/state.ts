import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {UserData} from './user-data';
import { FilmsType, FilmType } from './film';
import { ReviewsType } from './review';

export type FilmData = {
  promo?: FilmType;
  film?: FilmType;
  reviews: ReviewsType;
  activeGenre: string;
  isFilmDataLoading: boolean;
  films: FilmsType;
  isFilmsDataLoading: boolean;
  hasError: boolean;
};

export type UserProcess = {
  user?: UserData;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
