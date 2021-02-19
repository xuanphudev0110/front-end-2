import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Navbar from "./Navbar";
import ScrollTop from "./ScrollTop";
import ButtonScrollTop from "../../Core/ButtonScrollTop";
import ContactInfor from "./ContactInfor";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <div id="contact-info" />
      <ScrollTop>
        <ButtonScrollTop />
      </ScrollTop>
      <ContactInfor />
    </React.Fragment>
  );
}

export default App;
