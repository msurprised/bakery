import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import navSlice from "./navSlice";
import sidebarSlice from "./sidebarSlice";
import cartSlice from "./cartSlice";
import descriptionSlice from "./descriptionSlice";
import authorizationSlice from "./authorizationSlice";

const rootReducer = combineReducers({
  nav: navSlice,
  sidebar: sidebarSlice,
  cart: cartSlice,
  description: descriptionSlice,
  authorization: authorizationSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
