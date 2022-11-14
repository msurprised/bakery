import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import VidgetItem from "../VidgetItem";
import style from "./Cart.module.scss";

const CartVidget = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartDisplay = useSelector((state) => state.cart.display);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    let amount = 0;

    for (let item of cartItems) {
      amount += item.amount;
    }
    setTotalAmount(amount);
  }, [cartItems]);

  return (
    <div
      className={`${style.mainContainer} ${
        cartDisplay ? "" : style.mainContainerhidden
      }`}
    >
      <div className={style.titleWrap}>
        <div className={style.title}>cart</div>
        <aside>{totalAmount} item</aside>
      </div>
      <div className={style.cartWrap}>
        {cartItems.length > 0 ? (
          cartItems.map((listItem, index) => (
            <VidgetItem key={index} item={listItem} />
          ))
        ) : (
          <div className={style.emptyCart}>Cart is empty</div>
        )}
      </div>
      <div className={style.totalWrap}>
        <div className={style.priceWrap}>
          <aside>total price</aside>
          <div className={style.totalPrice}>{totalPrice}₽</div>
        </div>
        <div className={style.btnSection}>
          <div className={style.cartBtn}>go to cart</div>
          <div className={style.checkBtn}>checkout</div>
        </div>
      </div>
    </div>
  );
};

export default CartVidget;
