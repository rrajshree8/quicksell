import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slice";
import { dataSelectSlice } from "./selectSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    dataSelectSlice,
  },
});
