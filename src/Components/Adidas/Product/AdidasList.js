import React from "react";
import { Grid, Box } from "@material-ui/core";
import { ProductConsumer } from "../../../Context";
import ProductList from "../../Product/ProductList";

function AdidasList() {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <ProductConsumer>
          {value => {
            console.log(value.products);
            return value.products.map(product => {
              // console.log(product.title.substr(0, 7) === "Glasses");
              if (product.title.substr(0, 6) === "Adidas") {
                return <ProductList key={product.id} product={product} />;
              }
            });
          }}
        </ProductConsumer>
      </Grid>
    </Box>
  );
}

export default AdidasList;