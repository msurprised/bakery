import React, { useState, useEffect } from "react";
import style from "./Ecology.module.scss";

const Ecology = () => {
  const [firstRowDisplay, setFirstRowDisplay] = useState(false);
  const [secondRowDisplay, setSecondRowDisplay] = useState(false);

  useEffect(() => {
    const rowFirst = document.getElementById("ecology_1");
    const rowSecond = document.getElementById("ecology_2");

    const showRowFirst = () => {
      if (window.pageYOffset > rowSecond.getBoundingClientRect().top + 200) {
        setSecondRowDisplay(true);
      }
    };

    const showRowSecond = () => {
      if (window.pageYOffset > rowFirst.getBoundingClientRect().top + 200) {
        setFirstRowDisplay(true);
      }
    };

    document.addEventListener("scroll", showRowFirst);
    document.addEventListener("scroll", showRowSecond);

    return () => {
      document.removeEventListener("scroll", showRowFirst);
      document.removeEventListener("scroll", showRowSecond);
    };
  }, []);

  return (
    <div className={style.ecoContainer}>
      <div className={style.contentWrap}>
        <h2>BAKERY AND ECOLOGY</h2>
        <div className={style.content}>
          <img className={style.area1} src="/img/ecology_1.jpg" alt="ecology" />
          <div
            className={` ${style.area2} ${style.contentRow} ${
              firstRowDisplay ? style.contentRowShowed : ""
            }`}
            id="ecology_1"
          >
            <h3>Reducing the use of single-use packaging</h3>
            <ul>
              <li>replaced plastic appliances with wooden ones</li>
              <li>sell reusable straws, bottles bags</li>
              <li>Replace plastic straws with paper ones</li>
              <li>we offer guests free drinking water</li>
            </ul>
          </div>
          <div
            className={`${style.area3} ${style.contentRow} ${
              secondRowDisplay ? style.contentRowShowed : ""
            }`}
            id="ecology_2"
          >
            <h3>The second life of things</h3>
            <ul>
              <li>glasses from wine bottles</li>
              <li>Use of coffee grounds</li>
              <li>separate waste collection</li>
              <li>offer guests to buy reusable straws</li>
            </ul>
          </div>
          <img className={style.area4} src="/img/ecology_2.jpg" alt="ecology" />
        </div>
      </div>
    </div>
  );
};

export default Ecology;
