import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, CardMedia, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cartEmpty from "../../Files/Images/cart-empty.png";

const useStyles = makeStyles({
  backToHome: {
    border: "2px solid #130d1a",
    background: "transparent",
    padding: "10px 20px",
    fontSize: 13,
    marginBottom: 16,
    fontFamily: `"Days One", sans-serif`,
    boxShadow: `4px 4px 0 0px rgba(#130d1a, 0.5)`,
    position: "relative",
    transition: "0.3s",
    outline: "none",
    cursor: "pointer",
    borderRadius: "0 20px",
    overflow: "hidden",
    "&::after": {
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      height: 0,
      content: '""',
      background: "#130d1a",
      transition: "0.3s",
      zIndex: -1
    },
    "&:hover": {
      color: "#fff",
      letterSpacing: 2,
      "&::after": {
        height: "100%"
      }
    },
    "&::active": {
      boxShadow: "0 0 0 0px rgba(#000, 0.5)"
    }
  },
  imgCart: {
    marginTop: 16,
    height: 300,
    width: 300
  }
});

export default function EmptyCart() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container alignItems="center" direction="column">
        <CardMedia
          component="img"
          image={cartEmpty}
          className={classes.imgCart}
        />
        <Box my={2}>
          <Typography variant="h5">
            <b>Ooops your cart is empty!</b>
          </Typography>
        </Box>
        <Button component={RouterLink} to="/" className={classes.backToHome}>
          BACK TO HOME PAGE
        </Button>
      </Grid>
    </React.Fragment>
  );
}
