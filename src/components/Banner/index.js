import React, { useState } from "react";
import style from "./Banner.module.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  const [isArrowShowed, setIsArrowShowed] = useState(false);

  const changeArrowDisplay = () => {
    setIsArrowShowed(!isArrowShowed);
  };
  return (
    <Link to="/shop">
      <section className={style.bannerConainer}>
        <div className={style.bgContainer}>
          <video src="/video/bg_video1.mp4" autoPlay loop muted />
        </div>
        <div className={style.shadow}></div>
        <div className={style.bannerInfo}>
          <div
            className={style.bannerTitle}
            onMouseOver={changeArrowDisplay}
            onMouseOut={changeArrowDisplay}
          >
            <div>Visit our shop</div>
            <div
              className={`${
                isArrowShowed ? style.bannerPopupTrue : style.bannerPopupFalse
              }`}
            >
              →
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Banner;
