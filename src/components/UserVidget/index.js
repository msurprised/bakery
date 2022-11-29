import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHistoryVidgetDisplay,
  removeUser,
} from "../../store/authorizationSlice";
import style from "./User.module.scss";

const UserVidget = () => {
  const mainRef = useRef();
  const dispatch = useDispatch();
  const userName = useSelector(state => state.authorization.user.email)

  const handleOutClick = (event) => {
    if (!mainRef.current.contains(event.target)) {
      dispatch(toggleHistoryVidgetDisplay());
    }
  };

  const handleLogOutClick = () => {
    dispatch(toggleHistoryVidgetDisplay());
    dispatch(removeUser());
  };

  useEffect(() => {
    setTimeout(() => document.addEventListener("click", handleOutClick), 500);

    return () => {
      document.removeEventListener("click", handleOutClick);
    };
  }, []);

  return (
    <div className={style.mainContainer} ref={mainRef}>
      <div className={style.userName}>{userName}</div>
      <div className={style.orderLink}>
        <Link
          to="/history"
          onClick={() => dispatch(toggleHistoryVidgetDisplay())}
        >
          order history
        </Link>
      </div>
      <div className={style.logoutBtn} onClick={handleLogOutClick}>
        log out
      </div>
    </div>
  );
};

export default UserVidget;
