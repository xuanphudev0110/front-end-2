import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { ProductConsumer } from "../../../Context";
import ProductList from "../../Product/ProductList";

function FilterList({ price1, price2, price3, price4 }) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {price1 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (product.price < 100 && product.type === "Clothes") {
                  return <ProductList key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
        {price2 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (
                  product.price >= 100 &&
                  product.price <= 150 &&
                  product.type === "Clothes"
                ) {
                  return <ProductList key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
        {price3 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (
                  product.price > 150 &&
                  product.price <= 200 &&
                  product.type === "Clothes"
                ) {
                  return <ProductList key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
        {price4 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (product.price > 200 && product.type === "Clothes") {
                  return <ProductList key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
      </Grid>
    </React.Fragment>
  );
}
FilterList.propTypes = {
  price1: PropTypes.bool,
  price2: PropTypes.bool,
  price3: PropTypes.bool,
  price4: PropTypes.bool
};

export default FilterList;
