import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>products</h2>
      <ul>
        <ProductItem
          title="Book"
          price={5.99}
          description="Lord of the rings"
          pId="p1"
        />
        <ProductItem
          title="Mobile Phone"
          price={119}
          description="Xiaomi Redmi 9"
          pId="p2"
        />
        <ProductItem
          title="RC Car"
          price={39}
          description="RC, 1:32, toy car "
          pId="p3"
        />
      </ul>
    </section>
  );
};

export default Products;
