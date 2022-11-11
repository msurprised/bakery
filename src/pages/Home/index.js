import React, { useEffect } from "react";

import Achievements from "../../components/Achievements";
import Banner from "../../components/Banner";
import Ecology from "../../components/Ecology";
import Wholesale from "../../components/Wholesale";

import { useDispatch } from "react-redux";
import { setNavTransparent, setNavOpaque } from "../../store/navSlice";

const Home = () => {
  const dispatch = useDispatch();

  const makeNavTransparent = () => {
    dispatch(setNavTransparent());
  };

  const makeNavOpaque = () => {
    dispatch(setNavOpaque());
  };

  const checkScroll = () => {
    if (window.pageYOffset > 0) {
      makeNavOpaque();
    } else {
      makeNavTransparent();
    }
  };

  useEffect(() => {
    makeNavTransparent();
    document.addEventListener("scroll", checkScroll);

    return () => {
      document.removeEventListener("scroll", checkScroll);
      makeNavOpaque();
    };
  }, []);

  return (
    <div>
      <Banner />
      <Achievements />
      <Ecology />
      <Wholesale />
    </div>
  );
};

export default Home;
