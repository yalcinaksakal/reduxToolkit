import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./components/UI/Overlay";
import { uiSliceActions } from "./store/ui-slice";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const { cartIsVisible, notification } = useSelector(state => state.ui);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toogle());
  };

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) dispatch(sendCartData(cart));
    const timer = setTimeout(
      () => dispatch(uiSliceActions.resetNotification()),
      2000
    );
    return () => clearTimeout(timer);
  }, [cart, dispatch]);

  return (
    <>
      <Layout>
        {cartIsVisible && (
          <>
            <Overlay clicked={toggleHandler} />
            <Cart onClose={toggleHandler} />
          </>
        )}
        <Products />
      </Layout>
      {notification && <Notification {...notification} />}
    </>
  );
}

export default App;
