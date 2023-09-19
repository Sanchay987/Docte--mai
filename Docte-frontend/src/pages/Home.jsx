import React from "react";
import Contact from "../components/contactUs/ContactUs";
import AboutUs from "../components/about/About";
import Footer from "../components/footer/Footer";
import Front from "../components/front/Front";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Front />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;