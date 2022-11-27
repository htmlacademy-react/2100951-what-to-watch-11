import {createAction} from '@reduxjs/toolkit';
import { FilmsType, FilmType } from '../types/film';

export const setActiveGenre = createAction<{genre: string}>('film/setActiveGenre');

export const loadPromo = createAction<FilmType>('data/loadPromo');

export const loadFilms = createAction<FilmsType>('data/loadFilms');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');
