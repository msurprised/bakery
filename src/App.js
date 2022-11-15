import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className='mainContainer'>
      <Navbar />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
