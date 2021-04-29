import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartSliceActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
const ProductItem = props => {
  const { title, price, description } = props;
  const dispacth = useDispatch();
  const addItemHandler = item => {
    dispacth(cartSliceActions.addItem({ item }));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={addItemHandler.bind(null, { id: props.pId, title, price })}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
