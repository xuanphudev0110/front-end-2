import React from "react";
import { Container, Box } from "@material-ui/core";
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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  },
  iconBtn: {
    color: theme.palette.success.main
  }
}));

function Home() {
  const classes = useStyles();
  const [showLoading, setShowLoading] = React.useState(false);
  const modalTimer = React.useRef(null);

  React.useEffect(() => {
    modalTimer.current = setTimeout(() => setShowLoading(true), 2000);
  }, []);
  const [open, setOpen] = React.useState(true);
  const handleChange = () => {
    setOpen(false);
  };

  return showLoading ? (
    <React.Fragment>
      <Container maxWidth="lg">
        <div className={classes.autoMb}>
          {open === true && (
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              bgcolor="#edf7ed"
              py={1}
            >
              <Box flexBasis="97%">
                <marquee behavior="scroll" direction="left">
                  Welcome to bird shop lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </marquee>
              </Box>
              <Box flexBasis="3%" textAlign="right">
                <IconButton
                  aria-label="close"
                  className={classes.iconBtn}
                  size="small"
                  onClick={handleChange}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          )}

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
