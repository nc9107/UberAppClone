import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

// Slice is a section where related data is stored.

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
