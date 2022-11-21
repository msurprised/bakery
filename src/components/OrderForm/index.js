import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import style from "./Form.module.scss";
import adresses from "../../data/addresses.json";

const OrderForm = () => {
  const [order, setOrder] = useState({
    adress: "",
    name: "",
    tel: "",
    email: "",
    day: dayjs(),
    time: "",
    soon: "",
    needCall: false,
    lessPack: false,
    comment: "",
  });

  const [adressInputSelected, setAdressInputSelected] = useState(false);
  const [datePickerDisplay, setDatePickerDisplay] = useState(true);
  const [timeInputSelected, setTimeInputSelected] = useState(false);
  const [dayInputSelected, setDayInputSelected] = useState(false);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const toggleAdressSelector = () => {
    setAdressInputSelected(!adressInputSelected);
  };

  const toggleTimeSelector = () => {
    setTimeInputSelected(!timeInputSelected);
  };

  const toggleDaySelector = () => {
    setDayInputSelected(!dayInputSelected);
  };

  const selectAdressInputValue = (event) => {
    setOrder((prev) => ({ ...prev, adress: event.target.textContent }));
    setAdressInputSelected(false);
  };

  const seletTimeInputValue = (event) => {
    setOrder((prev) => ({ ...prev, time: event.target.textContent }));
    setTimeInputSelected(false);
  };

  const resetAdress = () => {
    setOrder((prev) => ({ ...prev, adress: "" }));
  };

  const handleName = (event) => {
    setOrder((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleTel = (event) => {
    setOrder((prev) => ({ ...prev, tel: event.target.value }));
  };

  const handleEmail = (event) => {
    setOrder((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleSoon = (event) => {
    setOrder((prev) => ({ ...prev, soon: event.target.value }));
  };

  const handleDay = (event) => {
    setOrder((prev) => ({ ...prev, day: event.target.value }));
  };
  const handleTime = (event) => {
    setOrder((prev) => ({ ...prev, time: event.target.value }));
  };

  const handleComment = (event) => {
    setOrder((prev) => ({ ...prev, comment: event.target.value }));
  };

  const handleNeedCall = (event) => {
    setOrder((prev) => ({ ...prev, needCall: event.target.checked }));
  };

  const handleLessPack = (event) => {
    setOrder((prev) => ({ ...prev, lessPack: event.target.checked }));
  };

  const handleAdress = (event) => {
    setOrder((prev) => ({ ...prev, adress: event.target.value }));
  };

  const sendForm = (event) => {};

  const theme = createTheme({
    palette: {
      primary: { main: "#c9ada7" },
    },
  });

  useEffect(() => {
    console.log(order);
  }, [order]);

  return (
    <div className={style.mainContainer}>
      <div className={style.sectionTitle}>delivery address</div>

      <YMaps>
        <Map
          className={style.mapContainer}
          defaultState={{
            center: [59.93, 30.3],
            zoom: 11,
            controls: ["zoomControl"],
          }}
          modules={["control.ZoomControl"]}
          options={{ autoFitToViewport: "" }}
        >
          {!order.adress
            ? adresses.adresses.map((adress) => (
                <Placemark
                  key={adress.id}
                  defaultGeometry={adress.adress}
                  modules={["geoObject.addon.balloon"]}
                  defaultProperties={{
                    balloonContentBody: `<h2>${adress.name}</h2>`,
                  }}
                  options={{ iconColor: "#c9ada7" }}
                />
              ))
            : adresses.adresses
                .filter((item) => item.name === order.adress)
                .map((adress) => (
                  <Placemark
                    key={adress.id}
                    defaultGeometry={adress.adress}
                    modules={["geoObject.addon.balloon"]}
                    properties={{
                      balloonContentBody: `<h2>${adress.name}</h2>`,
                    }}
                    options={{ iconColor: "#c9ada7" }}
                  />
                ))}
        </Map>
      </YMaps>

      <form>
        <div
          className={`${style.inputWrap} ${style.CP}`}
        >
          <label htmlFor="adress">adress</label>
          <div
            className={`${style.inputArrow} ${
              adressInputSelected ? style.inputArrowActive : ""
            }`}
          >
            ﹀
          </div>
          <input
            required
            name="adress"
            value={order.adress}
            id="adress"
            placeholder="select bakery"
            onFocus={toggleAdressSelector}
            onBlur={toggleAdressSelector}
            onChange={handleAdress}
          />
        </div>
        <div
          className={`${style.selectWrap} ${
            adressInputSelected ? "" : style.selectWrapHidden
          }`}
        >
          {adresses.adresses.map((adress, index) => (
            <div
              className={style.select}
              onClick={selectAdressInputValue}
              key={index}
            >
              {adress.name}
            </div>
          ))}
        </div>
        <div className={style.resetBtn} onClick={resetAdress}>
          reset adress
        </div>
        <div className={style.sectionTitle}>date</div>
        <div className={style.dateSectionWrap}>
          <div className={style.fastSelectWrap}>
            <input
              type="radio"
              id="fast"
              name="soon"
              value="fast"
              onClick={() => setDatePickerDisplay(false)}
              onChange={handleSoon}
            />
            <label htmlFor="fast">As soon as possible</label>
          </div>
          <div className={style.fastSelectWrap}>
            <input
              type="radio"
              id="exact"
              name="soon"
              value="exact"
              defaultChecked
              onClick={() => setDatePickerDisplay(true)}
              onChange={handleSoon}
            />
            <label htmlFor="exact">exact time</label>
          </div>

          <div
            className={`${
              datePickerDisplay ? style.datePicker : style.datePickerHidden
            }`}
          >
            <div className={`${style.inputWrap} ${style.CP}`}>
              <input
                name="day"
                type="text"
                id="day"
                value={order.day.format("DD.MM.YYYY")}
                onChange={handleDay}
                onFocus={toggleDaySelector}
                onBlur={toggleDaySelector}
                required={datePickerDisplay}
              />
              <label htmlFor="day">date</label>
            </div>

            <div
              className={`${style.dayPickerWrap} ${
                dayInputSelected ? "" : style.dayPickerWrapHidden
              }`}
            >
              <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={order.day}
                    onChange={(newValue) => {
                      setOrder((prev) => ({ ...prev, day: newValue }));
                      toggleDaySelector();
                    }}
                  />
                </LocalizationProvider>
              </ThemeProvider>
            </div>
          </div>
          <div
            className={`${
              datePickerDisplay ? style.datePicker : style.datePickerHidden
            }`}
          >
            <div
              className={`${style.inputWrap} ${style.CP}`}
            >
              <input
                name="time"
                type="text"
                value={order.time}
                onChange={handleTime}
                onFocus={toggleTimeSelector}
                onBlur={toggleTimeSelector}
                id="time"
                placeholder="set interval"
                required={datePickerDisplay}
              />
              <label htmlFor="time">time</label>
              <div
                className={`${style.inputArrow} ${
                  timeInputSelected ? style.inputArrowActive : ""
                }`}
              >
                ﹀
              </div>
            </div>
            <div
              className={`${style.selectWrap} ${
                timeInputSelected ? "" : style.selectWrapHidden
              }`}
            >
              <div className={style.select} onClick={seletTimeInputValue}>
                09:00-11:00
              </div>
              <div className={style.select} onClick={seletTimeInputValue}>
                11:00-13:00
              </div>
              <div className={style.select} onClick={seletTimeInputValue}>
                13:00-15:00
              </div>
              <div className={style.select} onClick={seletTimeInputValue}>
                15:00-17:00
              </div>
              <div className={style.select} onClick={seletTimeInputValue}>
                17:00-19:00
              </div>
              <div className={style.select} onClick={seletTimeInputValue}>
                19:00-21:00
              </div>
            </div>
          </div>
        </div>
        <div className={style.sectionTitle}>your data</div>
        <div className={style.personSectionWrap}>
          <div className={style.inputWrap}>
            <input
              name="name"
              value={order.name}
              onChange={handleName}
              type="text"
              required
              id="name"
              placeholder="name"
            />
            <label htmlFor="name">name</label>
          </div>
          <div className={style.inputWrap}>
            <input
              name="tel"
              value={order.tel}
              onChange={handleTel}
              type="tel"
              required
              id="tel"
              placeholder="phone"
            />
            <label htmlFor="tel">phone</label>
          </div>
          <div className={style.inputWrap}>
            <input
              name="email"
              value={order.email}
              onChange={handleEmail}
              type="email"
              required
              id="email"
              placeholder="email"
            />
            <label htmlFor="email">email</label>
          </div>
        </div>
        <div className={style.sectionTitle}>other</div>
        <div className={style.personSectionWrap}>
          <div className={style.inputWrap}>
            <textarea
              id="comment"
              value={order.comment}
              onChange={handleComment}
              name="comment"
              placeholder="order comment"
            />
            <label htmlFor="comment">order comment</label>
          </div>
          <div className={style.options}>
            <div>
              <input
                name="need_call"
                type="checkbox"
                id="call"
                checked={order.needCall}
                onChange={handleNeedCall}
              />
              <label htmlFor="call">call to confirm order</label>
            </div>
            <div>
              <input
                name="less_pack"
                type="checkbox"
                id="lessPack"
                checked={order.lessPack}
                onChange={handleLessPack}
              />
              <label htmlFor="lessPack">less packaging</label>
            </div>
          </div>
        </div>
        <div className={style.totalSection}>
          <div className={style.totalRow}>
            <aside>order price</aside>
            <div className={style.priceWrap}>{totalPrice}₽</div>
          </div>
          <div className={style.totalRow}>
            <aside>total</aside>
            <div className={style.priceWrap}>{totalPrice}₽</div>
          </div>
          <div className={style.sendBtn} onClick={sendForm}>
            checkout
          </div>
          <p>
            By clicking the "checkout" button, I give my consent to the
            processing of my personal data, in accordance with the federal law
            of July 27, 2006 No. 152-f3 "on personal data", on the terms and for
            the purposes specified in
            <span>the consent to the processing of personal data</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
