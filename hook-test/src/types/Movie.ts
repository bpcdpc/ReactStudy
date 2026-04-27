export interface Movie {
  id: number;
  title: string;
  poster: string;
}

export interface MovieResponse {
  movies: Movie[];
  count: number;
}
