import React from "react";
import image from "../../images/front.png";
import "./front.css";

const Hero = () => {
  return (
    <section className="front">
      <div className="front-content">
        <h1>
        Your health <br />
        is our priority Our Responsibility
        </h1>
        <p>
        Skip the Waiting Room is the best way to find walk in clinics in your area.
We have up to date schedules, contact information, & let you book appointments online.
        </p>
      </div>
      <div className="front-img">
        <img
          src={image}
          alt="front"
        />
      </div>
    </section>
  );
};

export default Hero;