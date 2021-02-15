import React from "react";
import { Grid, Box } from "@material-ui/core";
import { ProductConsumer } from "../../../Context";
import ProductList from "../../Product/ProductList";

function PumaList() {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <ProductConsumer>
          {value => {
            return value.products
              .filter(product => product.title.substr(0, 4) === "Puma")
              .map(product => (
                <ProductList key={product.id} product={product} />
              ));
          }}
        </ProductConsumer>
      </Grid>
    </Box>
  );
}

export default PumaList;
