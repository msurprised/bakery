import { configureStore } from "@reduxjs/toolkit";

import navSlice from './navSlice'
import sidebarSlice from "./sidebarSlice";

export default configureStore({
  reducer: {
    nav: navSlice,
    sidebar: sidebarSlice,
  },
});
