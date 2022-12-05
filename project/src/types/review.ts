import { UserData } from './user-data';

export type ReviewType = {
  id?: number;
  comment: string;
  rating: number;
  user?: UserData;
  date?: string;
}

export type ReviewsType = ReviewType[];
