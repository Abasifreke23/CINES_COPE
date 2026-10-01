
import { useEffect, useState } from "react";
import "../BACK_PAGE/Back.css";
import { useParams } from "react-router-dom";
import Navigation from "../nav/nav";

export default function Back_Page() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );

        const data = await response.json();

        console.log(data);

        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails();
  }, [id, apiKey]);

  const addToWatchList = () => {
    localStorage.setItem(
      "movie",
      JSON.stringify(movieDetails)
    );
  };

  // Wait for the movie data to load
  if (!movieDetails) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Navigation/>
      <div className="seperate">

        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>

        <div className="knight-page">

          <h2>{movieDetails.title}</h2>

          <div className="details">

            <div className="PEE">
              <p>{movieDetails.vote_average?.toFixed(1)}</p>
            </div>

            <div className="PEE">
              <p>{movieDetails.release_date?.slice(0, 4)}</p>
            </div>

            <div className="PEE">
              <p>
                {movieDetails.runtime
                  ? `${Math.floor(movieDetails.runtime / 60)}h ${
                      movieDetails.runtime % 60
                    }m`
                  : "N/A"}
              </p>
            </div>

          </div>

          <div>
            {movieDetails.genres?.map((genre) => (
              <button className="ACD" key={genre.id}>
                {genre.name}
              </button>
            ))}
          </div>

          <p>{movieDetails.overview}</p>

          <button
            className="addlist"
            onClick={addToWatchList}
          >
            + Add to Watchlist
          </button>

          <button className="watch_list">
            ▶️ Watch Trailer
          </button>

          <div className="over-view">

            <div>
              <h3>Overview</h3>

              <p>Release Date</p>
              <p>{movieDetails.release_date}</p>

              <p>Status</p>
              <p>{movieDetails.status}</p>
            </div>

            <div>
              <p>Budget</p>
              <p>
                ${movieDetails.budget?.toLocaleString()}
              </p>

              <p>Revenue</p>
              <p>
                ${movieDetails.revenue?.toLocaleString()}
              </p>
            </div>

            <div>
              <p>Original Language</p>
              <p>{movieDetails.original_language}</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );}
