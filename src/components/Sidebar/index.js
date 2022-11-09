import React from "react";
import Socials from "../Socials";
import { Link } from "react-router-dom";

import style from "./Sidebar.module.scss";

//contentHidden

const Sidebar = (props) => {
  return (
    <aside className={`${style.barContainer} ${props.sidebarDisplay ? '' : style.barHidden}`}>
      <div className={`${style.contentWrap} ${props.sidebarDisplay ? '' : style.contentHidden}`}>
        <nav className={style.topNav}>
          <ul>
            <li onClick={props.toggle}><Link to='/'>Home</Link></li>
            <li onClick={props.toggle}><Link to='/about'>About us</Link></li>
            <li onClick={props.toggle}><Link to='/shop'>Shop</Link></li>
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
