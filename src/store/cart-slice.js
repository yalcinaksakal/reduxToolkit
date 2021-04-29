import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartShown: false,
  items: {},
  numberOfItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //   state.items[action.payload.item.id]
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
