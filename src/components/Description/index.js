import React, { useEffect, useState, createRef } from "react";
import style from "./Description.module.scss";
import { toggleDescriptionDisplay } from "../../store/descriptionSlice";
import { additemToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const Description = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const item = useSelector((state) => state.description.item);
  const cartitems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const ref = createRef();

  const handleOutClick = (event) => {
    if (!ref.current.contains(event.target)) {
      dispatch(toggleDescriptionDisplay());
    }
  };

  useEffect(() => {
    cartitems.forEach((element) => {
      if (element.id === item.id) {
        setAddedToCart(true);
      }
    });
  }, [cartitems]);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleOutClick);
    }, 1000);

    return () => {
      document.removeEventListener("click", handleOutClick);
      dispatch(toggleDescriptionDisplay());
    };
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.contentWrap} ref={ref}>
        <div
          className={style.closeBtn}
          onClick={() => dispatch(toggleDescriptionDisplay())}
        >
          ╳
        </div>
        <div className={style.imgSection}>
          <div className={style.weight}>125g</div>
          <img src={item.url} alt="product" />
        </div>
        <div className={style.infoSection}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div
            className={`${style.cartBtn} ${
              addedToCart ? style.cartBtnAdded : ""
            }`}
            onClick={!addedToCart ? () => dispatch(additemToCart(item)) : null}
          >
            {addedToCart ? (
              <Link to="/cart">added to cart ✓</Link>
            ) : (
              `${item.price}₽ add to cart`
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
