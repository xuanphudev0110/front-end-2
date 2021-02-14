import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

const useStyles = makeStyles(theme => ({
  svgIcon: {
    width: 30,
    "& > path": {
      fill: orange[500]
    }
  },
  svgIcon2: {
    width: 30,
    transform: "rotate(180deg)",
    "& > path": {
      fill: orange[500]
    }
  }
}));
function SvgIconComment({ viewType }) {
  const classes = useStyles();
  return (
    <svg
      className={viewType === "normal" ? classes.svgIcon : classes.svgIcon2}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 266.5 161"
      enableBackground="new 0 0 266.5 161"
    >
      <path
        d="M30,157.5c-6.7,0-11-1.3-13-4c-9.3-11.3-14-20.3-14-27c0-12.7,12.7-33.7,38-63c35.3-40.7,58.3-61,69-61
							c2,0,3,1,3,3s-1.3,4.7-4,8c-10,14-16.7,24-20,30l-6,10c10-3.3,18-5,24-5c12,2,18,9.3,18,22c0,20-12,39.5-36,58.5
							S45.3,157.5,30,157.5z M165,157.5c-6.7,0-11-1.3-13-4c-9.3-11.3-14-20.3-14-27c0-12.7,12.7-33.7,38-63c35.3-40.7,58.3-61,69-61
							c2,0,3,1,3,3s-1.3,4.7-4,8c-10,14-16.7,24-20,30l-6,10c10-3.3,18-5,24-5c12,2,18,9.3,18,22c0,20-12,39.5-36,58.5
							C200,148,180.3,157.5,165,157.5z"
      ></path>
    </svg>
  );
}

export default SvgIconComment;
