import React from "react";
import clsx from "clsx";
import { ProductConsumer } from "../../../Context";
import {
  Box,
  Typography,
  Divider,
  Card,
  Link,
  Avatar
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../../Files/Images/all.png";

const styles = theme => ({
  title: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2)
  },
  menus: {
    overflow: "hidden",
    "& > a": {
      float: "left",
      cursor: "pointer",
      position: "relative",
      textDecoration: "none",
      textAlign: "center",
      "& > div": {
        margin: "0 auto",
        width: "80px"
      }
    }
  },
  menus6: {
    "& > a": {
      width: "calc(100% / 6)",
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% / 3)"
      }
    }
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            console.log(value.products);
            let length = value.products.length;
            let count = 0;
            for (let i = 0; i < length; i++) {
              if (value.products[i].type === "Shoes") {
                count++;
              }
              // console.log(value.products[i].type === "Shoes");
            }
            return (
              <Card>
                <Box px={1.5} py={1.5}>
                  <Typography component="span" variant="h5">
                    <b>Shoes</b>
                  </Typography>
                  &nbsp;&nbsp;
                  <Typography component="span" color="textSecondary">
                    <b>({count} products)</b>
                  </Typography>
                </Box>
                <Divider />
                <Box px={1.5} py={1.5}>
                  <div className={classes.filter}>
                    <div className={clsx(classes.menus, classes.menus6)}>
                      {[0, 1, 2, 3, 4, 5].map(item => (
                        <Link key={item} to="#">
                          <Avatar
                            src={logo}
                            variant="square"
                            alt={`logo${item}`}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </Box>
              </Card>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Header);
