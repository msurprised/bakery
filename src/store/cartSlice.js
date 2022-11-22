import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    display: false,

    order: {
      cartItems: [],
      totalPrice: 0,
      cutlery: 1,
      deliveryInfo: {},
    },
  },
  reducers: {
    additemToCart(state, action) {
      const foundItem = state.order.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (foundItem) {
        foundItem.amount += 1;
      } else {
        state.order.cartItems.push({ ...action.payload, amount: 1 });
      }
      state.order.totalPrice += action.payload.price;
    },
    toggleCartDisplay(store) {
      store.display = !store.display;
    },
    deleteItemFromVidget(state, action) {
      state.order.cartItems = state.order.cartItems.filter(
        (obj) => obj.id !== action.payload.id
      );

      const price = action.payload.price * action.payload.amount;
      state.order.totalPrice -= price;
    },
    deleteItemFromCart(state, action) {
      const foundItem = state.order.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (foundItem.amount === 1) {
        return;
      } else {
        foundItem.amount -= 1;
        state.order.totalPrice -= foundItem.price;
      }
    },
    addCutlery(state) {
      state.order.cutlery += 1;
    },
    reduceCutlery(state) {
      if (state.order.cutlery === 1) return;

      state.order.cutlery -= 1;
    },
    setOrderInfo(state, action) {
      state.order.deliveryInfo = action.payload;
    }
  },
});

export default cartSlice.reducer;

export const {
  additemToCart,
  toggleCartDisplay,
  deleteItemFromVidget,
  deleteItemFromCart,
  addCutlery,
  reduceCutlery,
  setOrderInfo
} = cartSlice.actions;
