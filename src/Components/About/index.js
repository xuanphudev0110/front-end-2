import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import TitlePages from "../../Core/TitlePages";
import Newletter from "../General/Newletter";
import contact from "../../Files/Images/contact-bg.jpg";
import InformationCompany from "./InformationCompany";
import { OrangeTypography } from "../../Core/TypographyColor";
import AccordionCustom from "../../Core/AccordionCustom";
import content from "../../Files/Images/bg-content.png";
import { dataMoreAbout, dataQuestion } from "../../Data/question";
import ServicesAbout from "./ServicesAbout";
import ModalVideoAbout from "./ModalVideoAbout";
import OurHappyClient from "./OurHappyClients";

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
  },
  content: {
    background: `url("${content}")`,
    padding: "20px",
    height: 300,
    maxHeight: 300
  }
}));

function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/*
      <MoreAbout />
      <ImageAbout /> */}
      <div className={classes.bgContact}>
        <Container maxWidth="lg">
          <div className={classes.container}>
            <TitlePages name="About Us" />
            <Grid container spacing={2} className={classes.gridContent}>
              <Grid item xs={12}>
                <InformationCompany />
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.content}>
                  <OrangeTypography variant="h6" gutterBottom>
                    More About Us
                  </OrangeTypography>
                  <AccordionCustom data={dataMoreAbout} />
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.content}>
                  <OrangeTypography variant="h6" gutterBottom>
                    F.A.Q
                  </OrangeTypography>
                  <AccordionCustom data={dataQuestion} />
                </div>
              </Grid>
              <Grid item xs={12}>
                <ModalVideoAbout />
              </Grid>
              <Grid item xs={12}>
                <OurHappyClient />
              </Grid>
              <Grid item xs={12}>
                <ServicesAbout />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Newletter />
    </React.Fragment>
  );
}

export default About;
