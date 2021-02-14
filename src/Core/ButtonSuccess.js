import { withStyles, Button } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

/* nút màu xanh lá cây */
const ButtonSuccess = withStyles(theme => ({
  text: {
    color: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.main}`,
    padding: "2px 10px",
    textTransform: "none"
  },
  contained: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.success.dark
    }
  },
  outlined: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.main}`,
    "&:hover": {
      backgroundColor: green[50]
    }
  }
}))(Button);
export default ButtonSuccess;
