import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Product from "./Product";
import SliderProduct from "../General/SliderProduct";

const useStyles = makeStyles(theme => ({
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  }
}));

function Adidas() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.autoMb}>
        <Box mt={2}>
          <Product />
        </Box>
        <SliderProduct />
      </div>
    </Container>
  );
}

export default Adidas;
