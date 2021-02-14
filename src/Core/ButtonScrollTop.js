import React from "react";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  btnScrollTop: {
    background: orange[500],
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}));
function ButtonScrollTop({ ...props }) {
  const classes = useStyles();
  return (
    <Fab
      // color="secondary"
      size="small"
      className={classes.btnScrollTop}
      aria-label="scroll back to top"
      // overiew toàn bộ thuộc tính đằng trước
      {...props}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default ButtonScrollTop;
