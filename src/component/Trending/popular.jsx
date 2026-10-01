
import React, { useEffect, useState } from "react";
import "./popular.css";
import { Link } from "react-router-dom";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [seeAll, setSeeAll] = useState (false)

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );

        const data = await response.json();

        console.log(data);
        setPopularMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    handleFetch();
  }, []);

  return (
    <div>
      <div className="pop">
        <h2 className="trend">Popular Movies</h2>
        <h2 className="see">See all</h2>
      </div>          

      <div className="popular_split">
        {popularMovies.map((movie) => (
          <div key={movie.id} className="movie-card">

            <Link to={`/movie/${movie.id}`}>
              <img
                className="api_key"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>

            <p>{movie.title}</p>
            <p>{movie.release_date}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
