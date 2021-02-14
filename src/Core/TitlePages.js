import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import inteface from "../Files/Images/contact-interface.png";

const useStyles = makeStyles({
  title: {
    background: `url("${inteface}") no-repeat 0 -410px`,
    color: "#1f1005",
    fontSize: "25px",
    fontStyle: "italic",
    fontWeight: "bold",
    height: "90px",
    left: 0,
    paddingTop: 5,
    lineHeight: "118px",
    position: "absolute",
    textAlign: "center",
    textShadow: "0 1px #ffc600",
    width: 162,
    zIndex: 3
  }
});

function TitlePages({ name }) {
  const classes = useStyles();
  return <Typography className={classes.title}>{name}</Typography>;
}

export default TitlePages;
