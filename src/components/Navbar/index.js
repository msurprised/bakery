import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeSidebarDisplay} from '../../store/sidebarSlice';
import { Link } from "react-router-dom";

import style from "./Navbar.module.scss";

import { FiMenu } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

const Navbar = () => {
  const isNavAnimated = useSelector((state) => state.nav.animation);
  const sidebarDisplay = useSelector(state => state.sidebar.display);

  const dispath = useDispatch();

  return (
    <div
      className={`${style.navMain} ${
        isNavAnimated ? style.navTransparent : ""
      }`}
    >
      <nav>
        <div className={style.leftNav}>
          <img
            width={30}
            height={30}
            src={`${isNavAnimated ? `logo_light.png` : `logo.png`}`}
            alt="logo"
          />
          <p>BAKERY</p>
        </div>
        <div className={style.rightSection}>
          <div className={style.rightNav}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <BsBag />
            </li>
            <li>
              <SlUser />
            </li>
            <li className={style.mobileIcon} onClick={() => dispath(changeSidebarDisplay())}>
              {sidebarDisplay ? <HiX /> : <FiMenu />}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
