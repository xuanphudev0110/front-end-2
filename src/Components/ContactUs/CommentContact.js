import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ColorButtonLarge } from "../../Core/ButtonOrange";
import { CustomTextField } from "../../Core/TextFieldCustom";
import content from "../../Files/Images/bg-content.png";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  content: {
    background: `url("${content}")`,
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(8, 3)
    }
  }
}));

function CommentContact() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <OrangeTypography variant="h5" gutterBottom>
        <b>Leave a comment</b>
      </OrangeTypography>
      <ColorTextTypography variant="body2" paragraph>
        Our staff will call back later and answer your questions.
      </ColorTextTypography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Enter your email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Enter your name"
          ></CustomTextField>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField
            multiline
            rows={5}
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Enter your message"
          />
        </Grid>
        <Grid item>
          <ColorButtonLarge>Send message</ColorButtonLarge>
        </Grid>
      </Grid>
    </div>
  );
}

export default CommentContact;
