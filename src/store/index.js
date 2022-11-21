import { configureStore } from "@reduxjs/toolkit";

import navSlice from "./navSlice";
import sidebarSlice from "./sidebarSlice";
import cartSlice from "./cartSlice";
import descriptionSlice from "./descriptionSlice";
import authorizationSlice from "./authorizationSlice";

export default configureStore({
  reducer: {
    nav: navSlice,
    sidebar: sidebarSlice,
    cart: cartSlice,
    description: descriptionSlice,
    authorization: authorizationSlice,
  },
});
