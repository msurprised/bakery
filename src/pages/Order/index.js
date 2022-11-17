import React from "react";
import OrderForm from "../../components/OrderForm";

import style from "./Order.module.scss";

const Order = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.contentWrap}>
        <div className={style.orderForm}>
          <h1>ordering</h1>
          <p>
            Orders are processed from 9:00 to 20:00. For questions <br /> you
            can contact by phone{" "}
            <a href="tel:+00000000000">+0 (000) 000-00-00</a> from 9:00 to
            21:00.
          </p>
          <OrderForm />
        </div>
      </div>
    </div>
  );
};

export default Order;
