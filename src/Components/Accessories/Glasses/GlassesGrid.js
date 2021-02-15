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
export default function GlassesGrid() {
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
              return value.products
                .filter(product => product.title.substr(0, 7) === "Glasses")
                .map(product => (
                  <ProductGrid key={product.id} product={product} />
                ));
            }}
          </ProductConsumer>
        ) : (
          <ProductConsumer>
            {value => {
              return value.products
                .filter(
                  (product, idx) =>
                    product.title.substr(0, 7) === "Glasses" && idx < 3
                )
                .map(product => (
                  <ProductGrid key={product.id} product={product} />
                ));
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
