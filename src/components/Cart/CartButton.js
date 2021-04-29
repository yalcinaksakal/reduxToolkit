import classes from "./CartButton.module.css";

const CartButton = props => {
  return (
    <button onClick={props.clicked} className={classes.button}>
      <span>Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
