import axios from "axios";

const MovieApiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "0e06a1c7ec3a75488babd2cc0a1ad095",
    language: "ko-KR",
  }
})

export default MovieApiClient
