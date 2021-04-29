import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  numberOfItems: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.numberOfItems = action.payload.numberOfItems;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action) {
      state.changed = true;
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
      state.changed = true;
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
