import Navigation from "../nav/nav";
import React, { useEffect, useState } from "react";
import "../watchlist/watchlist.css";
import movie1 from "../../assets/images/img-1.jpg";
import movie2 from "../../assets/images/img-2.jpg";
import movie3 from "../../assets/images/img-3.jpg";
import movie4 from "../../assets/images/img-4.jpg";
import movie5 from "../../assets/images/img-5.jpg";
import movie6 from "../../assets/images/img-6.jpg";
import movie7 from "../../assets/images/img-7.jpg";
import movie8 from "../../assets/images/img-8.jpg";


export default function Watchlist() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const apikey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const handlefetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key={apikey}`,
        );
        const data = await response.json();
        setTrendingMovies(data.results)
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    handlefetch();
  });
  return (
    <div className="main-con">
      <Navigation/>
      <h1 className="watchlist">My Watchlist</h1>
      <p className="movies">Movies you've saved for later.</p>

      <div className="all-con">
        <div className="sec-1">
          <div className="movie-sec-1">
            <img src={movie1} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>
          <div className="movie-sec-1">
            <img src={movie2} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>

          <div className="movie-sec-1">
            <img src={movie3} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>
          <div className="movie-sec-1">
            <img src={movie4} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>
        </div>

        <div className="sec-1">
          <div className="movie-sec-1">
            <img src={movie5} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>

          <div className="movie-sec-1">
            <img src={movie6} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>

          <div className="movie-sec-1">
            <img src={movie7} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>

          <div className="movie-sec-1">
            <img src={movie8} alt="" className="movie" />
            <div className="p-tag">
              <p>Dune Part Two</p>
              <p>8.5</p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <h2>Your watchlist is empty.</h2>
          <p>Save movies to find them here.</p>
          <button className="footer-btn">Discover Movies</button>
        </div>
      </footer>
    </div>
  );
}
