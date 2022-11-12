import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems : [],
        totalPrice: 0,
    },
    reducers: {
        additemToCart (state, action) {
            state.cartItems.push(action.payload);
            state.totalPrice += action.payload.price;
        },

    }
})

export default cartSlice.reducer;

export const {additemToCart} = cartSlice.actions;