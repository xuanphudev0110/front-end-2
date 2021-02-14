import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

export const OrangeTypography = withStyles({
  root: {
    color: orange[500]
  }
})(Typography);

export const ColorTextTypography = withStyles({
  root: {
    color: "#ab967f"
  }
})(Typography);
