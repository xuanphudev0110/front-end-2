import React from "react";
import { ProductConsumer } from "../../../Context";
import { Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductGrid from "../../Product/ProductGrid";

const useStyles = makeStyles(theme => ({
  viewMore: {
    borderRadius: 99,
    padding: theme.spacing(1, 5),
    textTransform: "none"
  }
}));
export default function PumaGrid() {
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {open === true ? (
          <ProductConsumer>
            {value => {
              // console.log(value.products);
              return value.products.map(product => {
                if (
                  product.title.substr(0, 4) === "Puma" &&
                  product.type === "Clothes"
                ) {
                  return <ProductGrid key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        ) : (
          <ProductConsumer>
            {value => {
              // console.log(value.products);
              return value.products.map((product, index) => {
                if (
                  product.title.substr(0, 4) === "Puma" &&
                  index > 71 &&
                  index < 75
                ) {
                  return <ProductGrid key={product.id} product={product} />;
                }
              });
            }}
          </ProductConsumer>
        )}

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" mt={2}>
            {open === true ? (
              undefined
            ) : (
              <Button
                variant="contained"
                color="primary"
                className={classes.viewMore}
                onClick={handleChange}
              >
                View more
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
