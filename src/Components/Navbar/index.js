import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";
import ButtonScrollTop from "../../Core/ButtonScrollTop";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop>
        <ButtonScrollTop />
      </ScrollTop>
    </React.Fragment>
  );
}

export default App;
