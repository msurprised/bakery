import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    display: false,
  },
  reducers: {
    changeSidebarDisplay(store) {
      store.display = !store.display;
    },
  },
});

export const {changeSidebarDisplay} = sidebarSlice.actions;
export default sidebarSlice.reducer;
