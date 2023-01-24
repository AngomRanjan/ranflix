import React from 'react';
import requests from '../api/Request';
import '../css/Home.css';
import Banner from './Banner';
import Nav from './Nav';
import Row from './Row';

const Home = () => (
  <div className="home">
    <Nav />
    <Banner />
    <Row title="Ranflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
  </div>
);

export default Home;
