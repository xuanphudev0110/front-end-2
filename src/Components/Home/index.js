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
import Popup from "./Popup";
import Loading from "../General/Loading";

const useStyles = makeStyles(theme => ({
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  }
}));

function Home() {
  const classes = useStyles();
  const [showLoading, setShowLoading] = React.useState(false);
  const modalTimer = React.useRef(null);

  React.useEffect(() => {
    modalTimer.current = setTimeout(() => setShowLoading(true), 2000);
  }, []);

  return showLoading ? (
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
          <Popup />
          <Service />
        </div>
      </Container>
      <Newletter />
    </React.Fragment>
  ) : (
    <Loading />
  );
}

export default Home;
