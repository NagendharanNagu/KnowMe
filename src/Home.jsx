import React from "react";
import Nagu from "./assets/Nagu2.png";
import "./home.css";
const Home = () => {
  return (
    <div className="home_container" id="home">
      <div className="Intro">
        <div>
          <span className="name">Hi</span>
          <span className="emoji">👋,</span>
        </div>
        <div>My Name is</div>
        <div className="name">Nagendharan Shanmugam</div>
        <div>I build things for web</div>
      </div>
      <div className="image_container">
        <img src={Nagu} alt="My_Photo" />
      </div>
    </div>
  );
};

export default Home;
