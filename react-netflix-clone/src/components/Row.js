import React, { useEffect, useState } from "react";
import MovieApiClient from "../api/MovieApiClient";
import "./Row.css";
import MovieModal from "./MovieModal/MovieModal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Row({ title, id, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const moviesResponse = await MovieApiClient.get(fetchURL);
    setMovies(moviesResponse.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="slider">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1378: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            }
          }}
        >
          <div id={id} className="row__posters">
            {movies.map((movie) => (
              <SwiperSlide>
                <img
                  key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  } `}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      {modalOpen && (
        <MovieModal {...selectedMovie} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

export default Row;
