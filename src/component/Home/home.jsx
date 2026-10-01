import React, { useState } from "react";
import Navigation from "../nav/nav";
import "../Home/Home.css";
import Trends from "../Trending/Trend";

import Popular from "../Trending/popular";

export default function HomePage() {
   
  return (
    <div className="main-cover">
    <div className="background-div"
    // style={{
    //       backgroundImage: movie
    //         ? `url( https://api.themoviedb.org/3/movie/popular?api_key=${apiKey})`
    //         : "none",
    //     }}
    >
        <Navigation />
      <div className="main">
        
          <div className="feature-div">
            <p className="feature">FEATURED</p>
            <h1 className="interstellar">Interstellar</h1>

            <div className="p-tag">
              <p className="p">8.7</p>
              <p className="p">2014</p>
              <p className="p">Sci-Fi · Drama</p>
            </div>
            <p className="Trailer">
              A team of explorers travel through a wormhole in space in an
              attempt to ensure <br /> humanity's survival.
            </p>
          
        </div>
        <button className="Trailer">Watch Trailer</button>
        <button className="Watchlist">+ Watchlist</button>
      </div>
    </div>
      <Trends />
      <Popular />
    </div>
  );
}
