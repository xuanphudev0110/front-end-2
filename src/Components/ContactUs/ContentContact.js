import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import content from "../../Files/Images/bg-content.png";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(8, 3)
    }
  },
  textColor: {
    marginLeft: theme.spacing(2)
  }
}));

function ContentContact() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <OrangeTypography variant="h5" gutterBottom>
        <b>Call us we love to hear from you</b>
      </OrangeTypography>
      <Box className={classes.textColor}>
        <ColorTextTypography variant="body2">
          <b>Email:</b> info@example.com
        </ColorTextTypography>
        <ColorTextTypography variant="body2">
          Call or e-mail us for help with any aspect of your purchase, online or
          offline.
        </ColorTextTypography>
        <ColorTextTypography variant="body2" paragraph>
          Call toll-free: 877 000 0000
        </ColorTextTypography>
        <ColorTextTypography variant="body2">
          Call toll-free: 866 000 0000
        </ColorTextTypography>
        <ColorTextTypography variant="body2" paragraph>
          Toll-free fax: 877 000 0000
        </ColorTextTypography>
      </Box>
      <OrangeTypography variant="h5" gutterBottom>
        <b>Mailing Address</b>
      </OrangeTypography>
      <Box className={classes.textColor}>
        <ColorTextTypography variant="body2">
          All Apples The Apple Farm Therapy
        </ColorTextTypography>
        <ColorTextTypography variant="body2">
          250 Lorem Ipsum Street
        </ColorTextTypography>
        <ColorTextTypography variant="body2">4th Floor</ColorTextTypography>
        <ColorTextTypography variant="body2">
          Jaofanr, Caknan 109935
        </ColorTextTypography>
        <ColorTextTypography variant="body2">Kiangab</ColorTextTypography>
      </Box>
    </div>
  );
}

export default ContentContact;
