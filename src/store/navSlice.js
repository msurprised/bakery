import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    transparent: undefined,
  },
  reducers: {
    setNavTransparent(store) {
      store.animation = true;
    },
    setNavOpaque(store) {
      store.animation = false;
    },
  },
});

export const { setNavTransparent, setNavOpaque } = navSlice.actions;

export default navSlice.reducer;
