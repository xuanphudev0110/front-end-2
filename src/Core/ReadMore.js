import React from "react";
import clsx from "clsx";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { ColorTextTypography } from "./TypographyColor";
import { ColorButtonNormal } from "./ButtonOrange";

const useStyles = makeStyles(theme => ({
  showText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical"
  },
  readLess: {
    "-webkit-line-clamp": 5,
    position: "relative",
    "&::before": {
      position: "absolute",
      width: "100%",
      height: theme.spacing(3),
      content: '""',
      bottom: 0,
      background: `linear-gradient(rgba(48, 29, 4, 0.4), rgba(48, 29, 4, 1))`
    }
  },
  readMore: {
    "-webkit-line-clamp": 1000
  }
}));
function ReadMore({ children }) {
  const [readMore, setReadMore] = React.useState(false);
  const handleMoreLess = () => {
    setReadMore(!readMore);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <ColorTextTypography
        className={clsx(
          readMore === false ? classes.readLess : classes.readMore,
          classes.showText
        )}
      >
        {children}
      </ColorTextTypography>
      <ColorButtonNormal
        onClick={handleMoreLess}
        variant="contained"
        color="primary"
        endIcon={readMore === false ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      >
        {readMore === false ? <span>Read More</span> : <span>Read Less</span>}
      </ColorButtonNormal>
    </React.Fragment>
  );
}

export default ReadMore;
