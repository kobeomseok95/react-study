import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import MovieApiRequests from "../../api/MovieApiRequests";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <Row
        title="Netflix Originals"
        id="NO"
        fetchURL={MovieApiRequests.fetchNetflixOriginals}
        isLargeLow
      />
      <Row
        title="Trending Now"
        id="TN"
        fetchURL={MovieApiRequests.fetchTrending}
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchURL={MovieApiRequests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        id="AM"
        fetchURL={MovieApiRequests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchURL={MovieApiRequests.fetchComedyMovies}
      />
    </div>
  );
};

export default MainPage;
