import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { UserData } from './user-data';
import { FilmsType, FilmType } from './film';
import { ReviewsType } from './review';

export type FilmData = {
  promo?: FilmType;
  film?: FilmType;
  films: FilmsType;
  reviews: ReviewsType;
  isFilmDataLoading: boolean;
  isFilmsDataLoading: boolean;
  favorites: FilmsType;
  isFavoriteDataLoading: boolean;
  hasError: boolean;
};

export type UserProcess = {
  user?: UserData;
  authorizationStatus: AuthorizationStatus;
};

export type AppProcess = {
  genreFilter: string;
  shownFilmsCount: number;
};

export type DataProcess = {
  films: FilmsType;
  promoFilm: FilmType | null;
  isLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
