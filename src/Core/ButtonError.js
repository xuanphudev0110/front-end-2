import { withStyles, Button } from "@material-ui/core";

const ButtonError = withStyles(theme => ({
  text: {
    color: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.main}`
  },
  contained: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    }
  },
  outlined: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.error.main,
    padding: "2px 10px",
    textTransform: "none",
    border: `1px solid ${theme.palette.error.main}`
  }
}))(Button);
export default ButtonError;
