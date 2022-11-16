import { DEFAULT_GENRE } from '../const';
import { FilmsType, FilmType } from '../types/film';

const link = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm';

export const films: FilmsType = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'posterImg': 'img/bg-the-grand-budapest-hotel.jpg',
    'time': '1h 39m',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
    'rating': 8.9,
    'genre': 'Comedy',
    'released': 2014,
    'director': 'Wes Anderson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson'],
    'videoLink': link,
  },
  {
    'id': 2,
    'name': 'Dardjeeling limited',
    'posterImg': 'img/dardjeeling-limited.jpg',
    'description': 'After a sudden attack on the MI5, Johnny English, Britains most confident yet unintelligent spy, becomes Britains only spy.',
    'rating': 7.2,
    'director': 'Wes Anderson',
    'starring': [
      'Owen Wilson',
      'Adrien Brody',
      'Jason Schwartzman'
    ],
    'time': '1h 31m',
    'genre': 'Comedy',
    'released': 2007,
    'videoLink': link,
  },
  {
    'id': 3,
    'name': 'War of the Worlds',
    'posterImg': 'img/war-of-the-worlds.jpg',
    'description': 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
    'rating': 9.3,
    'director': 'Steven Spielberg',
    'starring': [
      'Tom Cruise',
      'Dakota Fanning',
      'Tim Robbins'
    ],
    'time': '1h 31m',
    'genre': 'Adventure',
    'released': 2005,
    'videoLink': link,
  },
  {
    'id': 4,
    'name': 'Shutter-island',
    'posterImg': 'img/shutter-island.jpg',
    'description': 'After a sudden attack on the MI5, Johnny English, Britains most confident yet unintelligent spy, becomes Britains only spy.',
    'rating': 10,
    'director': 'Peter Howitt',
    'starring': [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    'time': '1h 31m',
    'genre': 'Thriller',
    'released': 2003,
    'videoLink': link
  },
  {
    'id': 5,
    'name': 'Johnny English',
    'posterImg': 'img/johnny-english.jpg',
    'description': 'After a sudden attack on the MI5, Johnny English, Britains most confident yet unintelligent spy, becomes Britains only spy.',
    'rating': 10,
    'director': 'Peter Howitt',
    'starring': [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    'time': '1h 31m',
    'genre': 'Comedy',
    'released': 2003,
    'videoLink': link
  },
  {
    'id': 6,
    'name': 'What We Do in the Shadows',
    'posterImg': 'img/what-we-do-in-the-shadows.jpg',
    'description': 'A look into the daily (or rather, nightly) lives of three vampires whove lived together for over 100 years, in Staten Island.',
    'rating': 7.2,
    'director': 'Jemaine Clement',
    'starring': [
      'Kayvan Novak',
      'Matt Berry',
      'Natasia Demetriou'
    ],
    'time': '1h 31m',
    'genre': 'Comedy',
    'released': 2019,
    'videoLink': link
  },
  {
    'id': 7,
    'name': 'Moonrise Kingdom',
    'posterImg': 'img/moonrise-kingdom.jpg',
    'description': 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    'rating': 7.9,
    'director': 'Wes Anderson',
    'starring': [
      'Jared Gilman',
      'Kara Hayward',
      'Bruce Willis'
    ],
    'time': '1h 31m',
    'genre': 'Adventure',
    'released': 2012,
    'videoLink': link
  },
  {
    'id': 8,
    'name': 'Aviator',
    'posterImg': 'img/aviator.jpg',
    'description': 'A biopic depicting the early years of legendary Director and aviator Howard Hughes career from the late 1920s to the mid 1940s.',
    'rating': 9.8,
    'director': 'Martin Scorsese',
    'starring': [
      'Leonardo DiCaprio',
      'Cate Blanchett',
      'Kate Beckinsale'
    ],
    'time': '1h 31m',
    'genre': 'Drama',
    'released': 2014,
    'videoLink': link
  }
];

export const promoFilm: FilmType = {
  'id': 1,
  'name': 'The Grand Budapest Hotel',
  'posterImg': 'img/bg-the-grand-budapest-hotel.jpg',
  'time': '1h 39m',
  'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege.',
  'rating': 8.9,
  'genre': 'Comedy',
  'released': 2014,
  'director': 'Wes Anderson',
  'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Tony Revoloru', 'Tilda Swinton', 'Tom Wilkinson'],
  'videoLink': link,
};

export function getFilmById(id: number): FilmType | undefined {
  return films.find(($item) => $item.id === id );
}

export function getFilmsByGenre(genre: string): FilmsType {
  if (genre === DEFAULT_GENRE) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}

export function getGenresList(): string[] {
  const genres = new Set(films.map((film) => film.genre));
  return [DEFAULT_GENRE as string, ...genres];
}
