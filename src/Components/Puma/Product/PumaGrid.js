import React from "react";
import { ProductConsumer } from "../../../Context";
import { Grid, Box } from "@material-ui/core";
import ProductGrid from "../../Product/ProductGrid";

export default function PumaGrid() {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <ProductConsumer>
          {value => {
            return value.products
              .filter(product => product.title.substr(0, 4) === "Puma")
              .map(product => (
                <ProductGrid key={product.id} product={product} />
              ));
          }}
        </ProductConsumer>
      </Grid>
    </Box>
  );
}
