import React from "react";
import "./Hero.css";
import heroImg from "../../assets/pic4.png";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="left-hero">
        <h1>
          Welcome to <a>DIMAM</a>
        </h1>
        <p>Pharmagro Company LTD</p>
        <button>Explore</button>
      </div>
      <div className="right-hero">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
