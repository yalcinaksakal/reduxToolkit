import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };
// title: "Test Item", quantity: 3, total: 18, price: 6
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
