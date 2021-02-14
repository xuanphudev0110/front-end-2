import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import RightSidebarContact from "./RightSidebarContact";
import TitlePages from "../../Core/TitlePages";
import ContentContact from "./ContentContact";
import Newletter from "../General/Newletter";
import CommentContact from "./CommentContact";
import contact from "../../Files/Images/contact-bg.jpg";

const useStyles = makeStyles(theme => ({
  bgContact: {
    background: `url("${contact}") center center`,
    backgroundSize: "cover",
    paddingBottom: "16px"
  },
  container: {
    position: "relative",
    width: "100%"
  },
  gridContent: {
    paddingTop: 50
  },
  map: {
    [theme.breakpoints.down("sm")]: {
      height: "400px !important"
    }
  }
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.bgContact}>
        <Container maxWidth="lg">
          <div className={classes.container}>
            <TitlePages name="Contact Us" />
            <Grid container spacing={2} className={classes.gridContent}>
              <Grid item xs={12} md={8}>
                <ContentContact />
              </Grid>
              <Grid item xs={12} md={4}>
                <RightSidebarContact />
              </Grid>
              <Grid item xs={12} md={6}>
                <iframe
                  className={classes.map}
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.091537714579!2d106.68523580280858!3d10.807806602893113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c2d91c4545%3A0xc026208df75d7251!2zMTIwIE5ndXnhu4VuIFbEg24gxJDhuq11LCBQaMaw4budbmcgNywgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1611755970737!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </Grid>
              <Grid item xs={12} md={6}>
                <CommentContact />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Newletter />
    </React.Fragment>
  );
}

export default ContactUs;
