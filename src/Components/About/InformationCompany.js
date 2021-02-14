import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReadMore from "../../Core/ReadMore";
import content from "../../Files/Images/bg-content.png";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import { CardMedia, Grid } from "@material-ui/core";
import icon from "../../Files/Images/icon/title-icon.png";
import company from "../../Files/Images/company.jpg";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(8, 3)
    }
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    margin: theme.spacing(1, 0)
  },
  gridBorder: {
    marginTop: 20,
    paddingTop: 30,
    paddingBottom: 16,
    position: "relative",
    "&::before": {
      position: "absolute",
      width: "75%",
      height: "100%",
      content: '""',
      top: 0,
      right: 0,
      bottom: 0,
      border: "6px solid #f4d025",
      [theme.breakpoints.down("sm")]: {
        border: 0
      }
    }
  },
  indexImg: {
    zIndex: 2
  },
  thumbnail: {
    display: "block",
    borderRadius: "4px",
    transition: "0.2s ease-in-out",
    overflow: "hidden",
    "& > img": {
      transitionDuration: "0.5s",
      "&:hover": {
        transform: "scale(1.2)"
      }
    }
  }
}));

function InformationCompany() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container direction="column" alignItems="center">
        <OrangeTypography variant="h5">
          <b>Welcome To Bird Shop</b>
        </OrangeTypography>
        <CardMedia
          component="img"
          image={icon}
          title="Icon"
          className={classes.icon}
        />
        <ColorTextTypography paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </ColorTextTypography>
      </Grid>
      <Grid container spacing={2} className={classes.gridBorder}>
        <Grid item xs={12} md={6} className={classes.indexImg}>
          <div className={classes.thumbnail}>
            <CardMedia component="img" image={company} title="Icon" />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <OrangeTypography variant="h6">
            <b>We Enhance Our New Era</b>
          </OrangeTypography>
          <ReadMore>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently.
            <br />
            They call him Flipper Flipper faster than lightning no one you see
            is smarter than he black gold all of them had hair of gold like
            their mother the young one in curls never heard the word impossible
            you wanna be where you can see our troubles are all the same you
            wanna be where everybody knows your name.
          </ReadMore>
        </Grid>
      </Grid>
    </div>
  );
}

export default InformationCompany;
