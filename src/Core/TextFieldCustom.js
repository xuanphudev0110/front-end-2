import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const CustomTextField = withStyles(theme => ({
  root: {
    "& > div": {
      color: "#ab967f !important"
    },
    "& label.Mui-focused": {
      color: "#ab967f"
    },
    "& > div > input::placeholder": {
      color: "#ab967f"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ab967f"
      },
      "&:hover fieldset": {
        borderColor: "#ab967f"
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main
      }
    }
  }
}))(TextField);

export const TextFieldRadius = withStyles(theme => ({
  root: {
    "& > div": {
      borderRadius: 99,
      color: "#ab967f !important"
    },
    "& label.Mui-focused": {
      color: theme.palette.common.white
    },
    "& > div > input::placeholder": {
      color: `${theme.palette.common.white} !important`
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.common.white
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.white
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main
      }
    }
  }
}))(TextField);
