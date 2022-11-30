import React, { useEffect } from "react";
import OrderCard from "../../components/OrderCard";
import style from "./History.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, clearOrders } from "../../store/authorizationSlice";

const History = () => {
  const userId = useSelector((state) => state.authorization.user.id);
  const orderList = useSelector((state) => state.authorization.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders(userId));

    return () => {
      dispatch(clearOrders());
    };
  }, [userId]);

  return (
    <div className={style.mainContainer}>
      <div className={style.contentWrap}>
        <h1>order history: </h1>
        <div className={`${userId ? style.ordersWrap : style.noWrap}`}>
          {userId && orderList.length === 0 ? (
            <div>you haven't ordered anything yet</div>
          ) : null}

          {userId ? (
            orderList.map((order, index) => (
              <OrderCard key={index} order={order} />
            ))
          ) : (
            <div>log in to view order history</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
