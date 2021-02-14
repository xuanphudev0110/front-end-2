import React from "react";
import { makeStyles } from "@material-ui/core";
import { OrangeTypography } from "../../Core/TypographyColor";
import content from "../../Files/Images/bg-content.png";
import contact from "../../Files/Images/contact-bg.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  bg: {
    background: `url("${contact}") center center`
  },
  bgFooter: {
    background: `url("${content}")`,
    padding: theme.spacing(3, 2)
  },
  divider: {
    background: "#ab967f"
  }
}));
function Tutorial() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div className={classes.bgFooter}>
        <OrangeTypography>
          <b>Guide to buying installment</b>
        </OrangeTypography>
        <List component="nav" aria-label="secondary mailbox folders">
          <Divider className={classes.divider} />
          <ListItem button>
            <ListItemText
              style={{ color: "#ab967f" }}
              primary="Installment payments through a finance company"
            />
          </ListItem>
          <Divider className={classes.divider} />
          <ListItem button>
            <ListItemText
              style={{ color: "#ab967f" }}
              primary="Installment payment via credit card"
            />
          </ListItem>
          <Divider className={classes.divider} />
          <ListItem button>
            <ListItemText
              style={{ color: "#ab967f" }}
              primary="Answering questions about installment payments"
            />
          </ListItem>
          <Divider className={classes.divider} />
          <ListItem button>
            <ListItemText
              style={{ color: "#ab967f" }}
              primary="Installment payment via F.Friends"
            />
          </ListItem>
          <Divider className={classes.divider} />
        </List>
      </div>
    </div>
  );
}

export default Tutorial;
