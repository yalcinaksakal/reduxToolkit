import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  numberOfItems: 0,
  totalPrice: 0,
};
// title: "Test Item", quantity: 3, total: 18, price: 6
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, price } = action.payload.item;
      if (state.items[id]) {
        state.items[id].quantity++;
        state.items[id].total += price;
      } else
        state.items[id] = {
          title: action.payload.item.title,
          price,
          quantity: 1,
          total: price,
        };
      state.numberOfItems++;
      state.totalPrice += price;
    },
    removeItem(state, action) {
      const { id, price } = action.payload.item;
      state.items[id].quantity--;
      state.items[id].total -= price;
      state.numberOfItems--;
      state.totalPrice -= price;
      if (!state.items[id].quantity) {
        const newItems = {};
        Object.keys(state.items).forEach(key => {
          if (key !== id) newItems[key] = { ...state.items[key] };
        });
        state.items = newItems;
      }
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
