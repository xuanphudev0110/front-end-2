import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia } from "@material-ui/core";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import content from "../../Files/Images/bg-content.png";
import icon from "../../Files/Images/icon/title-icon.png";
import map1 from "../../Files/Images/map.png";
import map2 from "../../Files/Images/map-2.jpg";
import { ColorButtonNormal } from "../../Core/ButtonOrange";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: "20px"
  },
  textColor: {
    marginLeft: theme.spacing(2)
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    margin: theme.spacing(1, 0)
  },
  icon2: {
    width: theme.spacing(12),
    height: 10,
    margin: theme.spacing(2, 0)
  },
  map: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    padding: "100px 60px"
  },
  map1: {
    background: `linear-gradient(rgba(34, 34, 34, 0.85), rgba(0, 0, 0, 0.7)), url("${map1}") no-repeat center center`
  },
  map2: {
    background: `linear-gradient(rgba(34, 34, 34, 0.85), rgba(0, 0, 0, 0.7)), url("${map2}") no-repeat center center`
  },
  btn: {
    paddingLeft: "24px",
    paddingRight: "24px"
  }
}));

function ServicesAbout() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container direction="column" alignItems="center">
        <OrangeTypography variant="h5">
          <b>Services We Offered</b>
        </OrangeTypography>
        <CardMedia
          component="img"
          image={icon}
          title="Icon"
          className={classes.icon}
        />
        <ColorTextTypography paragraph>
          Flipper Flipper faster than lightning no one you see is smarter than
          he black gold young
        </ColorTextTypography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={clsx(classes.map, classes.map1)}>
            <ColorTextTypography variant="h6">
              <b>New Service 1</b>
            </ColorTextTypography>
            <CardMedia
              component="img"
              image={icon}
              title="Icon"
              className={classes.icon2}
            />
            <ColorTextTypography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </ColorTextTypography>
            <ColorTextTypography variant="h5" paragraph>
              500$ / 1 Month
            </ColorTextTypography>
            <ColorButtonNormal className={classes.btn}>
              Using Service
            </ColorButtonNormal>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={clsx(classes.map, classes.map2)}>
            <ColorTextTypography variant="h6">
              <b>New Service 2</b>
            </ColorTextTypography>
            <CardMedia
              component="img"
              image={icon}
              title="Icon"
              className={classes.icon2}
            />
            <ColorTextTypography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </ColorTextTypography>
            <ColorTextTypography variant="h5" paragraph>
              400$ / 1 Month
            </ColorTextTypography>
            <ColorButtonNormal className={classes.btn}>
              Using Service
            </ColorButtonNormal>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServicesAbout;
