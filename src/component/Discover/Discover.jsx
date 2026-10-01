import React, { useState } from "react";
import Navigation from "../nav/nav"
import "../Discover/discover.css";
import movie1 from "../../assets/images/movie-1.jpg";
import movie2 from "../../assets/images/movie-2.jpg";
import movie3 from "../../assets/images/movie-3.jpg";
import movie4 from "../../assets/images/movie-4.jpg";
import movie5 from "../../assets/images/movie-5.jpg"
import movie6 from "../../assets/images/movie-6.jpg"
import movie7 from "../../assets/images/movie-7.jpg"
import movie8 from "../../assets/images/movie-8.jpg"

export default function Discover() {
  return (
    <div className="body">
      <Navigation/>
      <div>
        
      </div>
      <h1 className="top-text">Discover Movies</h1>
      <p className="Explore">Explore and find your next favorite movie.</p>
      <div className="inputs">
        <input type="text" placeholder="Search movies..." className="input_1" />
        <button className="button-1">Enter</button>
        <button className="button-1">All Genres</button>
        <button className="button-2">Popular</button>
        <button className="button-3">Release Date</button>
        
      </div>


      <div className="line-1">
        <div className="movie-sec">
          <img src={movie1} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>
        <div className="movie-sec">
          <img src={movie2} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>

        <div className="movie-sec">
          <img src={movie3} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>
        <div className="movie-sec">
          <img src={movie4} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>
      </div>


      <div className="line-1" >
          <div className="movie-sec">
          <img src={movie5} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>

          <div className="movie-sec">
          <img src={movie6} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>

          <div className="movie-sec">
          <img src={movie7} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>

          <div className="movie-sec">
          <img src={movie8} alt="" className="movies" />
          <div className="text">
            <p>Dune Part Two</p>
            <p>8.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
