import {createAction} from '@reduxjs/toolkit';
import { FilmsType } from '../types/film';

export const setActiveGenre = createAction<{genre: string}>('film/setActiveGenre');

export const setFilmsByGenre = createAction<{filmsByGenre: FilmsType}>('film/setFilmsByGenre');
