import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Authorization from "./components/Authorization";
import History from "./pages/History";

const App = () => {
  const authorizationDisplay = useSelector(
    (state) => state.authorization.formDisplay
  );
  const userEntered = useSelector(
    (state) => state.authorization.entered
  );

  
  return (
    <div className="mainContainer">
      <Navbar />
      <Sidebar />
      {authorizationDisplay && !userEntered ? <Authorization /> : null}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
