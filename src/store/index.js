import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../features/SideBar";

export const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});
