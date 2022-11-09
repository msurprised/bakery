import React, { useState } from "react";
import style from "./Navbar.module.scss";
import { FiMenu } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

const Navbar = (props) => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  const checkScroll = () => {
    if (window.pageYOffset > 5) {
      setIsNavScrolled(true);
    } else {
      setIsNavScrolled(false);
    }
  };

  document.addEventListener("scroll", checkScroll);

  return (
    <div
      className={`${style.navMain} ${
        isNavScrolled ? style.navContainerScroll : style.navContainer
      }`}
    >
      <nav>
        <div className={style.leftNav}>
          <img
            width={30}
            height={30}
            src={`${isNavScrolled ? `logo.png` : `logo_light.png`}`}
            alt="logo"
          />
          <p>BAKERY</p>
        </div>
        <div className={style.rightSection}>
          <div className={style.rightNav}>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Shop</li>
            </ul>
          </div>
          <ul>
            <li>
              <BsBag />
            </li>
            <li>
              <SlUser/>
            </li>
            <li className={style.mobileIcon} onClick={props.toggle}>
              <FiMenu />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
