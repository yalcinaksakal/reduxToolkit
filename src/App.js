import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./components/UI/Overlay";
import { uiSliceActions } from "./store/ui-slice";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const { cartIsVisible, notification } = useSelector(state => state.ui);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toogle());
  };
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
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
