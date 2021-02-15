import React from "react";
import { ProductConsumer } from "../../../Context";
import { Grid } from "@material-ui/core";
import ProductGrid from "../../Product/ProductGrid";

export default function NewGrid() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <ProductConsumer>
          {value => {
            return value.products
              .filter(product => product.new === true)
              .map(product => (
                <ProductGrid
                  gridOveriew={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  key={product.id}
                  product={product}
                />
              ));
          }}
        </ProductConsumer>
      </Grid>
    </React.Fragment>
  );
}
