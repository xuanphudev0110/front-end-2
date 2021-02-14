import React from "react";
import PlayerVideo from "../../Core/PlayerVideo";
import videoTeam from "../../Files/Video/team.mp4";
import imageTeam from "../../Files/Images/teamwork.PNG";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import { Grid, Box, CardMedia, IconButton } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useMediaQuery } from "@material-ui/core";
import bgImage from "../../Files/Images/team2.png";
import icon from "../../Files/Images/icon/title-icon.png";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";
import orange from "@material-ui/core/colors/orange";
import ReadMoreV2 from "../../Core/ReadMoreV2";

const useStyles = makeStyles(theme => ({
  eventBg: {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${bgImage}") fixed center center`,
    backgroundSize: "cover",
    padding: theme.spacing(12, 0)
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    marginBottom: theme.spacing(2)
  },
  btnPlayCircle: {
    color: "#ab967f",
    cursor: "pointer",
    fontSize: theme.spacing(10),
    "&:hover": {
      color: orange[500]
    }
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ModalVideoAbout() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={classes.eventBg}>
      <Grid container justify="center" alignItems="center" direction="column">
        <OrangeTypography variant="h5" paragraph>
          <b>Our Team</b>
        </OrangeTypography>
        <CardMedia
          component="img"
          image={icon}
          title="Icon"
          className={classes.icon}
        />
        <Box mb={2}>
          <PlayCircleFilledWhiteOutlinedIcon
            className={classes.btnPlayCircle}
            onClick={handleClickOpen}
          />
        </Box>
        <ColorTextTypography align="center">
          They call him Flipper Flipper faster than lightning no one you see is
          smarter than he black gold all of them
          <br />
          had hair of gold like their mother the young one in curls never heard
          the word.
        </ColorTextTypography>
        <Dialog
          fullScreen={matches}
          open={open}
          TransitionComponent={Transition}
          maxWidth="md"
          keepMounted
          scroll="body"
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <OrangeTypography variant="h6">
                <b>Our Team</b>
              </OrangeTypography>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            <ReadMoreV2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </ReadMoreV2>
            <Box mt={2}>
              <PlayerVideo image={imageTeam} video={videoTeam} />
            </Box>
          </DialogContent>
        </Dialog>
      </Grid>
    </Box>
  );
}

export default ModalVideoAbout;
