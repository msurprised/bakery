import React from "react";
import style from "./Footer.module.scss";
import { SiYoutube, SiVk, SiTwitter, SiTelegram } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className={style.footerWrap}>
        <div className={style.firstSection}>
          <div className={style.logoContainer}>
            <img width={30} height={30} src="logo_light.png" alt="logo" />
            <div>BAKERY</div>
          </div>
        </div>
        <div className={style.secondSection}>
          <div className={style.navItem}>
            <a href="/">products</a>
          </div>
          <div className={style.navItem}>
            <a href="/">delivery</a>
          </div>
          <div className={style.navItem}>
            <a href="/">custom cakes</a>
          </div>
          <div className={style.navItem}>
            <a href="/">promotions and news</a>
          </div>
          <div className={style.navItem}>
            <a href="/">wholesales</a>
          </div>
        </div>
        <div className={style.thirdSection}>
          <div className={style.navItem}>
            <a href="/">about us</a>
          </div>
          <div className={style.navItem}>
            <a href="/">ecology</a>
          </div>
          <div className={style.navItem}>
            <a href="/">career</a>
          </div>
          <div className={style.navItem}>
            <a href="/">addresses and contacts</a>
          </div>
          <div className={style.navItem}>
            <a href="/">product composition</a>
          </div>
          <div className={style.navItem}>
            <a href="/">subscription rules</a>
          </div>
        </div>
        <div className={style.socials}>
          <ul>
            <li>
              <SiYoutube />
            </li>
            <li>
              <SiVk />
            </li>
            <li>
              <SiTwitter />
            </li>
            <li>
              <SiTelegram />
            </li>
          </ul>
        </div>
        <div className={style.footerPost}>
          <a href="mailto:bakery@bakery.ba">bakery@bakery.ba</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
