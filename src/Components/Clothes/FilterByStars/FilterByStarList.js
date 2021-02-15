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
              return value.products
                .filter(
                  product => product.star < 4 && product.type === "Clothes"
                )
                .map(product => (
                  <ProductList key={product.id} product={product} />
                ));
            }}
          </ProductConsumer>
        )}
        {star2 && (
          <ProductConsumer>
            {value => {
              return value.products
                .filter(
                  product => product.star === 4 && product.type === "Clothes"
                )
                .map(product => (
                  <ProductList key={product.id} product={product} />
                ));
            }}
          </ProductConsumer>
        )}
        {star3 && (
          <ProductConsumer>
            {value => {
              return value.products
                .filter(
                  product => product.star === 5 && product.type === "Clothes"
                )
                .map(product => (
                  <ProductList key={product.id} product={product} />
                ));
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
