import { useEffect, useState } from "react";
import classes from "./CartButton.module.css";

const CartButton = props => {
  const [itemAdded, setItemAdded] = useState(false);
  const { items } = props;

  useEffect(() => {
    if (!items) return;
    setItemAdded(true);
    const timer = setTimeout(() => setItemAdded(false), 300);
    return () => clearTimeout(timer);
  }, [items]);
  return (
    <button onClick={props.clicked} className={classes.button}>
      <span>Cart</span>
      <span
        className={`${classes.badge} ${items ? "" : classes.empty} ${
          itemAdded ? classes.added : ""
        }`}
      >
        {items}
      </span>
    </button>
  );
};

export default CartButton;
