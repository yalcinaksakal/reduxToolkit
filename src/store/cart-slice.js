import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";

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

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://order-meal-a2f7a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            ...cart,
            totalPrice: +cart.totalPrice.toFixed(2),
          }),
        }
      );
      if (!response.ok) throw new Error("Sending cart data failed.");
    };
    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
