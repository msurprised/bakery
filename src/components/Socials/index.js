import React from 'react'
import { SiYoutube, SiVk, SiTwitter, SiTelegram } from "react-icons/si";

import style from "./Socials.module.scss";


const Socials = () => {
  return (
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
  )
}

export default Socials