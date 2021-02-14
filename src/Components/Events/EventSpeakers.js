import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
  CardMedia
} from "@material-ui/core";
import { speakers } from "../../Data/events";
import content from "../../Files/Images/bg-content.png";
import icon from "../../Files/Images/icon/title-icon.png";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  speaker: {
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    "& > img": {
      width: "100%"
    },
    "&:hover > div": {
      bottom: 0
    }
  },
  detail: {
    background: `rgba(6, 12, 34, 0.76)`,
    position: "absolute",
    left: 0,
    bottom: 5,
    right: 0,
    bottom: -35,
    textAlign: "center",
    paddingTop: "10px",
    transition: "all 300ms cubic-bezier(0.645, 0.045, 0.355, 1)"
  },
  name: {
    color: theme.palette.common.white,
    textDecoration: "none !important",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  desc: {
    color: theme.palette.common.white
  },
  content: {
    background: `url("${content}")`,
    padding: "20px"
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    margin: theme.spacing(1, 0)
  }
}));
function EventSpeakers() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container direction="column" alignItems="center">
        <OrangeTypography variant="h5">
          <b>Event Speakers</b>
        </OrangeTypography>
        <CardMedia
          component="img"
          image={icon}
          title="Icon"
          className={classes.icon}
        />
        <ColorTextTypography paragraph>
          Here are some of our speakers
        </ColorTextTypography>
      </Grid>
      <Grid container spacing={2}>
        {speakers.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={(() => `inds${index}`)()}>
            <div className={classes.speaker}>
              <CardMedia component="img" image={item.avatar} />
              <div className={classes.detail}>
                <Typography variant="h6">
                  <Link href="#" className={classes.name}>
                    {item.name}
                  </Link>
                </Typography>
                <Typography className={classes.desc}>{item.subName}</Typography>
                <div className={classes.social}>
                  <IconButton color="secondary">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <PhoneIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <LocationOnIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EventSpeakers;
