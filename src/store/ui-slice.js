import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    productsAreVisible: false,
  },
  reducers: {
    toggle(state) {
      state.productsAreVisible = !state.productsAreVisible;
    },
  },
});

export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
