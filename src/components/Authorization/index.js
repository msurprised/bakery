import React, { useState, createRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleAuthorizationDisplay } from "../../store/authorizationSlice";
import style from "./Authorization.module.scss";

const Authorization = () => {
  const [registered, setRegistered] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const ref = createRef();

  const dispatch = useDispatch();

  const handleChangeUser = (event) => {
    setUser((prev) => event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword((prev) => event.target.value);
  };

  const handleOutClick = (event) => {
    if (!ref.current.contains(event.target)) {
      dispatch(toggleAuthorizationDisplay());
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleOutClick);
    }, 1000);

    return () => {
      document.removeEventListener("click", handleOutClick);
    };
  }, []);

  return (
    <div className={style.maincontainer}>
      <div className={style.contentWrap} ref={ref}>
        <div
          className={style.closeBtn}
          onClick={() => dispatch(toggleAuthorizationDisplay())}
        >
          ╳
        </div>
        <h2>{registered ? "Sign in" : "Sign up"}</h2>
        <div className={style.form}>
          <div className={style.inputWrap}>
            <input
              type="email"
              id="user"
              name="user"
              value={user}
              onChange={handleChangeUser}
            />
            <label htmlFor="user">email</label>
          </div>
          <div className={style.inputWrap}>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
            <label htmlFor="password">password</label>
          </div>
        </div>
        <div className={style.btn}>{registered ? "sign in" : "sign up"}</div>
        <div
          className={style.changer}
          onClick={() => setRegistered(!registered)}
        >
          {registered ? "registration" : "i have an account"}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
