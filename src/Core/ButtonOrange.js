import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

export const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    borderRadius: 99,
    padding: "0 20px",
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Button);

export const ColorButtonLarge = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    borderRadius: 99,
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Button);

export const ColorButtonNormal = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    textTransform: "none",
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Button);
