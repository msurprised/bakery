import React, { useState } from "react";
import style from "./Wholesale.module.scss";

const Wholesale = () => {
  const [inputSelected, setInputSelected] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
            <label htmlFor="name">your name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Ann"
              required
            />
          </div>
          <div className={`${style.inputWrap} ${style.item_2}`}>
            <label htmlFor="email">e-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="bakery@bakery.ba"
              required
            />
          </div>
          <div className={`${style.inputWrap} ${style.item_3}`}>
            <label htmlFor="tel">phone</label>
            <input
              name="tel"
              id="tel"
              type="tel"
              placeholder="+00000000000"
              required
            />
          </div>
          <div className={`${style.inputWrap} ${style.item_4}`}>
            <label htmlFor="company">company</label>
            <input
              name="company"
              id="company"
              type="text"
              placeholder="Bakery"
              required
            />
          </div>
          <div className={`${style.inputWrap} ${style.item_5}`}>
            <label htmlFor="activity">field of activity</label>
            <input
              name="activity"
              id="activity"
              type="text"
              placeholder="Baking croissants"
              required
            />
          </div>
          <div
            className={`${style.inputWrap} ${style.item_6}`}
            
          >
            <label htmlFor="category">category</label>
            <div
              className={`${style.inputArrow} ${
                inputSelected ? style.inputArrowActive : ""
              }`}
            >
              ﹀
            </div>
            <input
              required
              name="category"
              id="category"
              value={inputValue}
              onChange={() => setInputValue(inputValue)}
              onFocus={toggle}
              onBlur={toggle}
              placeholder="choose category"
            />
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
          <button type="submit">send</button>
        </form>
        <div className={style.formInfo}>
          <p>
            By clicking on the "send" button, you agree to{" "}
            <a href="/">the terms of the offer</a> and agree to the processing
            of your personal data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
