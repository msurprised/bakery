import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    display: false,
    cutlery: 1,
  },
  reducers: {
    additemToCart(state, action) {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (foundItem) {
        foundItem.amount += 1;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
      state.totalPrice += action.payload.price;
    },
    toggleCartDisplay(store) {
      store.display = !store.display;
    },
    deleteItemFromVidget(state, action) {
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload.id
      );

      const price = action.payload.price * action.payload.amount;
      state.totalPrice -= price;
    },
    deleteItemFromCart(state, action) {
      const foundItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (foundItem.amount === 1) {
        return;
      } else {
        foundItem.amount -= 1;
        state.totalPrice -= foundItem.price;
      }
    },
    addCutlery(state) {
      state.cutlery += 1;
    },
    reduceCutlery(state) {
      if (state.cutlery === 1) return;

      state.cutlery -= 1;
    },
  },
});

export default cartSlice.reducer;

export const {
  additemToCart,
  toggleCartDisplay,
  deleteItemFromVidget,
  deleteItemFromCart,
  addCutlery,
  reduceCutlery
} = cartSlice.actions;
