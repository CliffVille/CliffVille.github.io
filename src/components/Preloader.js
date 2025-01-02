import React from "react";
import "../Preloader.css"; 
import PreImg from "../assets/clffloader.gif";

const Preloader = () => {
  return (
    <div id="preloader">
      <img
        src={PreImg}
        alt="Preloader"
        className="preloader-img"
      />
    </div>
  );
};

export default Preloader;