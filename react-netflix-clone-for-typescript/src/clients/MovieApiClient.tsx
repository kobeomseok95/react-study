import axios from "axios";

type MovieApiRequestParams = {
  api_key: string,
  language: string,
}

const movieApiRequestParamsConfiguration: MovieApiRequestParams = {
  api_key: "0e06a1c7ec3a75488babd2cc0a1ad095",
  language: "ko-KR",
}

const MovieApiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: movieApiRequestParamsConfiguration,
})

export default MovieApiClient
