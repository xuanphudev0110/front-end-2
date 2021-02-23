import React from "react";
import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import HelpIcon from "@material-ui/icons/Help";
import LocalCarWashIcon from "@material-ui/icons/LocalCarWash";
const styles = makeStyles(theme => ({
  form: {
    position: "relative",
    overflow: "hidden"
  },
  borderService: {
    alignItems: "center",
    border: `3px solid ${theme.palette.warning.light}`
  },
  column1: {
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 0,
      left: 16,
      width: 20,
      height: 3,
      background: theme.palette.common.white
    },
    "&::after": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 16,
      width: 20,
      height: 3,
      background: theme.palette.common.white
    }
  },
  marginBt: {
    marginBottom: theme.spacing(2)
  },
  iconBg: {
    height: "100%",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      width: 75,
      height: "100%",
      background: theme.palette.warning.light
    },
    "&::after": {
      position: "absolute",
      content: '""',
      zIndex: -1,
      right: 75,
      top: 0,
      borderRight: `50px solid ${theme.palette.warning.light}`,
      borderTop: `150px solid transparent`,
      borderBottom: `150px solid transparent`,
      width: 0
    }
  },
  icon: {
    fontSize: `40px !important`
  }
}));

function ServicesGeneral() {
  const classes = styles();
  return (
    <Grid container spacing={2} className={classes.marginBt}>
      <Grid item xs={12}>
        <Typography variant="h5">
          <b>Our Services</b>
        </Typography>
        <Typography color="textSecondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.form}>
          <Box display="flex" className={classes.borderService}>
            <Box my={3} mx={2} flexBasis="66%" className={classes.column1}>
              <Typography variant="h6">
                <b>Professional Services</b>
              </Typography>
              <Typography color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Box>
            <Box flexBasis="34%" textAlign="center" className={classes.iconBg}>
              <LocalAtmIcon className={classes.icon} />
            </Box>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.form}>
          <Box display="flex" className={classes.borderService}>
            <Box my={3} mx={2} flexBasis="66%" className={classes.column1}>
              <Typography variant="h6">
                <b>Support 24/7</b>
              </Typography>
              <Typography color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Box>
            <Box flexBasis="34%" textAlign="center" className={classes.iconBg}>
              <HelpIcon className={classes.icon} />
            </Box>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.form}>
          <Box display="flex" className={classes.borderService}>
            <Box my={3} mx={2} flexBasis="66%" className={classes.column1}>
              <Typography variant="h6">
                <b>Free ship</b>
              </Typography>
              <Typography color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Box>
            <Box flexBasis="34%" textAlign="center" className={classes.iconBg}>
              <LocalCarWashIcon className={classes.icon} />
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default ServicesGeneral;
