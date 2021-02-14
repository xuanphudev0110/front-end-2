import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import EventSchedule from "./EventSchedule";
import EventSpeakers from "./EventSpeakers";
import LightBoxGallery from "./LightBoxGallery";
import Newletter from "../General/Newletter";
import TitlePages from "../../Core/TitlePages";
import contact from "../../Files/Images/contact-bg.jpg";
import DownloadApp from "./DownloadApp";
import PlayerVideo from "../../Core/PlayerVideo";
import videoTeam from "../../Files/Video/team.mp4";
import imageTeam from "../../Files/Images/teamwork.PNG";

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
    paddingTop: 50,
    height: "100%"
  }
}));

function Events() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.bgContact}>
        <Container maxWidth="lg">
          <div className={classes.container}>
            <TitlePages name="Events" />
            <Grid container spacing={2} className={classes.gridContent}>
              <Grid item xs={12} md={6}>
                <DownloadApp />
              </Grid>
              <Grid item xs={12} md={6}>
                <PlayerVideo image={imageTeam} video={videoTeam} />
              </Grid>
              <Grid item xs={12}>
                <EventSpeakers />
              </Grid>
              <Grid item xs={12}>
                <EventSchedule />
              </Grid>
              <Grid item xs={12}>
                <LightBoxGallery />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Newletter />
    </React.Fragment>
  );
}

export default Events;
