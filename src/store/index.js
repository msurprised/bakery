import { configureStore } from "@reduxjs/toolkit";

import navSlice from './navSlice'
import sidebarSlice from "./sidebarSlice";
import cartSlice from './cartSlice';

export default configureStore({
  reducer: {
    nav: navSlice,
    sidebar: sidebarSlice,
    cart: cartSlice,
  },
});
