import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FacebookIcon from "@material-ui/icons/Facebook";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import { ColorTextTypography } from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 600,
    paddingBottom: "8px",
    marginBottom: "16px",
    borderBottom: `2px solid ${orange[500]}`
  },
  icon: {
    color: "#ab967f",
    "& > svg": {
      marginRight: "4px",
      cursor: "pointer",
      "&:hover": {
        color: orange[500]
      },
      "&:nth-child(5)": {
        marginRight: "0px"
      }
    }
  }
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ColorTextTypography className={classes.title}>
        CONTACT US
      </ColorTextTypography>
      <ColorTextTypography gutterBottom variant="body2">
        A108 Adam Street
      </ColorTextTypography>
      <ColorTextTypography gutterBottom variant="body2">
        New York, NY 535022
      </ColorTextTypography>
      <ColorTextTypography gutterBottom variant="body2">
        United States
      </ColorTextTypography>
      <ColorTextTypography gutterBottom variant="body2">
        <b>Phone:</b> +1 5589 55488 55
      </ColorTextTypography>
      <ColorTextTypography gutterBottom variant="body2">
        <b>Email:</b> info@example.com
      </ColorTextTypography>
      <Box className={classes.icon}>
        <FacebookIcon />
        <PhoneIcon />
        <LocationOnIcon />
        <AccountCircleIcon />
        <AddAlertIcon />
      </Box>
    </React.Fragment>
  );
}

export default ContactUs;
