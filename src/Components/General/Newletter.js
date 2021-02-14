import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { ColorButton } from "../../Core/ButtonOrange";
import { TextFieldRadius } from "../../Core/TextFieldCustom";
import event from "../../Files/Images/event-bg2.jpg";
import { ColorTextTypography } from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  eventBg: {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${event}") fixed center center`,
    backgroundSize: "cover",
    padding: theme.spacing(10, 0)
  }
}));

function Newletter() {
  const classes = useStyles();

  return (
    <Box className={classes.eventBg}>
      <Grid container justify="center" alignItems="center" direction="column">
        <Rating name="read-only" value={5} readOnly />
        <Box mt={1}>
          <ColorTextTypography variant="h4" gutterBottom>
            Sign Up for a Newsletter
          </ColorTextTypography>
        </Box>
        <ColorTextTypography>
          Get 20% discount for customers when paying via zaloPay
        </ColorTextTypography>
        <Box mt={2} display="flex" justifyContent="center">
          <TextFieldRadius
            variant="outlined"
            size="small"
            placeholder="Enter your email"
          />
          &nbsp;&nbsp;&nbsp;
          <ColorButton>Subscribe</ColorButton>
        </Box>
      </Grid>
    </Box>
  );
}

export default Newletter;
