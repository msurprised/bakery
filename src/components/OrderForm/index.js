import React, { useState } from "react";
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
  const [adress, setAdress] = useState("");
  const [day, setDay] = React.useState(dayjs());
  const [time, setTime] = useState("");

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
    setAdress(event.target.textContent);
    toggleAdressSelector();
  };

  const seletTimeInputValue = (event) => {
    setTime(event.target.textContent);
    setTimeInputSelected();
  };

  const resetAdress = () => {
    setAdress("");
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
          {!adress
            ? adresses.adresses.map((adress) => (
                <Placemark
                  key={adress.id}
                  defaultGeometry={adress.adress}
                  modules={["geoObject.addon.balloon"]}
                  defaultProperties={{
                    balloonContentBody: adress.name,
                  }}
                  options={{ iconColor: "#c9ada7" }}
                />
              ))
            : adresses.adresses
                .filter((item) => item.name === adress)
                .map((adress) => (
                  <Placemark
                    key={adress.id}
                    defaultGeometry={adress.adress}
                    modules={["geoObject.addon.balloon"]}
                    defaultProperties={{
                      balloonContentBody: adress.name,
                    }}
                    options={{ iconColor: "#c9ada7" }}
                  />
                ))}
        </Map>
      </YMaps>

      <form>
        <div
          className={`${style.inputWrap} ${style.CP}`}
          onClick={toggleAdressSelector}
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
            value={adress}
            id="adress"
            placeholder="select bakery"
            onChange={() => setAdress(adress)}
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
            />
            <label htmlFor="exact">exact time</label>
          </div>

          <div
            className={`${
              datePickerDisplay ? style.datePicker : style.datePickerHidden
            }`}
          >
            <div
              className={`${style.inputWrap} ${style.CP}`}
              onClick={toggleDaySelector}
            >
              <input
                name="day"
                type="text"
                id="day"
                value={day.format("DD.MM.YYYY")}
                onChange={() => setDay(day)}
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
                    value={day}
                    onChange={(newValue) => {
                      setDay(newValue);
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
              onClick={toggleTimeSelector}
            >
              <input
                name="time"
                type="text"
                value={time}
                onChange={() => setTime(time)}
                id="time"
                placeholder="select interval"
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
            <input name="name" type="text" required id="name" />
            <label htmlFor="name">name</label>
          </div>
          <div className={style.inputWrap}>
            <input name="tel" type="tel" required id="tel" />
            <label htmlFor="tel">phone</label>
          </div>
          <div className={style.inputWrap}>
            <input name="email" type="email" required id="email" />
            <label htmlFor="email">email</label>
          </div>
        </div>
        <div className={style.sectionTitle}>other</div>
        <div className={style.personSectionWrap}>
          <div className={style.inputWrap}>
            <textarea id="comment" />
            <label htmlFor="comment">order comment</label>
          </div>
          <div className={style.options}>
            <div>
              <input name="need_call" type="checkbox" id="call" />
              <label htmlFor="call">call to confirm order</label>
            </div>
            <div>
              <input name="less_pack" type="checkbox" id="lessPack" />
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
          <button type="submit">checkout</button>
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
