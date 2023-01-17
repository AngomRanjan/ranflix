import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../api/axios';
import '../css/Row.css';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      <h2>
        {title}
      </h2>
      <div className="row__posters">
        {movies.map((movie) => (
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            />
        ))}
      </div>
    </div>
  );
};

Row.defaultProps = {
  isLargeRow: false,
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
};

export default Row;
