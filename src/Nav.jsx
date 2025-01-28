import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";
// import { IoSunnyOutline } from "react-icons/io5";
// import { IoMoonOutline } from "react-icons/io5";
// import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import './nav.css'

const Nav = ({toggleMode,toggleLight,light}) => {
  
  return (
    <div className= {`nav_container ${light ? 'nav_container_lightbackground' : 'nav_container_darkbackground'}`}>
        <div className="nav_left">
            <h1>{`{Step Into My Dev Space}`}</h1>
        </div>
      <div className="name_container">
        <div><a href="#home">Start Here</a></div>
        <div><a href="#techstack">Tech Stack</a></div>
        <div><a href="#project">Projects</a></div>
        <div><a href="#getintouch">Reach Me</a></div>
        <div>
          <a href="https://github.com/NagendharanNagu?tab=repositories" target="_blank"><FaGithub className="react_icons github" /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nagendharan-shanmugam/" target="_blank"><FaLinkedin className="react_icons linkedin" /></a>
        </div>
        <div>
        <a href="./src/assets/Nagendharan Shanmugam- Resume updated.pdf" download><BsCloudDownload className="react_icons "/></a>
        </div>
        <div onClick={toggleMode} className="toggle">
            <a onClick={toggleLight}><FaLightbulb className="react_icons bulb"/> </a>
        </div>
      </div>   
    </div>
  );
};

export default Nav;
