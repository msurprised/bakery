import React from "react";
import { deleteItemFromVidget } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

import style from "./VidgetItem.module.scss";

const VidgetItem = (props) => {
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
        <div className={style.info}>
          <aside>amount: </aside>
          {props.item.amount}
        </div>
        <div className={style.price}>
          {props.item.amount * props.item.price}
          <aside>₽</aside>
        </div>
      </div>
    </div>
  );
};

export default VidgetItem;
