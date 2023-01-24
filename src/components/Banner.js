import React, { useEffect, useState } from 'react';
import '../css/Banner.css';
import axios from '../api/axios';
import requests from '../api/Request';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (text, len) => {
    const retText = text?.length > len ? `${text.substr(0, len - 1)} ...` : text;
    return retText;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button type="button" className="banner__button">Play</button>
          <button type="button" className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
