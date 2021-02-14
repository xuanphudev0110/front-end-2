import React from "react";
import PropTypes from "prop-types";
import { ProductConsumer } from "../../../Context";
import { Grid } from "@material-ui/core";
import ProductList from "../../Product/ProductList";

export default function FilterByStarList({ star1, star2, star3 }) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {star1 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (product.star < 4 && product.type === "Clothes") {
                  return <ProductList key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
        {star2 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (product.star === 4 && product.type === "Clothes") {
                  return <ProductList key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}
        {star3 && (
          <ProductConsumer>
            {value => {
              console.log(value.products);
              return value.products.map(product => {
                // console.log(product.title.substr(0, 7) === "Glasses");
                if (product.star === 5 && product.type === "Clothes") {
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
FilterByStarList.propTypes = {
  star1: PropTypes.bool,
  star2: PropTypes.bool,
  star3: PropTypes.bool
};
