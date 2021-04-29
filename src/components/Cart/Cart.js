import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {
  const { items, numberOfItems, totalPrice } = useSelector(state => state.cart);
  let cartItems = !numberOfItems ? (
    <p>Cart is empty.</p>
  ) : (
    Object.keys(items).map(id => (
      <CartItem item={{ ...items[id], id }} key={id} />
    ))
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems}</ul>
      {totalPrice > 0 && <h2>Total Price: ${totalPrice.toFixed(2)}</h2>}
    </Card>
  );
};

export default Cart;
