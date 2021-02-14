import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import content from "../../Files/Images/bg-content.png";
import contact from "../../Files/Images/contact-bg.jpg";

const useStyles = makeStyles(theme => ({
  bg: {
    background: `url("${contact}") center center`
  },
  bgFooter: {
    background: `url("${content}")`,
    padding: theme.spacing(3, 2)
  },
  divider: {
    background: "#ab967f"
  }
}));
function Policy() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div className={classes.bgFooter}>
        <OrangeTypography>
          <b>Policy</b>
        </OrangeTypography>
        <Grid container spacing={2}>
          <Grid item>
            <ColorTextTypography variant="body2">Support</ColorTextTypography>
          </Grid>
          <Grid item>
            <ColorTextTypography variant="body2">Security</ColorTextTypography>
          </Grid>
          <Grid item>
            <ColorTextTypography variant="body2">Privacy</ColorTextTypography>
          </Grid>
          <Grid item>
            <ColorTextTypography variant="body2">Rules</ColorTextTypography>
          </Grid>
          <Grid item>
            <ColorTextTypography variant="body2">
              Installment
            </ColorTextTypography>
          </Grid>
          <Grid item>
            <ColorTextTypography variant="body2">
              Recruitment
            </ColorTextTypography>
          </Grid>
          <Grid item>
            <ColorTextTypography variant="body2">
              Lorem Ipsum
            </ColorTextTypography>
          </Grid>
          <Grid item xs={12}>
            <ColorTextTypography variant="body2" align="center">
              &copy; Bird Shop | All Reserved 2021
            </ColorTextTypography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Policy;
