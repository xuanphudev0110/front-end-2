import React from "react";
import PropTypes from "prop-types";
import { ProductConsumer } from "../../../Context";
import { Grid } from "@material-ui/core";
import ProductGrid from "../../Product/ProductGrid";

export default function FilterGrid({ price1, price2, price3, price4 }) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {price1 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (product.price < 15 && product.type === "Accessories") {
                  return <ProductGrid key={product.id} product={product} />;
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
                  product.price >= 15 &&
                  product.price <= 30 &&
                  product.type === "Accessories"
                ) {
                  return <ProductGrid key={product.id} product={product} />;
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
                  product.price > 30 &&
                  product.price <= 50 &&
                  product.type === "Accessories"
                ) {
                  return <ProductGrid key={product.id} product={product} />;
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
                if (product.price > 50 && product.type === "Accessories") {
                  return <ProductGrid key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
      </Grid>
    </React.Fragment>
  );
}
FilterGrid.propTypes = {
  price1: PropTypes.bool,
  price2: PropTypes.bool,
  price3: PropTypes.bool,
  price4: PropTypes.bool
};
