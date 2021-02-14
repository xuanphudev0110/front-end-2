import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Hidden, CardMedia } from "@material-ui/core";
import ListSchedule from "../../Core/ListSchedule";
import { events } from "../../Data/events";
import content from "../../Files/Images/bg-content.png";
import icon from "../../Files/Images/icon/title-icon.png";

import {
  OrangeTypography,
  ColorTextTypography
} from "../../Core/TypographyColor";

const useStyles = makeStyles(theme => ({
  tabCenter: {
    "& > div > div": {
      justifyContent: "center"
    },
    "& > div > span": {
      display: "none"
    }
  },
  content: {
    background: `url("${content}")`,
    padding: "20px"
  },
  icon: {
    width: theme.spacing(12),
    height: 10,
    margin: theme.spacing(1, 0)
  }
}));

const TabStyle = withStyles(theme => ({
  root: {
    textTransform: "none",
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    marginRight: theme.spacing(1.5),
    borderRadius: 99,
    fontWeight: "bold",
    "&$selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      fontWeight: "bold"
    }
  },
  selected: {}
}))(props => <Tab {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

function EventSchedule() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.content}>
      <Grid container direction="column" alignItems="center">
        <OrangeTypography variant="h5">
          <b>Event Schedule</b>
        </OrangeTypography>
        <CardMedia
          component="img"
          image={icon}
          title="Icon"
          className={classes.icon}
        />
        <ColorTextTypography>Here is our event schedule</ColorTextTypography>
      </Grid>
      <Grid container>
        <Hidden mdDown>
          <Grid item lg={2}></Grid>
        </Hidden>
        <Grid item xs={12} lg={8}>
          <Box className={classes.events} mt={2} textAlign="center">
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              className={classes.tabCenter}
            >
              <TabStyle label="Event 1" {...a11yProps(0)} />
              <TabStyle label="Event 2" {...a11yProps(1)} />
              <TabStyle label="Event 3" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <ListSchedule
                text="Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet
        officia. Eius necessitatibus voluptatem quis labore perspiciatis quia."
                event1="event1"
                events={events}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListSchedule
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                event1="event2"
                events={events}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ListSchedule
                text="Fugit voluptas iusto maiores temporibus autem numquam magnam.
                Fugit voluptas iusto maiores temporibus autem numquam magnam"
                events={events}
              />
            </TabPanel>
          </Box>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default EventSchedule;
