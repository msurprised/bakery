import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
      accessToken: data.user.accessToken,
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
      accessToken: data.user.accessToken,
      uid: data.user.uid,
    };
    return payload;
  }
);

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    display: false,
    entered: false,
    user: {
      email: null,
      token: null,
      id: null,
    },
  },
  reducers: {
    toggleAuthorizationDisplay(store) {
      store.display = !store.display;
    },
    removeUser(state) {
      state.user.email = null;
      state.user.token = null;
      state.user.id = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchNewUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.token = action.payload.accessToken;
      state.user.id = action.payload.uid;
      state.entered = true
    })
    .addCase(fetchNewUser.rejected, (state) => {
      state.entered = false
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.token = action.payload.accessToken;
      state.user.id = action.payload.uid;
      state.entered = true
    })
    .addCase(fetchUser.rejected, (state) => {
      state.entered = false
    })
  },
});

export default authorizationSlice.reducer;

export const { toggleAuthorizationDisplay, setUser, removeUser } =
  authorizationSlice.actions;
