import React from "react";
import image from "../../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="front-img">
            <img
              src={image}
              alt="front"
            />
          </div>
          <div className="front-content">
            <p>    
Welcome to our user-friendly online doctor-patient appointment booking platform. We're dedicated to simplifying healthcare access. 
Our platform streamlines the process of finding and booking appointments with trusted healthcare professionals. Search for doctors
 by specialty, location, and availability, then book with ease. We provide comprehensive profiles for each practitioner, ensuring 
 informed choices. Say goodbye to long waits and phone calls.<br/>
  – our platform offers convenient scheduling and appointment reminders. 
 Your health is our top priority. Join us today to experience a more accessible and efficient healthcare appointment booking system.
  Your well-being starts here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;