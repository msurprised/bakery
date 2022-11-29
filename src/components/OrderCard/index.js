import React from "react";
import style from "./Order.module.scss";

const OrderCard = (props) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.orderSection}>
        <aside>order number:</aside> {props.order.delivery.num}
      </div>
      <div className={style.infoWrap}>
        <div className={style.orderSection}>
          <aside>date:</aside>
          {props.order.delivery.day}
        </div>
        <div className={style.orderSection}>
          <aside>total price:</aside>
          {props.order.delivery.totalPrice}₽
        </div>
        <div className={style.orderSection}>
          <aside>bakery:</aside>
          {props.order.delivery.info.adress}
        </div>
      </div>

      <div className={style.listWrap}>
        <ul>
          {props.order.delivery.order.map((item, index) => (
            <li key={index}>
              <span>{item[Object.keys(item)]}</span>
              {Object.keys(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;
