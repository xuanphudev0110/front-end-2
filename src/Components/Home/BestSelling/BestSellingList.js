import React from "react";
import { Grid } from "@material-ui/core";
import { ProductConsumer } from "../../../Context";
import ProductList from "../../Product/ProductList";

function NikeList() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <ProductConsumer>
          {value => {
            return value.products
              .filter(product => product.highlights === "Sell")
              .map(product => (
                <ProductList key={product.id} product={product} />
              ));
          }}
        </ProductConsumer>
      </Grid>
    </React.Fragment>
  );
}

export default NikeList;
