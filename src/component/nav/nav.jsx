import React, { useState } from "react";
import Logo from "../shared/logo";
import "./Nav.css";
import { Link } from "react-router-dom";
import profile from "../../assets/images/abas.jpg"


export default function Navigation() {
  return (
    <div className="general">
      <div className="logo">
        <Logo />
        <h1>CineScope</h1>
      
        <Link to="/">
        <button>Home</button>
        </Link>

        <Link to = "/Discoverpath">
        <button>Discover</button>
        </Link>
        
        <Link to = "/Watchlistpath">
        <button>watchlist</button>
        </Link>
        
      

        <Link to = "/Registerpath"><button>Register</button>
        </Link>
       <Link to = "/loginpath"> <button>Login</button> </Link>
      
      <div className="pics">
        <button className="search">🔍</button>
        <Link to="/ProfilePath">
        <img className="profile" src={profile}  />
        </Link>
        
      </div>
      </div>
      </div>
  );
}
