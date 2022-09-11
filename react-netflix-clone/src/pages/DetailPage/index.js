import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieApiClient from '../../api/MovieApiClient';

function DetailPage() {
  const { movieId } = useParams();
  const [ movie, setMovie ] = useState({});
  
  useEffect(() => {
    console.log("Detail Page useEffect() 발동");
    fetchData();
  }, [movieId]);

  const fetchData = async () => {
    const response = await MovieApiClient.get(`/movie/${movieId}`);
    setMovie(response.data);
  }
  
  return (
    <section>
      <img 
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  )
}

export default DetailPage
