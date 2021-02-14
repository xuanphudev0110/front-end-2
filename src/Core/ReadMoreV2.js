import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  showText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical"
  },
  readLess: {
    "-webkit-line-clamp": 3
  },
  readMore: {
    "-webkit-line-clamp": 1000
  },
  cursor: {
    cursor: "pointer"
  }
}));
function ReadMoreV2({ children }) {
  const [readMore, setReadMore] = React.useState(false);
  const handleMoreLess = () => {
    setReadMore(!readMore);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography
        className={clsx(
          readMore === false ? classes.readLess : classes.readMore,
          classes.showText
        )}
      >
        {children}
      </Typography>
      <Typography
        onClick={handleMoreLess}
        className={classes.cursor}
        color="primary"
      >
        {readMore === false ? <span>Read More</span> : <span>Read Less</span>}
      </Typography>
    </React.Fragment>
  );
}

export default ReadMoreV2;
