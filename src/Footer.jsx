import React from "react";
import './footer.css'

const Footer = () => {
  return (
   <div>
    <hr className="divider"/>
     <div className="footer_Container">
      <div className="details">
        <p><a href="#home">Home</a></p>
        <p><a href="#techstack">Tech Stack</a></p>
        <p><a href="#project">Projects</a></p>
        <p><a href="#getintouch">Contacts</a></p>
      </div>
      <div className="by">
        <p><strong>Designed and built by <span>Nagendharan Shanmugam</span> with <span>Love</span> and <span>Coffee</span></strong></p>
      </div>
    </div>
   </div>
  );
};
export default Footer;
