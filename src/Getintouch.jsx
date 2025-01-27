import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './getintouch.css'

const Getintouch = () => {
  return (
    <div className="contacts_container" id="getintouch">
      <div className="tagline">
        <p>{`{From concept to completion, full-stack expertise!}`}</p>
      </div>
      <div className="ph_number">
        <p>9790313235</p>
      </div>
      <div className="email">
        <p>nagendharan.shanmugam@gmail.com</p>
      </div>
      <div className="icon_container">
        <div className="react_icons github">
          <a href="https://github.com/NagendharanNagu?tab=repositories" target="_blank"><FaGithub/></a>
        </div>
        <div className="react_icons linkedin">
          <a href="https://www.linkedin.com/in/nagendharan-shanmugam/" target="_blank"><FaLinkedin/></a>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
