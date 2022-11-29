import React, { useState } from "react";
import { clearCart } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

import style from "./Form.module.scss";
import adresses from "../../data/addresses.json";

const OrderForm = () => {
  const [deliveryInfo, setDeliveryinfo] = useState({
    adress: "",
    soon: "exact",
    day: "",
    time: "",
    name: "",
    email: "",
    tel: "",
    comment: "",
    needCall: false,
    lessPack: false,
  });

  const [adressInputSelected, setAdressInputSelected] = useState(false);
  const [datePickerDisplay, setDatePickerDisplay] = useState(true);
  const [timeInputSelected, setTimeInputSelected] = useState(false);
  const [dayInputSelected, setDayInputSelected] = useState(false);
  const totalPrice = useSelector((state) => state.cart.order.totalPrice);
  const cutlery = useSelector((state) => state.cart.order.cutlery);
  const userId = useSelector((state) => state.authorization.user.id);
  const items = useSelector((state) => state.cart.order.cartItems);
  const dispatch = useDispatch();

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
    setDeliveryinfo((prev) => ({ ...prev, adress: event.target.textContent }));
    setAdressInputSelected(false);
  };

  const seletTimeInputValue = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, time: event.target.textContent }));
    setTimeInputSelected(false);
  };

  const resetAdress = () => {
    setDeliveryinfo((prev) => ({ ...prev, adress: "" }));
  };

  const handleName = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleTel = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, tel: event.target.value }));
  };

  const handleEmail = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleSoon = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, soon: event.target.value }));
  };

  const handleDay = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, day: event.target.value }));
    toggleDaySelector();
  };
  const handleTime = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, time: event.target.value }));
    toggleTimeSelector();
  };

  const handleComment = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, comment: event.target.value }));
  };

  const handleNeedCall = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, needCall: event.target.checked }));
  };

  const handleLessPack = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, lessPack: event.target.checked }));
  };

  const handleAdress = (event) => {
    setDeliveryinfo((prev) => ({ ...prev, adress: event.target.value }));
    setAdressInputSelected(false);
  };

  const sendForm = async (e) => {
    e.preventDefault();

    let user = userId;
    const orderNum = user + dayjs().format("YYMMDDHHmmssSSS");
    const delivery = {};

    if (userId === null) {
      user = "noName";
    }

    delivery.num = orderNum;
    delivery.info = deliveryInfo;
    delivery.order = [];
    delivery.cutlery = cutlery;
    delivery.totalPrice = totalPrice;
    delivery.day = dayjs().format("DD.MM.YY").toString();

    items.forEach((item) => {
      const orderItem = {};
      orderItem[item.name] = item.amount;
      delivery.order.push(orderItem);
    });

    await setDoc(doc(db, user, orderNum), {
      delivery,
    });
    dispatch(clearCart());
  };

  const theme = createTheme({
    palette: {
      primary: { main: "#c9ada7" },
    },
  });

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
          {!deliveryInfo.adress
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
                .filter((item) => item.name === deliveryInfo.adress)
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

      <form onSubmit={sendForm}>
        <div className={`${style.inputWrap} ${style.CP}`}>
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
            value={deliveryInfo.adress}
            id="adress"
            placeholder="select bakery"
            onFocus={toggleAdressSelector}
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
              onFocus={() => setDatePickerDisplay(true)}
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
                value={deliveryInfo.day}
                onChange={handleDay}
                onFocus={toggleDaySelector}
                required={datePickerDisplay}
                placeholder="select day"
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
                    value={dayjs()}
                    onChange={(newValue) => {
                      setDeliveryinfo((prev) => ({
                        ...prev,
                        day: newValue.toString().slice(0, 16),
                      }));
                      toggleDaySelector();
                    }}
                    renderInput={(props) => (
                      <TextField label="Date" helperText="Something" />
                    )}
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
            <div className={`${style.inputWrap} ${style.CP}`}>
              <input
                name="time"
                type="text"
                value={deliveryInfo.time}
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
              value={deliveryInfo.name}
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
              value={deliveryInfo.tel}
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
              value={deliveryInfo.email}
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
              value={deliveryInfo.comment}
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
                checked={deliveryInfo.needCall}
                onChange={handleNeedCall}
              />
              <label htmlFor="call">call to confirm order</label>
            </div>
            <div>
              <input
                name="less_pack"
                type="checkbox"
                id="lessPack"
                checked={deliveryInfo.lessPack}
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
          <input  type='submit' className={style.sendBtn} value='checkout'/>
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
