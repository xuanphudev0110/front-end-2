import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { Grid, Box, CardMedia, Typography, Button } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import popup from "../../../Files/Images/shop/46.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  spanColor: {
    color: theme.palette.primary.main
  },
  btnCode: {
    borderRadius: 99,
    fontWeight: "bold",
    marginTop: theme.spacing(2)
  },
  gridContainer: {
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      textAlign: "center"
    }
  },
  cardImg: {
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      height: "80%",
      margin: "0 auto"
    }
  }
}));

export default function Popup() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const modalTimer = React.useRef(null);

  React.useEffect(() => {
    // the if (cancelCall) part in here was pointless
    // because initial state is always false
    modalTimer.current = setTimeout(() => setOpen(true), 4000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Box display="flex" justifyContent="flex-end">
          <HighlightOffOutlinedIcon
            onClick={handleClose}
            color="error"
            style={{ cursor: "pointer", fontSize: 32 }}
          />
        </Box>
        <DialogContent>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item sm={6}>
              <CardMedia
                component="img"
                image={popup}
                className={classes.cardImg}
              />
            </Grid>
            <Grid item sm={6}>
              <Box>
                <Typography variant={matches ? "h5" : "h4"}>
                  <b>
                    Do you want <span className={classes.spanColor}>25%</span>{" "}
                    off your first order?
                  </b>
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.btnCode}
                >
                  Get my exclusive code
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
