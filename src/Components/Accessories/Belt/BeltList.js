import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button } from "@material-ui/core";
import { ProductConsumer } from "../../../Context";
import ProductList from "../../Product/ProductList";

const useStyles = makeStyles(theme => ({
  viewMore: {
    borderRadius: 99,
    padding: theme.spacing(1, 5),
    textTransform: "none"
  }
}));
function BeltList() {
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
              return value.products
                .filter(product => product.title.substr(0, 4) === "Belt")
                .map(product => (
                  <ProductList key={product.id} product={product} />
                ));
            }}
          </ProductConsumer>
        ) : (
          <ProductConsumer>
            {value => {
              // console.log(value.products);
              return value.products
                .filter(
                  (product, index) =>
                    product.title.substr(0, 4) === "Belt" &&
                    index > 8 &&
                    index < 12
                )
                .map(product => (
                  <ProductList key={product.id} product={product} />
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

export default BeltList;
