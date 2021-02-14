import React from "react";
import { withStyles } from "@material-ui/core/styles";
import banner from "../../../Files/Images/bg-countdown.jpg";
import {
  Grid,
  Box,
  CardMedia,
  Tooltip,
  Typography,
  Divider,
  Link
} from "@material-ui/core";
import {
  OrangeTypography,
  ColorTextTypography
} from "../../../Core/TypographyColor";
import icon from "../../../Files/Images/icon/title-icon.png";
import { ColorButtonNormal } from "../../../Core/ButtonOrange";

const styles = theme => ({
  root: {
    background: `url("${banner}") no-repeat center center`,
    backgroundSize: "cover",
    padding: theme.spacing(10, 2)
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    margin: "0 auto"
  },
  bgTime: {
    background: "#fff"
  },
  buynow: {
    padding: "10px 20px"
  }
});

const TooltipCustom = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  arrow: {
    color: theme.palette.common.white
  }
}))(Tooltip);

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time > 0) {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    } else {
      this.setState({
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
      });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.seconds === undefined ? (
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                textAlign="center"
                my={14}
                display="flex"
                justifyContent="center"
              >
                <OrangeTypography variant="h5">
                  <b>
                    Promotion has ended. We will hold a new promotion soon.
                    Thank you!!!
                  </b>
                </OrangeTypography>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <React.Fragment>
            <Grid container>
              <Grid item md={6} xs={12}>
                <Box textAlign="center">
                  <OrangeTypography variant="h4">
                    <b>Deal Of The Week</b>
                  </OrangeTypography>
                  <Box mt={1} mb={3}>
                    <CardMedia
                      component="img"
                      image={icon}
                      title="Icon"
                      className={classes.icon}
                    />
                  </Box>
                  <ColorTextTypography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do ipsum dolor sit amet, consectetur adipisicing elit
                  </ColorTextTypography>
                  <Box
                    my={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box className={classes.bgTime} py={1} px={2} mr={4}>
                      <OrangeTypography variant="h4">
                        <b>{this.leading0(this.state.days)}</b>
                      </OrangeTypography>
                      <ColorTextTypography>DAYS</ColorTextTypography>
                    </Box>
                    <Box className={classes.bgTime} py={1} px={2} mr={4}>
                      <OrangeTypography variant="h4">
                        <b>{this.leading0(this.state.hours)}</b>
                      </OrangeTypography>
                      <ColorTextTypography>HRS</ColorTextTypography>
                    </Box>
                    <Box className={classes.bgTime} py={1} px={2} mr={4}>
                      <OrangeTypography variant="h4">
                        <b>{this.leading0(this.state.minutes)}</b>
                      </OrangeTypography>
                      <ColorTextTypography>MINS</ColorTextTypography>
                    </Box>
                    <Box className={classes.bgTime} py={1} px={2}>
                      <OrangeTypography variant="h4">
                        <b>{this.leading0(this.state.seconds)}</b>
                      </OrangeTypography>
                      <ColorTextTypography>SECS</ColorTextTypography>
                    </Box>
                  </Box>
                  <TooltipCustom
                    interactive
                    title={
                      <Box>
                        <Typography>
                          <b>Title</b>
                        </Typography>
                        <Box my={1}>
                          <Divider />
                        </Box>
                        <Typography component="span" variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do ipsum dolor sit amet, consectetur
                          adipisicing elit.
                        </Typography>
                        &nbsp;
                        <Typography component="span" variant="body2">
                          <Link href="#" style={{ cursor: "pointer" }}>
                            Click here
                          </Link>
                        </Typography>
                      </Box>
                    }
                    placement="top"
                    arrow
                  >
                    <ColorButtonNormal className={classes.buynow}>
                      BUY NOW
                    </ColorButtonNormal>
                  </TooltipCustom>
                </Box>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Countdown);
