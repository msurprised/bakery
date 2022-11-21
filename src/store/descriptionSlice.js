import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice = createSlice({
  name: "descriprion",
  initialState: {
    item: undefined,
  },
  reducers: {
    toggleDescriptionDisplay(store) {
      store.item = null;
    },
    setDescriptionItem(store, action) {
      store.item = action.payload;
    },
  },
});

export default descriptionSlice.reducer;

export const { toggleDescriptionDisplay, setDescriptionItem } =
  descriptionSlice.actions;
