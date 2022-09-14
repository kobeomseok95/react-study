import MovieApiClient from 'clients/MovieApiClient'
import MovieApiRequests from 'clients/MovieApiRequests'
import React, { useEffect, useState } from 'react'
import { Movie, Page } from 'types/Movie'

const Banner = () => {
  const [movie, setMovie] = useState<Movie>()
  
  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const pageResponse: Page<Movie> = await MovieApiClient.get(MovieApiRequests.fetchNowPlaying)
  }

  return (
    <div>Banner</div>
  )
}

export default Banner