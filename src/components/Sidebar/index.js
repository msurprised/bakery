import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSidebarDisplay } from "../../store/sidebarSlice";

import { Link } from "react-router-dom";

import Socials from "../Socials";

import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const sidebarDisplay = useSelector((state) => state.sidebar.display);
  const dispath = useDispatch();

  return (
    <aside
      className={`${style.barContainer} ${
        sidebarDisplay ? "" : style.barHidden
      }`}
    >
      <div
        className={`${style.contentWrap} ${
          sidebarDisplay ? "" : style.contentHidden
        }`}
      >
        <nav className={style.topNav}>
          <ul>
            <Link to="/">
              <li onClick={() => dispath(changeSidebarDisplay())}>Home</li>
            </Link>
            <Link to="/shop">
              <li onClick={() => dispath(changeSidebarDisplay())}>Shop</li>
            </Link>
          </ul>
        </nav>
        <div className={style.bottomInfo}>
          <div>
            <Socials />
          </div>
          <div>
            <a href="mailto:bakery@bakery.ba">bakery@bakery.ba</a>
          </div>
          <div>
            <a href="tel:+00000000000">+0 (000) 000 00 00</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
