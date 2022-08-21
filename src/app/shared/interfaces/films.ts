export interface ServerResponse {
  page: number;
  results: FilmInfo[];
  total_pages: number;
  total_results: number;
}

export interface FilmInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;  
  title?: string;
  name?: string;
  origin_country?: string[];
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;  
  first_air_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}