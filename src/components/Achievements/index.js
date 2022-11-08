import React from "react";
import style from "./Achievements.module.scss";

const Achievements = () => {
  return (
    <div className={style.achievContainer}>
      <div className={style.achievContent}>
        <div className={style.achievItem}>
          <div className={style.achievTitle}>
            <div className={style.num}>+100</div>
            bakeries
          </div>
          <div className={style.achievInfo}>In St-Petersburg and Moscow</div>
        </div>
        <div className={style.achievItem}>
          <div className={style.achievTitle}>
            <div className={style.num}>8</div>
            thousand
          </div>
          <div className={style.achievInfo}>
            cups of coffee are made by our baristas a day
          </div>
        </div>
        <div className={style.achievItem}>
          <div className={style.achievTitle}>
            <div className={style.num}>4,2</div>
            thousand
          </div>
          <div className={style.achievInfo}>croissants were sold that day</div>
        </div>
        <div className={style.achievItem}>
          <div className={style.achievTitle}>
            <div className={style.num}>900</div>
            thousand
          </div>
          <div className={style.achievInfo}>croissants were sold this year</div>
        </div>
        <div className={style.achievItem}>
          <div className={style.achievTitle}>
            <div className={style.num}>23</div>
            years
          </div>
          <div className={style.achievInfo}>
            we delight guests with our products
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
