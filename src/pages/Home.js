import React, {useState} from "react";

import Achievements from "../components/Achievements";
import Banner from "../components/Banner";
import Ecology from "../components/Ecology";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Wholesale from "../components/Wholesale";

const Home = () => {
  const [sidebarDisplay, setSidebarDisplay] = useState(false);
  
  const toggle = () => {
    setSidebarDisplay(!sidebarDisplay);
  }

  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar sidebarDisplay={sidebarDisplay} toggle={toggle}/>
      <Banner />
      <Achievements />
      <Ecology />
      <Wholesale />
      <Footer />
    </div>
  );
};

export default Home;
