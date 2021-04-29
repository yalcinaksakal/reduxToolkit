import { useDispatch, useSelector } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiSliceActions } from "../../store/ui-slice";

const MainHeader = props => {
  const { numberOfItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiSliceActions.toogle());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton items={numberOfItems} clicked={toggleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
