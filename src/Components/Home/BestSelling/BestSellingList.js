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
            console.log(value.products);
            return value.products.map(product => {
              // console.log(product.title.substr(0, 7) === "Glasses");
              if (product.highlights === "Sell") {
                return <ProductList key={product.id} product={product} />;
              }
            });
          }}
        </ProductConsumer>
      </Grid>
    </React.Fragment>
  );
}

export default NikeList;
