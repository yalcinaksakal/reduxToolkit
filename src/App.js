import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./components/UI/Overlay";
import { uiSliceActions } from "./store/ui-slice";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
let isInitial = true;
function App() {
  const { cartIsVisible, notification } = useSelector(state => state.ui);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toogle());
  };
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiSliceActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data.",
        })
      );
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
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully.",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(error =>
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed.",
        })
      )
    );
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsVisible && (
          <>
            <Overlay clicked={toggleHandler} />
            <Cart onClose={toggleHandler} />
          </>
        )}
        <Products />
      </Layout>
    </>
  );
}

export default App;
