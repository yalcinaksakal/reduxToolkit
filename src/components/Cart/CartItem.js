import classes from "./CartItem.module.css";
import { cartSliceActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = props => {
  const { title, quantity, total, price } = props.item;
  const dispacth = useDispatch();
  const addItemHandler = item => {
    dispacth(cartSliceActions.addItem({ item }));
  };
  const removeItemHandler = item => {
    dispacth(cartSliceActions.removeItem({ item }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addItemHandler.bind(null, { title, price })}>
            -
          </button>
          <button onClick={removeItemHandler.bind(null, { title, price })}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
