import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Book"
          price={5.99}
          description="Lord of the rings"
          pId="1"
        />
        <ProductItem
          title="Mobile Phone"
          price={119}
          description="Xiaomi Redmi 9"
          pId="2"
        />
      </ul>
    </section>
  );
};

export default Products;
