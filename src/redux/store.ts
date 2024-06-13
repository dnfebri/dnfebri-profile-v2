import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";

export default configureStore({
  reducer: {
    layout: layoutSlice,
  },
});
