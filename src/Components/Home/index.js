import React from "react";
import { Container } from "@material-ui/core";
import SliderAdvertisement from "./SliderAdvertisement";
import { makeStyles } from "@material-ui/core";
import Countdown from "./Countdown";
import Newletter from "../General/Newletter";
import TypeProduct from "./TypeProduct";
import Service from "./Service";
import BestSelling from "./BestSelling";
import SpecialProduct from "./SpecialProduct";
import SliderProduct from "../General/SliderProduct";
import NewProduct from "./NewProduct";

const useStyles = makeStyles(theme => ({
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <div className={classes.autoMb}>
          <SliderAdvertisement />
          <Countdown deadline="Jul, 15, 2021" />
          <TypeProduct />
          <NewProduct />
          <BestSelling />
          <SpecialProduct />
          <SliderProduct />
          <Service />
        </div>
      </Container>
      <Newletter />
    </React.Fragment>
  );
}

export default Home;
