import React, { useState } from "react";
import Nav from './Nav'
import Home from './Home'
import Techstack from './Techstack'
import MyWork from "./MyWork"
import Getintouch from './Getintouch'
import Footer from './Footer'
import './app.css'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


const App = () => {
  // const[isDarkMode, setIsDarkMode]=useState(true)
  // const[light, setLight]=useState(true)

  // const toggleMode = ()=>{
  //   setIsDarkMode((prevMode) => !prevMode);
  // }
  // const toggleLight = ()=>{
  //   setLight((prevLight) => !prevLight);
  // }
  // app ${isDarkMode? 'light':'dark'}
  return (
    <div className={``} >
      {/* <div onClick={toggleMode} className="toggle">
        <button onClick={toggleLight} className={`button ${light? 'lightmode':'darkmode'}`}>{light? <IoMoonOutline />: <IoSunnyOutline />}</button>
      </div> */}
        <Nav/>
        <Home/>
        <Techstack/>
        <MyWork/>
        <Getintouch/>
        <Footer/>
    </div>
  )
}

export default App