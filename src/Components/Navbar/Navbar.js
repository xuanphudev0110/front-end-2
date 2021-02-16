import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  withStyles,
  Grid,
  SwipeableDrawer,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import CustomAvatar from "../../Core/CustomAvatar";
import { pages } from "../../Data/pages";

const styleSheet = theme => ({
  list: {
    width: 300,
    "& > a": {
      textDecoration: "none",
      textAlign: "right",
      color: theme.palette.primary.main,
      "&:hover": {
        color: theme.palette.grey[800]
      }
    }
  },
  padding: {
    paddingLeft: theme.spacing(3),
    cursor: "pointer",
    "& > a": {
      textDecoration: "none",
      color: theme.palette.common.white,
      display: "flex",
      alignItems: "center",
      "& > svg": {
        paddingRight: theme.spacing(0.25)
      },
      "&:hover": {
        color: theme.palette.grey[500]
      }
    }
  },
  margin: {
    marginLeft: theme.spacing(3.5)
  },
  sideBarIcon: {
    padding: 0,
    color: theme.palette.common.white,
    cursor: "pointer"
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 960) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 960) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  }

  //Small Screens
  createDrawer() {
    return (
      <div>
        <AppBar style={{ background: "#252525" }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <CustomAvatar />
              <MenuIcon
                className={this.props.classes.sideBarIcon}
                onClick={() => {
                  this.setState({ drawer: true });
                }}
              />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          anchor="right"
          open={this.state.drawer}
          onClose={() => {
            this.setState({ drawer: false });
          }}
          onOpen={() => {
            this.setState({ drawer: true });
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawer: false });
            }}
            onKeyDown={() => {
              this.setState({ drawer: false });
            }}
          >
            <List className={this.props.classes.list}>
              {pages.map(item => (
                <Link
                  to={`/${item.name
                    .toLocaleLowerCase()
                    .split(" ")
                    .join("")}`}
                  key={item.key}
                >
                  <ListItem key={1} button divider>
                    {item.name}
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  //Larger Screens
  destroyDrawer() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar style={{ background: "#252525" }}>
          <Container maxWidth="lg">
            <Toolbar style={{ padding: 0 }}>
              <CustomAvatar />
              {pages.map(item => (
                <Typography
                  color="inherit"
                  className={classes.padding}
                  key={item.key}
                >
                  <Link
                    to={`/${item.name
                      .toLocaleLowerCase()
                      .split(" ")
                      .join("")}`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </Typography>
              ))}
            </Toolbar>
          </Container>
        </AppBar>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Navbar);
