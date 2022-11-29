import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../firebase";

export const fetchNewUser = createAsyncThunk(
  "authorization/fetchNewUser",
  async (props) => {
    const auth = getAuth();
    const data = await createUserWithEmailAndPassword(
      auth,
      props.user,
      props.password
    );

    const payload = {
      email: data.user.email,
      uid: data.user.uid,
    };
    return payload;
  }
);

export const fetchUser = createAsyncThunk(
  "authorization/fetchUser",
  async (props) => {
    const auth = getAuth();
    const data = await signInWithEmailAndPassword(
      auth,
      props.user,
      props.password
    );

    const payload = {
      email: data.user.email,
      uid: data.user.uid,
    };
    return payload;
  }
);

export const fetchOrders = createAsyncThunk(
  "authorization,fetchOrders",
  async (state) => {
    let user = "noName";
    const payload = [];

    if (state) user = state;
    const q = query(collection(db, user));
    const orders = await getDocs(q);
    orders.forEach((doc) => {
      payload.push(doc.data());
    });

    return payload;
  }
);

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    formDisplay: false,
    vidgetDisplay: false,
    entered: false,
    user: {
      email: null,
      id: null,
    },
    orders: [],
  },
  reducers: {
    toggleAuthorizationDisplay(store) {
      store.formDisplay = !store.formDisplay;
    },
    removeUser(state) {
      state.user.email = null;
      state.user.id = null;
      state.entered = false;
    },
    toggleHistoryVidgetDisplay(state) {
      state.vidgetDisplay = !state.vidgetDisplay;
    },
    updateOrders(state, action) {
      state.orders.push(action.payload);
    },
    clearOrders(state) {
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.id = action.payload.uid;
        state.entered = true;

      })
      .addCase(fetchNewUser.rejected, (state) => {
        state.entered = false;
        alert('registration error')
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.id = action.payload.uid;
        state.entered = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.entered = false;
        alert('authorization error')

      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
      });
  },
});

export default authorizationSlice.reducer;

export const {
  toggleAuthorizationDisplay,
  setUser,
  removeUser,
  toggleHistoryVidgetDisplay,
  updateOrders,
  clearOrders,
} = authorizationSlice.actions;
