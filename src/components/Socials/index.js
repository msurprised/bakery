import React from "react";
import { SiYoutube, SiVk, SiTwitter, SiTelegram } from "react-icons/si";

import style from "./Socials.module.scss";

const Socials = () => {
  return (
    <div className={style.socials}>
      <ul>
        <li>
          <a target='_blank' href="https://www.youtube.com/">
            <SiYoutube />
          </a>
        </li>
        <li>
          <a target='_blank' href="https://vk.com/">
            <SiVk />
          </a>
        </li>
        <li>
          <a target='_blank' href="https://twitter.com/">
            <SiTwitter />
          </a>
        </li>
        <li>
          <a target='_blank' href="https://telegram.org/">
            <SiTelegram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
