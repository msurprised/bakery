import React, { useState, useEffect } from "react";
import style from "./Catalog.module.scss";

import Card from "../Card";
import dataBase from "../../data/products.json";

const Catalog = () => {
  const [selectorDisplay, setSelectorDisplay] = useState(false);
  const [filter, setFilter] = useState("");
  const [amount, setAmount] = useState(0);

  const toggle = () => {
    setSelectorDisplay(!selectorDisplay);
  };

  const chooseFilter = (event) => {
    setFilter(event.target.textContent);
  };

  const resetFilter = () => {
    setFilter("");
  };

  useEffect(() => {
    if (filter === "") {
      setAmount(dataBase.items.length);
    } else {
      setAmount(
        dataBase.items.filter((item) => item.category === filter).length
      );
    }
  }, [filter]);

  return (
    <div className={style.mainContainer}>
      <div className={style.filtersContainer}>
        <div className={style.filter} onClick={toggle}>
          <div className={style.filterName}>category</div>
          <div
            className={`${style.filterBtn} ${
              selectorDisplay ? style.filterBtnRotated : ""
            }`}
          >
            ﹀
          </div>
        </div>
        <div
          className={`${style.selectorContainer} ${
            selectorDisplay ? style.selectorContainerVisible : ""
          }`}
        >
          <ul>
            <li onClick={chooseFilter}>cake</li>
            <li onClick={chooseFilter}>cookie</li>
            <li onClick={chooseFilter}>bread</li>
            <li onClick={chooseFilter}>puff</li>
          </ul>
        </div>
        <div className={style.filter}>
          <div className={style.filterName} onClick={resetFilter}>
            reset filter
          </div>
        </div>
      </div>
      <div className={style.catalogContainer}>
        <div className={style.catalogTitle}>
          <div className={style.titleHeader}>{filter ? filter : 'all products'}</div>
          <div className={style.titleAmount}>{amount} items</div>
        </div>
        <div className={style.itemsWrap}>
          {filter
            ? dataBase.items
                .filter((item) => item.category === filter)
                .map((item, index) => <Card key={index} item={item} />)
            : dataBase.items.map((item, index) => (
                <Card key={index} item={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
