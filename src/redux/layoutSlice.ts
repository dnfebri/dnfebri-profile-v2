import { createSlice } from "@reduxjs/toolkit";

const layoutState = {
  openMenuNav: false,
};

export type TLayoutState = typeof layoutState;

export const layoutSlice = createSlice({
  name: "layout",
  initialState: layoutState,
  reducers: {
    toggleOpenMenu: (state) => {
      state.openMenuNav = !state.openMenuNav;
    },
    closeMenuNav: (state) => {
      state.openMenuNav = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleOpenMenu, closeMenuNav } = layoutSlice.actions;

export default layoutSlice.reducer;
