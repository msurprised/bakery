import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSidebarDisplay } from "../../store/sidebarSlice";
import { toggleCartDisplay } from "../../store/cartSlice";
import { Link } from "react-router-dom";

import CartVidget from "../CartVidget";
import style from "./Navbar.module.scss";

import { FiMenu } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

const Navbar = () => {
  const isNavAnimated = useSelector((state) => state.nav.animation);
  const sidebarDisplay = useSelector((state) => state.sidebar.display);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isVidgetShowed = useSelector(state => state.cart.display);

  const dispath = useDispatch();

  return (
    <div
      className={`${style.navMain} ${
        isNavAnimated ? style.navTransparent : ""
      }`}
    >
      <nav>
        {isVidgetShowed ? <CartVidget /> : null}
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
          <ul className={style.navIcons}>
            <li className={style.price}
            onClick={() => dispath(toggleCartDisplay())}>
              {totalPrice > 0 ? <div className={`${style.totalPrice} ${isVidgetShowed ? style.totalPriceHidden : ''}`}>{totalPrice}₽</div> : null }
              
              <div className={`${totalPrice > 0 ? style.bagFilled : ''}`}><BsBag /></div>
            </li>
            <li>
              <SlUser />
            </li>
            <li
              className={style.mobileIcon}
              onClick={() => dispath(changeSidebarDisplay())}
            >
              {sidebarDisplay ? <HiX /> : <FiMenu />}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
