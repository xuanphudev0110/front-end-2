import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import content from "../../Files/Images/bg-content.png";
import { CardHeader, Avatar, Button, Box, Grid } from "@material-ui/core";
import laptop from "../../Files/Images/icon/laptop.png";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AndroidIcon from "@material-ui/icons/Android";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: theme.spacing(6, 3),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  avatarSize: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  radiusBtn: {
    borderRadius: 99,
    padding: theme.spacing(1, 3)
  },
  margin: {
    marginBottom: 22
  }
}));

function DownloadApp() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatarSize}
            aria-label="avatar"
            src={laptop}
            alt="text"
            variant="rounded"
          />
        }
        title={
          <OrangeTypography variant="h5">
            <b>Download Our</b>
          </OrangeTypography>
        }
        subheader={
          <ColorTextTypography variant="h6">Tax Guide App</ColorTextTypography>
        }
      />
      <Box className={classes.margin}>
        <ColorTextTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </ColorTextTypography>
      </Box>
      <Grid container justify="center">
        <Button
          variant="contained"
          color="primary"
          endIcon={<PhoneIphoneIcon />}
          className={classes.radiusBtn}
        >
          Get IOS App
        </Button>
        &nbsp;&nbsp;
        <Button
          className={classes.radiusBtn}
          variant="contained"
          color="secondary"
          endIcon={<AndroidIcon />}
        >
          Get Android App
        </Button>
      </Grid>
    </div>
  );
}

export default DownloadApp;
