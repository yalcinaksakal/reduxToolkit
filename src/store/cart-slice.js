import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCartShown: false, items: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      console.log(action.payload.item);
    },
    removeItem(state, action) {
      console.log(action.payload.item);
    },
    toogle(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
