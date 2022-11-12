import React, { useState } from "react";
import style from "./Wholesale.module.scss";

const Wholesale = () => {
  const [inputSelected, setInputSelected] = useState(false);
  const [inputValue, setInputValue] = useState("choose any");

  const toggle = () => {
    setInputSelected(!inputSelected);
  };

  const selectInputValue = (event) => {
    setInputValue(event.target.textContent);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.bg}>
        <div className={style.bgContent}>
          <p>Wholesale:</p>
        </div>
      </div>
      <div className={style.contentWrap}>
        <p>
          Just fill out the form below or write to us at{" "}
          <a href="mailto:bakery@bakery.ba">bakery@bakery.ba</a> <br />
          and we will send you the cost of products and the terms of
          partnership.
        </p>
        <form>
          <div className={`${style.inputWrap} ${style.item_1}`}>
            <label>your name</label>
            <input type="text" placeholder="Ann" required />
          </div>
          <div className={`${style.inputWrap} ${style.item_2}`}>
            <label>e-mail</label>
            <input type="email" placeholder="bakery@bakery.ba" required />
          </div>
          <div className={`${style.inputWrap} ${style.item_3}`}>
            <label>phone</label>
            <input type="tel" placeholder="+00000000000" required />
          </div>
          <div className={`${style.inputWrap} ${style.item_4}`}>
            <label>company</label>
            <input type="text" placeholder="Bakery" required />
          </div>
          <div className={`${style.inputWrap} ${style.item_5}`}>
            <label>field of activity</label>
            <input type="text" placeholder="Baking croissants" required />
          </div>
          <div
            className={`${style.inputWrap} ${style.item_6}`}
            onClick={toggle}
          >
            <label>category</label>
            <div
              className={`${style.inputArrow} ${
                inputSelected ? style.inputArrowActive : ""
              }`}
            >
              ﹀
            </div>
            <input required disabled value={inputValue} />
            <div
              className={`${style.selectWrap} ${
                inputSelected ? "" : style.selectWrapHidden
              }`}
            >
              <div className={style.select} onClick={selectInputValue}>
                bakery products
              </div>
              <div className={style.select} onClick={selectInputValue}>
                bread
              </div>
            </div>
          </div>
          <button>send</button>
        </form>
        <div className={style.formInfo}>
          <p>
            By clicking on the "send" button, you agree to <a href="/">the terms of the
            offer</a> and agree to the processing of your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
