import { uiSliceActions } from "./ui-slice";
import { cartSliceActions } from "./cart-slice";

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
            items: cart.items,
            numberOfItems: cart.numberOfItems,
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

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        "https://order-meal-a2f7a-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) throw new Error("Could not fetch data.");
      const data = response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      if (cartData.items) dispatch(cartSliceActions.replaceCart(cartData));
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
