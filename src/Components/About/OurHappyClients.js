import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import content from "../../Files/Images/bg-content.png";
import icon1 from "../../Files/Images/icon/1.png";
import {
  Grid,
  CardMedia,
  Box,
  CardHeader,
  Avatar,
  Typography
} from "@material-ui/core";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import SvgIconComment from "../../Core/SvgIconComment";
import comment1 from "../../Files/Images/1.jpg";
import comment2 from "../../Files/Images/2.jpg";
import comment3 from "../../Files/Images/3.jpg";
import comment4 from "../../Files/Images/4.jpg";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: "20px"
  },
  grid1: {
    border: "1px solid #e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: "80%",
    height: "80%"
  },
  client: {
    position: "relative",
    paddingBottom: 8,
    marginBottom: 8,
    "&::before": {
      content: '""',
      position: "absolute",
      width: 40,
      bottom: 0,
      borderBottom: "2px solid #e0e0e0"
    }
  },
  avatarSize: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

function OurHappyClient() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Grid container>
            <Grid item sm={4} xs={6} md={6} lg={4} className={classes.grid1}>
              <CardMedia
                component="img"
                image={icon1}
                className={classes.icon}
              />
            </Grid>
            <Grid item sm={4} xs={6} md={6} lg={4} className={classes.grid1}>
              <CardMedia
                component="img"
                image={icon1}
                className={classes.icon}
              />
            </Grid>
            <Grid item sm={4} xs={6} md={6} lg={4} className={classes.grid1}>
              <CardMedia
                component="img"
                image={icon1}
                className={classes.icon}
              />
            </Grid>
            <Grid item sm={4} xs={6} md={6} lg={4} className={classes.grid1}>
              <CardMedia
                component="img"
                image={icon1}
                className={classes.icon}
              />
            </Grid>
            <Grid item sm={4} xs={6} md={6} lg={4} className={classes.grid1}>
              <CardMedia
                component="img"
                image={icon1}
                className={classes.icon}
              />
            </Grid>
            <Grid item sm={4} xs={6} md={6} lg={4} className={classes.grid1}>
              <CardMedia
                component="img"
                image={icon1}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} xs={12} style={{ height: "100%" }}>
          <OrangeTypography variant="h6" className={classes.client}>
            <b>Our Happy Clients</b>
          </OrangeTypography>
          <SliderOurHappyClients />
        </Grid>
      </Grid>
    </div>
  );
}

export default OurHappyClient;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  dotsClass: "button__bar",
  autoplaySpeed: 3000
};

function SliderOurHappyClients() {
  const classes = useStyles();
  return (
    <Box my={3}>
      <Slider {...settings} style={{ width: "100%" }}>
        <div className="slider-slick-main">
          <Box>
            <Typography component="span">
              <SvgIconComment viewType="normal" />
            </Typography>
            &nbsp;&nbsp;
            <ColorTextTypography component="span">
              They call him Flipper Flipper faster than lightning no one you see
              is smarter than he black gold all of them had hair of gold like
              their mother the young one in curls never heard the word
              impossible you than lightning no one you see is smarter than he
              black gold all of them had hair of gold like their mother the
              young one in curls never heard the word.
            </ColorTextTypography>
            &nbsp;&nbsp;
            <Typography component="span">
              <SvgIconComment />
            </Typography>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  alt="comment1"
                  src={comment1}
                  className={classes.avatarSize}
                >
                  R
                </Avatar>
              }
              title={
                <ColorTextTypography>
                  <b>Marvek</b>
                </ColorTextTypography>
              }
              subheader={
                <ColorTextTypography variant="body2">
                  September 14, 2020
                </ColorTextTypography>
              }
            />
          </Box>
        </div>
        <div className="slider-slick-main">
          <Box>
            <Typography component="span">
              <SvgIconComment viewType="normal" />
            </Typography>
            &nbsp;&nbsp;
            <ColorTextTypography component="span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ColorTextTypography>
            &nbsp;&nbsp;
            <Typography component="span">
              <SvgIconComment />
            </Typography>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  alt="comment1"
                  src={comment2}
                  className={classes.avatarSize}
                >
                  R
                </Avatar>
              }
              title={
                <ColorTextTypography>
                  <b>Lewis</b>
                </ColorTextTypography>
              }
              subheader={
                <ColorTextTypography variant="body2">
                  October 01, 2020
                </ColorTextTypography>
              }
            />
          </Box>
        </div>
        <div className="slider-slick-main">
          <Box>
            <Typography component="span">
              <SvgIconComment viewType="normal" />
            </Typography>
            &nbsp;&nbsp;
            <ColorTextTypography component="span">
              They call him Flipper Flipper faster than lightning no one you see
              is smarter than he black gold all of them had hair of gold like
              their mother the young one in curls never heard the word
              impossible you than lightning no one you see is smarter than he
              black gold all of them had hair of gold like their mother the
              young one in curls never heard the word.
            </ColorTextTypography>
            &nbsp;&nbsp;
            <Typography component="span">
              <SvgIconComment />
            </Typography>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  alt="comment1"
                  src={comment3}
                  className={classes.avatarSize}
                >
                  R
                </Avatar>
              }
              title={
                <ColorTextTypography>
                  <b>Maiel</b>
                </ColorTextTypography>
              }
              subheader={
                <ColorTextTypography variant="body2">
                  September 14, 2020
                </ColorTextTypography>
              }
            />
          </Box>
        </div>
        <div className="slider-slick-main">
          <Box>
            <Typography component="span">
              <SvgIconComment viewType="normal" />
            </Typography>
            &nbsp;&nbsp;
            <ColorTextTypography component="span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ColorTextTypography>
            &nbsp;&nbsp;
            <Typography component="span">
              <SvgIconComment />
            </Typography>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  alt="comment1"
                  src={comment4}
                  className={classes.avatarSize}
                >
                  R
                </Avatar>
              }
              title={
                <ColorTextTypography>
                  <b>Billy Sharp</b>
                </ColorTextTypography>
              }
              subheader={
                <ColorTextTypography variant="body2">
                  July 24, 2020
                </ColorTextTypography>
              }
            />
          </Box>
        </div>
      </Slider>
    </Box>
  );
}
