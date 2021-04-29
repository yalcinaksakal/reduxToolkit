import classes from "./CartButton.module.css";

const CartButton = props => {
  return (
    <button onClick={props.clicked} className={classes.button}>
      <span>Cart</span>
      <span className={`${classes.badge} ${props.items ? "" : classes.empty}`}>
        {props.items}
      </span>
    </button>
  );
};

export default CartButton;
