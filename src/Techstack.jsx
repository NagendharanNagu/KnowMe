import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJira } from "react-icons/si";
import "./techstack.css";

import Tooltip from "@mui/material/Tooltip";
import IconButton from '@mui/material/IconButton';



const skills = [
  {
    id: 1,
    name: "HTML5",
    placement: "top",
    icon: <FaHtml5 className="react_icons html" />,
  },
  {
    id: 2,
    name: "CSS3",
    placement: "top",
    icon: <FaCss3 className="react_icons css" />,
  },
  {
    id: 3,
    name: "JavaScript",
    placement: "top",
    icon: <IoLogoJavascript className="react_icons js" />,
  },
  {
    id: 4,
    name: "React",
    placement: "top",
    icon: <FaReact className="react_icons react" />,
  },
  {
    id: 5,
    name: "Java",
    placement: "top",
    icon: <FaJava className="react_icons java" />,
  },
  {
    id: 6,
    name: "NodeJS",
    placement: "bottom",
    icon: <FaNodeJs className="react_icons nodejs" />,
  },
  {
    id: 7,
    name: "ExpressJS",
    placement: "bottom",
    icon: <SiExpress className="react_icons express" />,
  },
  {
    id: 8,
    name: "MongoDB",
    placement: "bottom",
    icon: <SiMongodb className="react_icons mongoDB" />,
  },
  {
    id: 9,
    name: "Jira",
    placement: "bottom",
    icon: <SiJira className="react_icons jira" />,
  },
  {
    id: 10,
    name: "SQL",
    placement: "bottom",
    icon: <BsDatabase className="react_icons SQL" />,
  },
];



const Techstack = () => {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return (
    <div className="stack_container" id="techstack">
      <div className="techstack">
        <h1>My Tech Stack</h1>
        <h2>Technologies I've been working with</h2>
      </div>
      <div className="skill_container">
          {skills.map((value, id) => {
            return (
              <div key={id} className="myskills">
                <Tooltip
                  title={value.name}
                  placement={value.placement}
                  arrow
                >
                  <IconButton>
                   {value.icon}
                   </IconButton>
                </Tooltip>
              </div>
            );
          })}
      </div>
    </div> 
  );
};

export default Techstack;
