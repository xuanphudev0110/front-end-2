import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { ColorTextTypography } from "../../../Core/TypographyColor";
const useStyles = makeStyles(theme => ({
  bgServices: {
    padding: theme.spacing(4, 0),
    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: `0px 0px 3px ${theme.palette.grey[800]}`
  },
  styleIcon: {
    width: 90,
    height: 90,
    lineHeight: 8.7,
    borderRadius: 99,
    textAlign: "center",
    background: "#d5e9e9"
  },
  styleIcon2: {
    width: 40,
    height: 40,
    position: "absolute",
    right: "28%",
    top: "10%",
    borderRadius: 99,
    background: "#f4e277"
  },
  styleIcon3: {
    width: 40,
    height: 40,
    position: "absolute",
    right: "28%",
    bottom: "40%",
    borderRadius: 99,
    background: "#f4e277"
  },
  icon1: {
    fontSize: "60px"
  }
}));
function Service() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12} md={4}>
        <Box className={classes.bgServices}>
          <div className={classes.styleIcon}>
            <LocalShippingIcon color="primary" className={classes.icon1} />
          </div>
          <div className={classes.styleIcon2} />
          <Box my={1}>
            <Typography>
              <b>FREE SHIPPING</b>
            </Typography>
          </Box>
          <ColorTextTypography>For all order over 99$</ColorTextTypography>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={4}>
        <Box className={classes.bgServices}>
          <div className={classes.styleIcon}>
            <AccessAlarmsIcon color="primary" className={classes.icon1} />
          </div>
          <div className={classes.styleIcon3} />
          <Box my={1}>
            <Typography>
              <b>DELIVERY ON TIME</b>
            </Typography>
          </Box>
          <ColorTextTypography>If good have prolems</ColorTextTypography>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} md={4}>
        <Box className={classes.bgServices}>
          <div className={classes.styleIcon}>
            <CreditCardIcon color="primary" className={classes.icon1} />
          </div>
          <div className={classes.styleIcon2} />
          <Box my={1}>
            <Typography>
              <b>SECURE PAYMENT</b>
            </Typography>
          </Box>
          <ColorTextTypography>100% secure payment</ColorTextTypography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Service;
