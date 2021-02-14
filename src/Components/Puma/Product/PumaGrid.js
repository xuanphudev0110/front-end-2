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
            // console.log(value.products);
            return value.products.map(product => {
              if (product.title.substr(0, 4) === "Puma") {
                return <ProductGrid key={product.id} product={product} />;
              }
            });
          }}
        </ProductConsumer>
      </Grid>
    </Box>
  );
}
