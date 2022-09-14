export type Page<T> = {
  page: number,
  results: (T)[],
}

export type Movie = {
  idasdfasdfasdf: number,
  poster_path: string,
  adult: boolean,
  overview: string,
  release_date: string,
  genre_ids: (number)[],
  original_title: string,
  original_languate: string,
  title: string,
  backdrop_path: string,
  popularity: number,
  vote_count: number,
  video: boolean,
  vote_average: number,
  dates: {
    maximum: string,
    minimum: string,
  }
  total_pages: number,
  total_results: number,
}