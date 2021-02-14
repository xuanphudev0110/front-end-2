import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Box, Typography, Avatar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ColorTextTypography } from "./TypographyColor";
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  divider: {
    background: "#ab967f"
  },
  time: {
    color: "#ab967f",
    right: 0
  },
  list: {
    paddingLeft: 0
  }
}));

function ListSchedule({ text, events, event1 }) {
  const classes = useStyles();
  return (
    <div>
      <ColorTextTypography>{text}</ColorTextTypography>
      <List dense>
        {events.map((event, idx) => {
          if (event.type === event1)
            return (
              <React.Fragment key={(() => `idx${idx}`)()}>
                <ListItem button className={classes.list}>
                  <ListItemAvatar>
                    <Avatar
                      src={event.avatar}
                      alt="Remy Sharp"
                      className={classes.avatar}
                    />
                  </ListItemAvatar>
                  <Box ml={1}>
                    <Typography color="primary">
                      <b>{event.name}</b>
                    </Typography>
                    <ColorTextTypography variant="body2">
                      {event.content}
                    </ColorTextTypography>
                  </Box>
                  <ListItemSecondaryAction className={classes.time}>
                    {event.time}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider className={classes.divider} />
              </React.Fragment>
            );
          return null;
        })}
      </List>
    </div>
  );
}

ListSchedule.propTypes = {
  text: PropTypes.string,
  events: PropTypes.any,
  event1: PropTypes.string
};

export default ListSchedule;
