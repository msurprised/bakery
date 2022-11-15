import React from "react";
import {
  deleteItemFromCart,
  additemToCart,
  deleteItemFromVidget,
} from "../../store/cartSlice";
import { useDispatch } from "react-redux";

import style from "./CartItem.module.scss";

const CartItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={style.mainContainer}>
      <div
        className={style.deleteBtn}
        onClick={() => dispatch(deleteItemFromVidget(props.item))}
      >
        ╳
      </div>
      <div className={style.imgWrap}>
        <img src={props.item.url} alt={props.item.name} />
      </div>
      <div className={style.infoWrap}>
        <div className={style.title}>{props.item.name}</div>
        <div className={style.infoRow}>
          <div className={style.price}>
            {props.item.amount * props.item.price}
            <aside>₽</aside>
          </div>
          <div className={style.amountWrap}>
            <div
              className={style.amountBtn}
              onClick={() => dispatch(deleteItemFromCart(props.item))}
            >
              -
            </div>
            {props.item.amount}
            <div
              className={style.amountBtn}
              onClick={() => dispatch(additemToCart(props.item))}
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
