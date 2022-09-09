import React, { useState, useEffect } from "react";
import MovieApiRequests from "../api/MovieApiRequests";
import MovieApiClient from "../api/MovieApiClient";
import "./Banner.css";
import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState({});
  const [haveVideos, setHaveVideos] = useState(false);

  // TODO 왜 의존성 배열을 없애면 무조건 실행되는가?
  // useState의 setXXX를 실행시키면 컴포넌트가 재렌더링이 된다.
  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const { data: response } = await MovieApiClient.get(MovieApiRequests.fetchNowPlaying)
    const movieId = response.results[pickRandomIndex(response.results.length)].id
    const { data: movie } = await MovieApiClient.get(`/movie/${movieId}`, {
      params: { append_to_response: "videos" }
    })
    setMovie(movie)
  }

  const pickRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
  }

  const truncate = (title, n) => {
    return title?.length > 100 ? title.substr(0, n - 1) + "..." : title;
  }

  const checkHaveVideo = () => {
    if (movie.videos.results.length > 0) {
      setHaveVideos(true)
    }
  }

  if (!haveVideos) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1>{movie.title}</h1>
          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={checkHaveVideo}
            >
              Play
            </button>
            <button className="banner__button info">More Information</button>
          </div>
          <h1 className="banner__description">
            { truncate(movie.overview, 100) }
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          />
        </HomeContainer>
      </Container>
    )
  }
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
