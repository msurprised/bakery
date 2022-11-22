import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewUser, fetchUser } from "../../store/authorizationSlice";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { toggleAuthorizationDisplay } from "../../store/authorizationSlice";

import style from "./Authorization.module.scss";

const Authorization = () => {
  const [registered, setRegistered] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(null);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.authorization.status);

  const handleOutClick = (event) => {
    if (!ref.current.contains(event.target)) {
      dispatch(toggleAuthorizationDisplay());
    }
  };

  const handleEnterBtnClick = () => {
    registered
      ? dispatch(fetchUser({ user, password }))
      : dispatch(fetchNewUser({ user, password }));
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleOutClick);
    }, 500);

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
              onChange={(event) => {
                setUser((prev) => event.target.value);
              }}
              placeholder="email"
            />
            <label htmlFor="user">email</label>
          </div>
          <div className={style.inputWrap}>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword((prev) => event.target.value);
              }}
              placeholder="password"
            />
            <label htmlFor="password">password</label>
          </div>
        </div>
        <div className={style.btn} onClick={handleEnterBtnClick}>
          {registered ? "sign in" : "sign up"}
        </div>
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
