import React, { useState } from "react";
import style from "./Navbar.module.scss";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
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
      className={`${
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
          <ul >
            <li>Home</li>
            <li>About us</li>
            <li>Shop</li>
          </ul>
          </div>
          <ul>
            <li>
              <img
                width={25}
                height={25}
                src={`${isNavScrolled ? `/img/bag.png` : `img/bag_light.png`}`}
                alt=""
              />
            </li>
            <li>
              <img
                width={25}
                height={25}
                src={`${
                  isNavScrolled ? `/img/user.png` : `img/user_light.png`
                }`}
                alt=""
              />
            </li>
            <li className={style.mobileIcon}>
              <FiMenu />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
