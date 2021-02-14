import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import avatar from "../Files/Images/avatar.png";

const useStyles = makeStyles(theme => ({
  cardImg: {
    width: theme.spacing(15)
  }
}));

function CustomAvatar() {
  const classes = useStyles();
  return (
    <Link to="/">
      <CardMedia
        component="img"
        src={avatar}
        className={classes.cardImg}
      ></CardMedia>
    </Link>
  );
}

export default CustomAvatar;
