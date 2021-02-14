import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import PaypalButton from "./PaypalButton";
import { Container, Button, Typography, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  gridReverse: {
    marginBottom: theme.spacing(2),
    ["@media (max-width:400px)"]: {
      flexDirection: "column-reverse"
    }
  },
  btnReverse: {
    ["@media (max-width:400px)"]: {
      marginBottom: theme.spacing(2)
    }
  },
  typoError: {
    color: theme.palette.error.main
  },
  btnClear: {
    borderRadius: 99,
    background: theme.palette.error.main
  }
}));

export default function CartTotals({ value, history }) {
  const { cartSubTotal, clearCart, cartTotal, cartTax } = value;

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid container justify="space-between" className={classes.gridReverse}>
        <Grid item>
          <Box>
            <Typography
              component="span"
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Subtotal:
            </Typography>
            &nbsp;
            <Typography component="span">
              <b>{cartSubTotal}$</b>
            </Typography>
          </Box>
          <Box>
            <Typography
              component="span"
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Cart Tax:
            </Typography>
            &nbsp;
            <Typography component="span">
              <b>{cartTax}$</b>
            </Typography>
          </Box>
          <Box mb={1}>
            <Typography
              component="span"
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Cart Total:
            </Typography>
            &nbsp;
            <Typography
              component="span"
              variant="h6"
              className={classes.typoError}
            >
              <b>{cartTotal}$</b>
            </Typography>
          </Box>
          <PaypalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
          />
        </Grid>
        <Grid item className={classes.btnReverse}>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/cart"
            className={classes.btnClear}
            onClick={() => clearCart()}
          >
            Clear Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
