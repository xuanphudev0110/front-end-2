import React from "react";
import {
  Grid,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Box,
  Hidden
} from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const useStyles = makeStyles(theme => ({
  product: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  cardHeader: {
    position: "relative",
    ["@media (max-width:500px)"]: {
      flexDirection: "column"
    }
  },
  iconDelete: {
    position: "absolute",
    top: 0,
    zIndex: 10,
    left: 0,
    color: theme.palette.error.main
  },
  typoError: {
    color: theme.palette.error.main
  },
  quantity: {
    border: "1px solid #e0e0e0",
    cursor: "pointer",
    padding: theme.spacing(0.5, 1)
  },
  numberQuantity: {
    borderRight: 0,
    borderLeft: 0,
    cursor: "auto"
  }
}));

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <CardHeader
            className={classes.cardHeader}
            action={
              <IconButton
                className={classes.iconDelete}
                aria-label="settings"
                onClick={() => removeItem(id)}
              >
                <DeleteForeverOutlinedIcon />
              </IconButton>
            }
            avatar={
              <Avatar
                alt={`product${id}`}
                src={img}
                variant="square"
                className={classes.product}
              />
            }
            title={
              <React.Fragment>
                <Hidden xsDown>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textSecondary"
                  >
                    Product:
                  </Typography>
                </Hidden>
                &nbsp;
                <Typography component="span">
                  <b>{title}</b>
                </Typography>
              </React.Fragment>
            }
          />
        </Grid>
        <Hidden xsDown>
          <Grid item>
            <Typography component="span" variant="body2" color="textSecondary">
              Price:
            </Typography>
            &nbsp;
            <Typography component="span" className={classes.typoError}>
              <b>{price}$</b>
            </Typography>
          </Grid>
        </Hidden>

        <Grid item style={{ textAlign: "right" }}>
          <Box>
            <Typography
              component="span"
              variant="body2"
              className={classes.quantity}
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className={clsx(classes.quantity, classes.numberQuantity)}
            >
              {count}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              className={classes.quantity}
              onClick={() => {
                increment(id);
              }}
            >
              +
            </Typography>
          </Box>
          <Box mt={0.5}>
            <Typography component="span" variant="body2" color="textSecondary">
              Item total:
            </Typography>
            &nbsp;
            <Typography component="span" className={classes.typoError}>
              <b>{total}$</b>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box my={1}>
        <Divider />
      </Box>
    </React.Fragment>
  );
}
