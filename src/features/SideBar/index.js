import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInView: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.isInView = !state.isInView;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleView } = sideBarSlice.actions;

export default sideBarSlice.reducer;
