import React from "react";
import Achievements from "../components/Achievements";
import Banner from "../components/Banner";
import Ecology from "../components/Ecology";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wholesale from "../components/Wholesale";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Achievements />
      <Ecology />
      <Wholesale />
      <Footer />
    </div>
  );
};

export default Home;
