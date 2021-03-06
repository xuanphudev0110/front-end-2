import React from "react";
import Typed from "react-typed";
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  makeStyles,
  Tooltip,
  Divider,
  withStyles,
  Hidden,
  IconButton,
  TextField,
  Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { ColorButtonNormal } from "../../../Core/ButtonOrange";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../../Core/TypographyColor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import image1 from "../../../Files/Images/card-shape.png";
import image2 from "../../../Files/Images/shop1.png";
import icon1 from "../../../Files/Images/icon/tiki.jpg";
import icon2 from "../../../Files/Images/icon/tiki2.jpg";
import icon3 from "../../../Files/Images/icon/lazada.png";
import shape from "../../../Files/Images/shape.jpg";

const useStyles = makeStyles(theme => ({
  bgForm: {
    background: `#f6f6f6`,
    marginBottom: theme.spacing(4)
  },
  animate: {
    margin: "0 auto",
    marginTop: theme.spacing(3),
    width: 150,
    animation: `$move 2s ease-in-out infinite alternate`
  },
  "@keyframes move": {
    "0%": { transform: `translateY(30px)` },
    "100%": {
      transform: `translateY(0)`
    }
  },
  couponTag: {
    cursor: `pointer`,
    // padding: `8px`,
    background: `url("${shape}")`,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 500,
    color: `rgb(13, 92, 182)`,
    position: `relative`,
    margin: `16px 12px 0px 0px`,
    "&:first-child": {
      marginTop: 0
    }
  },
  couponRotate: {
    "&::after, &::before": {
      content: '""',
      width: 14,
      height: 14,
      left: 74,
      backgroundColor: `#f6f6f6`,
      borderWidth: 1,
      borderStyle: `solid`,
      borderColor: `transparent rgb(13, 92, 182) rgb(13, 92, 182) transparent`,
      borderImage: `initial`,
      position: `absolute`,
      marginTop: `-5px`,
      borderRadius: `50%`
    },
    "&::after": {
      bottom: -9,
      transform: `rotate(-135deg)`
    },
    "&::before": {
      top: -4,
      transform: `rotate(45deg)`
    }
  },
  cardRoot: {
    width: "85%",
    margin: "0 auto"
  },
  borderCenter: {
    borderRight: `1px dashed ${theme.palette.primary.main}`
  },
  colorText: {
    color: theme.palette.grey[300]
  },
  subText: {
    color: theme.palette.grey[400]
  },
  mdActive: {
    margin: theme.spacing(4, 0)
  }
}));

const TooltipLight = withStyles(
  theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      boxShadow: theme.shadows[1]
    },
    arrow: {
      "&:before": {
        boxShadow: theme.shadows[1]
      },
      color: theme.palette.common.white
    }
  }),
  { name: "AtomTooltipLight" }
)(Tooltip);

function BannerShop() {
  const classes = useStyles();
  const information = (
    <Box p={1}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Typography color="textSecondary">Code:</Typography>
        </Grid>
        <Grid item xs={9}>
          <CopyClipBoard />
        </Grid>
      </Grid>
      <Box my={1}>
        <Divider />
      </Box>
      <Typography variant="body2" color="textSecondary">
        <span>Time: </span>
        <b>04/03 - 12/12/2021</b>
      </Typography>
      <Box my={1}>
        <Divider />
      </Box>
      <Typography variant="body2" gutterBottom>
        <b>Condition</b>
      </Typography>
      <Box display="flex">
        <li style={{ fontSize: 14, marginTop: 4 }} />
        <Typography style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur donut
        </Typography>
      </Box>
      <Box display="flex">
        <li style={{ fontSize: 14, marginTop: 4 }} />
        <Typography style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
      </Box>
      <Box display="flex">
        <li style={{ fontSize: 14, marginTop: 4 }} />
        <Typography style={{ fontSize: 14 }}>
          Duis aute irure dolor in reprehenderit in voluptate
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Box className={classes.bgForm}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} lg={4}>
          <Box textAlign="center" className={classes.mdActive}>
            <OrangeTypography variant="h5">
              Best Collection of This Month
            </OrangeTypography>
            <ColorTextTypography gutterBottom>
              Lorem Ipsum is simply dummy text of the printing.
            </ColorTextTypography>
            <ColorTextTypography paragraph>
              <Typed
                strings={[
                  "Welcome to Bird Shop!!!",
                  "Discount when ordering online.",
                  "Or pay through paypal.",
                  "Let call us: (+84)123456789",
                  "And click submit button",
                  "Lorem ipsum context mate dohuis"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              ></Typed>
            </ColorTextTypography>
            <ColorButtonNormal>Buy Now</ColorButtonNormal>
            <CardMedia
              component="img"
              image={image1}
              className={classes.animate}
            />
          </Box>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={4}>
            <CardMedia
              component="img"
              image={image2}
              className={classes.cardRoot}
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={6} lg={4}>
          <div className={classes.couponTag}>
            <div className={classes.couponRotate} />
            <Box display="flex">
              <Box p={1} flexBasis="12%" className={classes.borderCenter}>
                <CardMedia
                  component="img"
                  image={icon1}
                  style={{ width: 65 }}
                />
              </Box>
              <Box
                p={1}
                flexBasis="76%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography className={classes.colorText}>
                  <b>Freeship from 04/03 - 12/12</b>
                </Typography>
                <Typography variant="body2" className={classes.subText}>
                  For all customer
                </Typography>
              </Box>
              <Box p={1} flexBasis="12%" textAlign="right">
                <TooltipLight title={information} interactive arrow>
                  <InfoOutlinedIcon color="primary" />
                </TooltipLight>
              </Box>
            </Box>
          </div>
          <div className={classes.couponTag}>
            <div className={classes.couponRotate} />
            <Box display="flex">
              <Box p={1} flexBasis="12%" className={classes.borderCenter}>
                <CardMedia
                  component="img"
                  image={icon2}
                  style={{ width: 65 }}
                />
              </Box>
              <Box
                p={1}
                flexBasis="76%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography className={classes.colorText}>
                  <b>Freeship from 04/03 - 12/12</b>
                </Typography>
                <Typography variant="body2" className={classes.subText}>
                  For all customer
                </Typography>
              </Box>
              <Box p={1} flexBasis="12%" textAlign="right">
                <TooltipLight title={information} interactive arrow>
                  <InfoOutlinedIcon color="primary" />
                </TooltipLight>
              </Box>
            </Box>
          </div>
          <div className={classes.couponTag}>
            <div className={classes.couponRotate} />
            <Box display="flex">
              <Box p={1} flexBasis="12%" className={classes.borderCenter}>
                <CardMedia
                  component="img"
                  image={icon3}
                  style={{ width: 65 }}
                />
              </Box>
              <Box
                p={1}
                flexBasis="76%"
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography className={classes.colorText}>
                  <b>Freeship from 04/03 - 12/12</b>
                </Typography>
                <Typography variant="body2" className={classes.subText}>
                  For all customer
                </Typography>
              </Box>
              <Box p={1} flexBasis="12%" textAlign="right">
                <TooltipLight title={information} interactive arrow>
                  <InfoOutlinedIcon color="primary" />
                </TooltipLight>
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BannerShop;

function makeid(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function CopyClipBoard() {
  const [name, setName] = React.useState(makeid(8));
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleInput = e => {
    setName(e.target.value);
    setCopied(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        <Box mr={1}>
          <TextField
            id="id-code"
            size="small"
            disabled
            variant="outlined"
            value={name}
            onChange={handleInput}
            inputProps={{
              style: {
                padding: 5
              }
            }}
          />
        </Box>
        <Box textAlign="right">
          <CopyToClipboard text={name} onCopy={() => setCopied(true)}>
            <IconButton size="small" onClick={handleClick}>
              <FileCopyOutlinedIcon fontSize="inherit" />
            </IconButton>
          </CopyToClipboard>
        </Box>
      </Box>
      <Box mt={0.5}>
        {copied ? (
          <Snackbar
            style={{ top: -100 }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
          >
            <Alert variant="filled" onClose={handleClose} severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
        ) : null}
      </Box>
    </React.Fragment>
  );
}
