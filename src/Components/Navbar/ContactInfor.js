import React from "react";
import Zoom from "@material-ui/core/Zoom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { IconButton, Link, Tooltip, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    transform: "translateX(-50%)",
    right: theme.spacing(2),
    zIndex: 1000
  },
  github: {
    background: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    "&:hover": {
      background: theme.palette.grey[800],
      color: theme.palette.common.white,
      boxShadow: `0 0 0 5px ${theme.palette.grey[300]}`
    }
  },
  facebook: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: `0 0 0 5px ${theme.palette.grey[300]}`
    }
  },
  phone: {
    background: theme.palette.success.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    "&:hover": {
      background: theme.palette.success.main,
      color: theme.palette.common.white,
      boxShadow: `0 0 0 5px ${theme.palette.grey[300]}`
    }
  }
}));
function ContactInfor(props) {
  const { window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <Zoom in={trigger}>
      <div className={classes.root}>
        <Tooltip
          title={<Typography variant="body2">View Source</Typography>}
          placement="left"
          arrow
        >
          <IconButton
            component={Link}
            target="_blank"
            href="https://github.com/xuanphudev0110/front-end-2"
            className={classes.github}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={
            <Typography variant="body2">Chat with me on Facebook</Typography>
          }
          placement="left"
          arrow
        >
          <IconButton
            component={Link}
            target="_blank"
            href="https://www.messenger.com/t/100005475283626"
            className={classes.facebook}
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={<Typography variant="body2">My phone: 0375185272</Typography>}
          placement="left"
          arrow
        >
          <IconButton className={classes.phone}>
            <PhoneAndroidIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Zoom>
  );
}

ContactInfor.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ContactInfor;
