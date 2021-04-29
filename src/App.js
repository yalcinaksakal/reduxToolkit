import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./components/UI/Overlay";
import { cartSliceActions } from "./store/cart-slice";

function App() {
  const { isCartShown } = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(cartSliceActions.toogle());
  };
  return (
    <Layout>
      {isCartShown && (
        <>
          <Overlay clicked={toggleHandler} />
          <Cart onClose={toggleHandler} />
        </>
      )}
      <Products />
    </Layout>
  );
}

export default App;
