import { createSlice } from "@reduxjs/toolkit";

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState: {
        display: false
    },
    reducers:{
        toggleAuthorizationDisplay(store) {
            store.display = !store.display;
        }
    }
})

export default authorizationSlice.reducer;

export const {toggleAuthorizationDisplay} = authorizationSlice.actions;