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
  const[isDarkMode, setIsDarkMode]=useState(true)
  const[light, setLight]=useState(true)

  const toggleMode = ()=>{
    setIsDarkMode((prevMode) => !prevMode);
  }
  const toggleLight = ()=>{
    setLight((prevLight) => !prevLight);
  }
  
  return (
    <div className={`app ${isDarkMode? 'light':'dark'}`} >
        <Nav toggleMode={toggleMode} toggleLight={toggleLight} light={light} />
        <Home/>
        <Techstack/>
        <MyWork/>
        {/* <Getintouch/> */}
        <Footer/>
    </div>
  )
}

export default App