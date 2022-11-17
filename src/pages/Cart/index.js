import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

import style from "./Cart.module.scss";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(cartItems);

  return (
    <div className={style.mainContainer}>
      <div className={style.contentWrap}>
        <div className={style.cartWrap}>
          <div className={style.amountWrap}>
            <h1>cart</h1>
            <div className={style.itemsWrap}>
              {cartItems.length > 0 ? (
                cartItems.map((listItem, index) => (
                  <CartItem key={index} item={listItem} />
                ))
              ) : (
                <div className={style.emptyCartWrap}>
                  <div>Cart is empty</div>
                  <Link to="/shop" className={style.goToPrev}>
                    back to catalog
                  </Link>
                </div>
              )}
            </div>
            <div className={style.inputWrap}>
              <input placeholder="promocode" />
              <button>apply</button>
            </div>
          </div>
          <div className={style.totalContainer}>
            <div className={style.totalTitle}>total</div>
            <div className={style.priceWrap}>
              <aside>order price</aside>
              <div className={style.price}>
                {totalPrice}
                <aside>₽</aside>
              </div>
            </div>
            <div className={style.priceWrap}>
              <aside>total price</aside>
              <div className={style.price}>
                {totalPrice}
                <aside>₽</aside>
              </div>
            </div>
            <Link to="/order">
              <button>checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
