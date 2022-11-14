import React from "react";

import style from "./Shop.module.scss";
import Catalog from "../../components/Catalog";
import CartVidget from "../../components/CartVidget";

const Shop = () => {
  return <div className={style.all}>
    <Catalog />
  </div>;
};

export default Shop;
