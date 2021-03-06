import React from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Product from "./Product";
import SliderProduct from "../General/SliderProduct";
import ServicesGeneral from "../General/Services";

const useStyles = makeStyles(theme => ({
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  }
}));

function Nike() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.autoMb}>
        <Box mt={2}>
          <Product />
        </Box>
        <SliderProduct />
        <ServicesGeneral />
      </div>
    </Container>
  );
}

export default Nike;
