import React from "react";
import style from "./Footer.module.scss";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
import Socials from "../Socials";

const Footer = () => {

  const goUp = () => {
    animateScroll.scrollToTop()
  }

  return (
    <footer>
      <div className={style.footerWrap}>
        <div className={style.firstSection}>
            <div className={style.logoContainer} onClick={goUp}>
              <img width={30} height={30} src="logo_light.png" alt="logo" />
              <div>BAKERY</div>
            </div>
        </div>
        <div className={style.secondSection}>
          <div className={style.navItem}>
            <Link to="/">products</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">delivery</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">custom cakes</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">promotions and news</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">wholesales</Link>
          </div>
        </div>
        <div className={style.thirdSection}>
          <div className={style.navItem}>
            <Link to="/">about us</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">ecology</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">career</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">addresses and contacts</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">product composition</Link>
          </div>
          <div className={style.navItem}>
            <Link to="/">subscription rules</Link>
          </div>
        </div>

        <Socials />

        <div className={style.footerPost}>
          <a href="mailto:bakery@bakery.ba">bakery@bakery.ba</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
