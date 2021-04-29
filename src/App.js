import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "./components/UI/Overlay";
import { uiSliceActions } from "./store/ui-slice";

function App() {
  const { cartIsVisible } = useSelector(state => state.ui);

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toogle());
  };
  return (
    <Layout>
      {cartIsVisible && (
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
