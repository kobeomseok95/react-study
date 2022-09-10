import React, { useEffect, useState } from "react";
import MovieApiClient from "../api/MovieApiClient";
import "./Row.css"

function Row({ title, id, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const moviesResponse = await MovieApiClient.get(fetchURL);
    setMovies(moviesResponse.data.results)
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span 
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80
            }}
          >
            {"<"}
          </span>
        </div>
        <div 
          id={id}
          className="row__posters"
        >
          {movies.map((movie) => (
            <img 
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span 
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80
            }}
          >
              {">"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Row;
