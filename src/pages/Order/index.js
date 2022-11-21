import React from "react";
import OrderForm from "../../components/OrderForm";
import { useSelector, useDispatch } from "react-redux";
import VidgetItem from "../../components/VidgetItem";
import { addCutlery, reduceCutlery } from "../../store/cartSlice";
import {Link} from 'react-router-dom'

import style from "./Order.module.scss";

const Order = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cutlery = useSelector((state) => state.cart.cutlery);
  const dispatch = useDispatch();

  return (
    <div className={style.mainContainer}>
      {cartItems.length > 0 ? (
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
          <div className={style.items}>
            <h2>your order:</h2>
            <div className={style.cartContainer}>
              {cartItems.map((item, index) => (
                <VidgetItem item={item} key={index} />
              ))}
            </div>
            <div className={style.cutleryWrap}>
              <aside>cutlery:</aside>
              <div className={style.amount}>
                <div
                  className={style.amountBtn}
                  onClick={() => dispatch(reduceCutlery())}
                >
                  -
                </div>
                {cutlery}
                <div
                  className={style.amountBtn}
                  onClick={() => dispatch(addCutlery())}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.emptyBox}>
          <h1>cart</h1>
          <p>nothing here yet...</p>
          <p>
            cookies, bread, cakes, puffs and much more are waiting for you in
            the catalog
          </p>
          <Link to='/shop'><div className={style.catalogRef}>Explore</div></Link>
        </div>
      )}
    </div>
  );
};

export default Order;
