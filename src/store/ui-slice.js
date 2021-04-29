import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false, notification: null };
// title: "Test Item", quantity: 3, total: 18, price: 6
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    resetNotification(state) {
      state.notification = null;
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
