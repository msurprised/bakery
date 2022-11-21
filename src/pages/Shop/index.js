import React from "react";
import { useSelector } from "react-redux";

import style from "./Shop.module.scss";
import Catalog from "../../components/Catalog";
import Description from "../../components/Description";

const Shop = () => {
  const item = useSelector((state) => state.description.item);

  return (
    <div className={style.all}>
      {item ? <Description /> : null}
      <Catalog />
    </div>
  );
};

export default Shop;
