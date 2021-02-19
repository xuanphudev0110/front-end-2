import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import DetailProduct from "./DetailProduct";
import RandomProduct from "./RandomProduct";
import Loading from "../General/Loading";
import InformationProduct from "./InformationProduct";
import Review from "./Review";
import Tutorial from "./Tutorial";

const useStyles = makeStyles(theme => ({
  autoMb: {
    "& > *": {
      marginBottom: theme.spacing(2)
    }
  }
}));

export default function Detail() {
  const classes = useStyles();
  const [showLoading, setShowLoading] = React.useState(false);
  const modalTimer = React.useRef(null);

  React.useEffect(() => {
    modalTimer.current = setTimeout(() => setShowLoading(true), 2000);
  }, []);

  return showLoading ? (
    <Container maxWidth="lg">
      <div className={classes.autoMb}>
        <DetailProduct />
        <InformationProduct />
        <Tutorial />
        <Review />
        <RandomProduct />
      </div>
    </Container>
  ) : (
    <Loading />
  );
}
