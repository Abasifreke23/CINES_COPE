import React, {useState} from "react";
 import Register from "./component/Auth/register"
 import Login_detail from "./component/Auth/login"
 import Discover from "./component/Discover/Discover";
 import Watchlist from "./component/watchlist/Watchlist"
 import {Routes, Route} from "react-router-dom"
 import Home from "./component/Home/home"
 import Back_Page from "./component/BACK_PAGE/back"
 import Profile from "./component/profile/profile";


function App() {


  return (
    

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/loginpath" element={<Login_detail/>}/>
      <Route path="/Registerpath" element={<Register/>}/>
      <Route path="/Discoverpath" element={<Discover/>}/>
      <Route path="/Watchlistpath" element={<Watchlist/>}/>
      {/* <Route path="/movieDetails/:id" element={<Back_Page/>}/> */}
      <Route path="/movie/:id" element={<Back_Page />} />
      <Route path="/ProfilePath" element = {<Profile />}/>
    </Routes>
    
  )
}

export default App
