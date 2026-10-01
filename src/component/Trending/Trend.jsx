
import React, { useEffect, useState } from "react";
import "./trend.css";
import { Link } from "react-router-dom";

export default function Trends() {
  const [Trendingnow, setTrendingNow] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
const[Loading ,setLoading] = useState(true)
const [error, setError] = useState(false);
  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const handlefetch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}`
        );

        const data = await response.json();

        setTrendingNow(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
          setError(true)
      } setLoading(false)
      
      
    };

    handlefetch();
  }, []);

  const seeAllMovies = seeAll
    ? Trendingnow
    : Trendingnow.slice(0, 5);

    if (Loading){
      return("please wait")
    }
    if(error){
      return("not found")
    }


  return (
    <div>
      <div className="trend-all">
        <h2 className="trend">Trending Now</h2>
          
        <h2
          className="see"
          onClick={() => setSeeAll(!seeAll)}
        >
          {seeAll ? "See Less" : "See All"}
        </h2>
      </div>

      <div className="img-split">
        {seeAllMovies.map((movie) => {
          return (
            <div className="div_api" key={movie.id}>

              <Link to = {`/movie/${movie.id}`}>
              <img
                className="api"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              </Link>
              <p>{movie.title}</p>
              <p>{movie.release_date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

