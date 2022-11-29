import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { toggleCartDisplay } from "../../store/cartSlice";

import VidgetItem from "../VidgetItem";
import style from "./Cart.module.scss";

const CartVidget = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const cartItems = useSelector((state) => state.cart.order.cartItems);
  const cartDisplay = useSelector((state) => state.cart.display);
  const totalPrice = useSelector((state) => state.cart.order.totalPrice);
  const dispatch = useDispatch();
  const vidgetRef = useRef(null);

  const handleOutClick = (event) => {
    if (!vidgetRef.current.contains(event.target)) {
      dispatch(toggleCartDisplay());
    }
  };

  useEffect(() => {
    if (cartDisplay) {
      document.addEventListener("click", handleOutClick, { capture: true });
    }

    return () => {
      document.removeEventListener("click", handleOutClick, { capture: true });
    };
  }, []);

  
  useEffect(() => {
    let amount = 0;

    for (let item of cartItems) {
      amount += item.amount;
    }
    setTotalAmount(amount);
  }, [cartItems]);

  return (
    <div
      className={style.mainContainer}
      ref={vidgetRef}
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
          <Link  to ='/cart' className={style.cartBtn} onClick={() => dispatch(toggleCartDisplay())}>go to cart</Link>
          <Link  to ='/order' className={style.checkBtn} onClick={() => dispatch(toggleCartDisplay())}>checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartVidget;
