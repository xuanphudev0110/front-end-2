import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";
import ButtonScrollTop from "../../Core/ButtonScrollTop";
import { makeStyles } from "@material-ui/core";
// import Box from "@material-ui/core/Box";
// import bannerLeft from "../../Files/Images/";

const useStyles = makeStyles(theme => ({}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      {/* <div>
        <Box>22</Box>
        <Box>767</Box>
      </div> */}
      <ScrollTop>
        <ButtonScrollTop />
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
