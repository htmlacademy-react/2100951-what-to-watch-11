export type FilmType = {
    id: number;
    name: string;
    posterImg: string;
    time: string;
    description: string;
    rating: number;
    genre: string;
    released: number;
    director: string;
    starring: string[];
    videoLink: string;
}

export type FilmsType = FilmType[];
