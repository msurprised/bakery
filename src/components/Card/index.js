import React, { useState, useEffect } from "react";
import style from "./Card.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { additemToCart } from "../../store/cartSlice";

import { BsBagPlus, BsBagCheck } from "react-icons/bs";

const Card = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addItemToCartStorage = () => {
    dispatch(additemToCart(props.item));
  };

  useEffect(() => {
    for (let cartItem of cartItems) {
      if (cartItem.id === props.item.id) {
        setIsOrdered(true);
        return
      } else {
        setIsOrdered(false);
      }
    }
  }, [props.item, cartItems]);

  return (
    <div className={style.mainContainer}>
      <div className={style.description}>
        {props.item.description}
      </div>
      <div className={style.imgWrap}>
        <img src={props.item.url} alt={props.item.name} />
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardName}>{props.item.name}</div>
        <div className={style.cardPrice}>
          <div className={style.priceValue}>{props.item.price}</div>
          <div className={style.priceСurrency}>₽</div>
        </div>
      </div>
      <div
        className={`${style.addBtn} ${isOrdered ? style.addBtnOrdered : ""}`}
        onClick={addItemToCartStorage}
      >
        {isOrdered ? <BsBagCheck /> : <BsBagPlus />}
      </div>
    </div>
  );
};

export default Card;
